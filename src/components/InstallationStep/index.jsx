import React, { useEffect } from 'react'
import { detect as detectBrowser } from 'detect-browser'
import Wrapper from 'components/Wrapper'
import NarrowContent from 'cozy-ui/transpiled/react/NarrowContent'
import browserExtensionIcon from 'assets/browser-extension.svg'
import Stack from 'cozy-ui/transpiled/react/Stack'
import { MainTitle, Text } from 'cozy-ui/transpiled/react/Text'
import Card from 'cozy-ui/transpiled/react/Card'
import { ButtonLink } from 'cozy-ui/transpiled/react/Button'
import { OrderedList, ListItem } from 'cozy-ui/transpiled/react/OrderedList'
import { useI18n } from 'cozy-ui/transpiled/react/I18n'
import { useClient } from 'cozy-client'
import snarkdown from 'snarkdown'
import WithCozyIcon from 'components/WithCozyIcon'
import getSupportedPlatforms from 'supportedPlatforms'
import VerticallyCentered from '../VerticallyCentered'
import { InstallNativeAppButton } from '../AvailablePlatforms'
import { isMobile } from 'cozy-device-helper'
import BarTitle from 'BarTitle'
import {
  useExtensionStatus,
  extensionStatuses
} from '../../helpers/extensionStatus'

const browser = detectBrowser()

const InstallationStep = ({ onExtensionInstalled }) => {
  const client = useClient()
  const { t } = useI18n()
  const cozyURL = new URL(client.getStackClient().uri)

  const supportedPlatforms = getSupportedPlatforms()
  const platform = supportedPlatforms[browser.name] || {}
  const storeURL = platform.storeUrl
  const isNativeMobile = isMobile()

  const extensionStatus = useExtensionStatus()
  useEffect(() => {
    if (extensionStatus == extensionStatuses.installed) {
      onExtensionInstalled && onExtensionInstalled()
    }
  }, [extensionStatus, onExtensionInstalled])

  return (
    <VerticallyCentered>
      <BarTitle>{t('Nav.installation')}</BarTitle>
      <Wrapper>
        <NarrowContent>
          {isNativeMobile ? (
            <Stack spacing="m">
              <MainTitle>{t('InstallationStepMobile.title')}</MainTitle>
              <Text>{t('InstallationStepMobile.description')}</Text>
              <InstallNativeAppButton
                label={t('InstallationStepMobile.installApp')}
                theme="primary"
              />
            </Stack>
          ) : (
            <Stack spacing="xxl">
              <Stack spacing="m">
                <img src={browserExtensionIcon} alt="" />
                <MainTitle>{t('InstallationStep.title')}</MainTitle>
                <Text>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: snarkdown(
                        t('InstallationStep.descriptionStart', {
                          address: cozyURL.host
                        })
                      )
                    }}
                  />{' '}
                  <WithCozyIcon>
                    {t('InstallationStep.cozyExtension')}
                  </WithCozyIcon>{' '}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: snarkdown(
                        t('InstallationStep.descriptionEnd', {
                          address: cozyURL.host
                        })
                      )
                    }}
                  />
                </Text>
              </Stack>
              <Card className="u-ta-left">
                <OrderedList className="u-mv-0">
                  <ListItem
                    dangerouslySetInnerHTML={{
                      __html: snarkdown(
                        t(`InstallationStep.step1.${browser.name}`)
                      )
                    }}
                  />
                  <ListItem
                    dangerouslySetInnerHTML={{
                      __html: snarkdown(
                        t(`InstallationStep.step2.${browser.name}`)
                      )
                    }}
                  />
                  <ListItem
                    dangerouslySetInnerHTML={{
                      __html: snarkdown(
                        t('InstallationStep.step3', { address: cozyURL.host })
                      )
                    }}
                  />
                </OrderedList>
              </Card>
              <ButtonLink
                href={storeURL}
                target="_blank"
                label={t('InstallationStep.cta')}
                extension="full"
                className="u-mt-2-half"
              />
            </Stack>
          )}
        </NarrowContent>
      </Wrapper>
    </VerticallyCentered>
  )
}

export default InstallationStep
