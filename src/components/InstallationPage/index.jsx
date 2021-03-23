import React, { useState, useContext, useEffect, useMemo } from 'react'
import { BitwardenSettingsContext } from '../../bitwarden-settings'

import { useClient } from 'cozy-client'
import { useParams } from 'react-router'
import { useI18n } from 'cozy-ui/transpiled/react/I18n'
import {
  Stepper,
  Step,
  StepButton,
  StepLabel
} from 'cozy-ui/transpiled/react/Stepper'

import PresentationStep from '../PresentationStep'
import SecurityStep from '../SecurityStep'
import HintStep from '../HintStep'
import ConfigureExtensionStep from '../ConfigureExtensionStep'
import { canAuthWithOIDC as canAuthWithOIDCFn } from 'helpers/oidc'
import StepsContext from './stepsContext'

import BarTitle from 'BarTitle'
import { fetchHintExists } from '../../hint'
import { isMobile } from 'cozy-device-helper'
import './styles.css'

function getSteps(t, canAuthWithOIDC, isVaultConfigured) {
  return [
    t('Nav.presentation'),
    canAuthWithOIDC
      ? isVaultConfigured
        ? t('InstallationStep.steps.pass-password-chosen')
        : t('InstallationStep.steps.choose-pass-password')
      : t('InstallationStep.steps.improve-password'),
    t('InstallationStep.steps.leave-hint'),
    isMobile()
      ? t('InstallationStep.steps.install-app')
      : t('InstallationStep.steps.install-extension')
  ]
}

const STEPS = {
  presentation: 0,
  security: 1,
  hint: 2,
  configureExtension: 3
}

function getStepContent(step, setActiveStep, { hasHint }) {
  switch (step) {
    case STEPS.presentation:
      return <PresentationStep onLetsGo={() => setActiveStep(STEPS.security)} />
    case STEPS.security:
      return (
        <SecurityStep
          onNext={() => setActiveStep(STEPS.hint)}
          onSkip={() => setActiveStep(STEPS.hint)}
        />
      )
    case STEPS.hint:
      return (
        <HintStep
          hasHint={hasHint}
          onSkip={() => setActiveStep(STEPS.configureExtension)}
          goToNextStep={() => setActiveStep(STEPS.configureExtension)}
        />
      )
    case STEPS.configureExtension:
      return <ConfigureExtensionStep />
  }
}

const InstallationPage = function() {
  const params = useParams()
  const { t } = useI18n()

  const bitwardenSettings = useContext(BitwardenSettingsContext)
  const isVaultConfigured =
    bitwardenSettings && bitwardenSettings.extension_installed

  const [activeStep, setActiveStep] = useState(
    params.step
      ? STEPS[params.step]
      : isVaultConfigured
      ? STEPS.configureExtension
      : STEPS.presentation
  )

  const client = useClient()

  const canAuthWithOIDC = canAuthWithOIDCFn(client)
  const steps = getSteps(t, canAuthWithOIDC, isVaultConfigured)

  const [hasHint, setHasHint] = useState(null)

  useEffect(() => {
    const fetch = async () => {
      const hint = await fetchHintExists(client)
      setHasHint(hint)
    }
    fetch()
  }, [activeStep, client])

  const contextValue = useMemo(() => {
    return { hasHint, isVaultConfigured, canAuthWithOIDC }
  }, [hasHint, isVaultConfigured, canAuthWithOIDC])

  const canNavigateStepper = !canAuthWithOIDC || isVaultConfigured
  return (
    <StepsContext.Provider value={contextValue}>
      <div className="InstallationPage">
        <BarTitle>{t('Nav.installation')}</BarTitle>
        <Stepper
          alternativeLabel
          nonLinear={canNavigateStepper}
          activeStep={activeStep}
        >
          {steps.map((label, index) => {
            const labelProps = {
              error:
                index === STEPS.hint && isVaultConfigured && hasHint === false
            }
            return (
              <Step
                disabled
                key={label}
                onClick={canNavigateStepper ? () => setActiveStep(index) : null}
              >
                <StepButton>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </StepButton>
              </Step>
            )
          })}
        </Stepper>
        {getStepContent(activeStep, setActiveStep, { hasHint })}
      </div>
    </StepsContext.Provider>
  )
}

export default InstallationPage
