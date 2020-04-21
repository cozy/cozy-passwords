import React, { useState, useContext, useEffect } from 'react'
import { BitwardenSettingsContext } from '../bitwarden-settings'
import {
  useExtensionStatus,
  extensionStatuses
} from '../helpers/extensionStatus'
import { useClient } from 'cozy-client'
import { useParams } from 'react-router'
import { useI18n } from 'cozy-ui/transpiled/react/I18n'
import PresentationStep from './PresentationStep'
import SecurityStep from './SecurityStep'
import HintStep from './HintStep'
import InstallationStep from './InstallationStep'
import InstalledStep from './InstalledStep'
import ConnectedStep from './ConnectedStep'
import BarTitle from 'BarTitle'
import { fetchHint } from '../hint'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepButton from '@material-ui/core/StepButton'
import StepLabel from '@material-ui/core/StepLabel'
import { isMobile } from 'cozy-device-helper'

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

const ConfigureExtensionStep = ({ onConnected }) => {
  const extensionStatus = useExtensionStatus()
  if (extensionStatus == extensionStatuses.installed) {
    return <InstalledStep onConnected={onConnected} />
  } else if (extensionStatus === extensionStatuses.connected) {
    return <ConnectedStep />
  } else {
    return <InstallationStep />
  }
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

  const [activeStep, setActiveStep] = useState(
    params.step
      ? STEPS[params.step]
      : bitwardenSettings && bitwardenSettings.extension_installed
      ? STEPS.configureExtension
      : STEPS.presentation
  )

  const steps = getSteps(t)

  const client = useClient()
  const [hasHint, setHasHint] = useState(null)

  useEffect(() => {
    const fetch = async () => {
      const hint = await fetchHint(client)
      setHasHint(Boolean(hint))
    }
    fetch()
  }, [activeStep])

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', width: '100%' }}>
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
              index === STEPS.hint && bitwardenSettings && hasHint === false
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
