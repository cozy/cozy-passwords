import React from 'react'
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
import { withClient } from 'cozy-client'
import snarkdown from 'snarkdown'
import WithCozyIcon from 'components/WithCozyIcon'
import supportedPlatforms from 'supportedPlatforms'
import VerticallyCentered from '../VerticallyCentered'
import { InstallNativeAppButton } from '../AvailablePlatforms'
import { isMobile } from 'cozy-device-helper'

const browser = detectBrowser()

const DumbInstallationPage = props => {
  const { client } = props
  const { t } = useI18n()
  const cozyURL = new URL(client.getStackClient().uri)

  const isNativeMobile = isMobile()
  return (
    <VerticallyCentered>
      <Wrapper>
        <NarrowContent>
          {isNativeMobile ? (
            <Stack spacing="m">
              <MainTitle>{t('InstallationPageMobile.title')}</MainTitle>
              <Text>{t('InstallationPageMobile.description')}</Text>
              <InstallNativeAppButton
                label={'Install the app'}
                theme="primary"
              />
            </Stack>
          ) : (
            <Stack spacing="xxl">
              <Stack spacing="m">
                <img src={browserExtensionIcon} alt="" />
                <MainTitle>{t('InstallationPage.title')}</MainTitle>
                <Text>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: snarkdown(
                        t('InstallationPage.descriptionStart', {
                          address: cozyURL.host
                        })
                      )
                    }}
                  />{' '}
                  <WithCozyIcon>
                    {t('InstallationPage.cozyExtension')}
                  </WithCozyIcon>{' '}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: snarkdown(
                        t('InstallationPage.descriptionEnd', {
                          address: cozyURL.host
                        })
                      )
                    }}
                  />
                </Text>
              </Stack>
              <Card className="u-ta-left">
                <OrderedList className="u-mv-0">
                  <ListItem>
                    {t(`InstallationPage.step1.${browser.name}`)}
                  </ListItem>
                  <ListItem
                    dangerouslySetInnerHTML={{
                      __html: snarkdown(
                        t(`InstallationPage.step2.${browser.name}`)
                      )
                    }}
                  />
                  <ListItem
                    dangerouslySetInnerHTML={{
                      __html: snarkdown(
                        t('InstallationPage.step3', { address: cozyURL.host })
                      )
                    }}
                  />
                </OrderedList>
              </Card>
              <ButtonLink
                href={supportedPlatforms[browser.name].storeUrl}
                target="_blank"
                label={t('InstallationPage.cta')}
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

const InstallationPage = withClient(DumbInstallationPage)

export default InstallationPage
