import React, { useState, useContext, useEffect } from 'react'
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

import BarTitle from 'BarTitle'
import { fetchHintExists } from '../../hint'
import { isMobile } from 'cozy-device-helper'
import './styles.css'

function getSteps(t) {
  return [
    t('Nav.presentation'),
    t('InstallationStep.steps.improve-password'),
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
      return <SecurityStep onSkip={() => setActiveStep(STEPS.hint)} />
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

  const steps = getSteps(t)

  const client = useClient()
  const [hasHint, setHasHint] = useState(null)

  useEffect(() => {
    const fetch = async () => {
      const hint = await fetchHintExists(client)
      setHasHint(hint)
    }
    fetch()
  }, [activeStep])

  return (
    <div className="InstallationPage">
      <BarTitle>{t('Nav.installation')}</BarTitle>
      <Stepper alternativeLabel nonLinear activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {
            onClick: () => {
              setActiveStep(index)
            }
          }
          const labelProps = {
            error:
              index === STEPS.hint && isVaultConfigured && hasHint === false
          }
          return (
            <Step key={label} {...stepProps}>
              <StepButton>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </StepButton>
            </Step>
          )
        })}
      </Stepper>
      {getStepContent(activeStep, setActiveStep, { hasHint })}
    </div>
  )
}

export default InstallationPage
