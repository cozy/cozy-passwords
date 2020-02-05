import React from 'react'
import Wrapper from 'components/Wrapper'
import NarrowContent from 'cozy-ui/transpiled/react/NarrowContent'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Card from 'cozy-ui/transpiled/react/Card'
import Icon from 'cozy-ui/transpiled/react/Icon'
import { ButtonLink } from 'cozy-ui/transpiled/react/Button'
import { MainTitle, Text } from 'cozy-ui/transpiled/react/Text'
import compose from 'lodash/flowRight'
import { withClient } from 'cozy-client'
import { translate } from 'cozy-ui/transpiled/react/I18n'
import snarkdown from 'snarkdown'
import supportedPlatforms from 'supportedPlatforms'
import CloudIcon from 'components/CloudIcon'
import setupTutorialIllustration from 'assets/setup-tutorial.gif'
import './styles.css'

const PlatformButton = props => {
  const { icon, ...rest } = props
  return (
    <ButtonLink
      {...rest}
      icon={<Icon icon={icon} size={16} color="var(--slateGrey)" />}
      theme="secondary"
      className="u-mb-half"
    />
  )
}

const DumbInstalledPage = props => {
  const { t, client } = props
  const cozyURL = new URL(client.getStackClient().uri)

  return (
    <Wrapper>
      <NarrowContent>
        <Stack spacing="xxl">
          <div className="InstalledPage__illustration">
            <img
              src={setupTutorialIllustration}
              alt=""
              width="512"
              height="220"
            />
            <Icon icon="drawing-arrow-up" width={96} height={86} />
          </div>
          <Stack spacing="m">
            <MainTitle className="InstalledPage__title">
              {t('InstalledPage.title')}
            </MainTitle>
            <Text className="InstalledPage__description">
              <span
                dangerouslySetInnerHTML={{
                  __html: snarkdown(
                    t('InstalledPage.descriptionStart', {
                      address: cozyURL.host
                    })
                  )
                }}
              />{' '}
              <CloudIcon />{' '}
              <span
                dangerouslySetInnerHTML={{
                  __html: snarkdown(
                    t('InstalledPage.descriptionEnd', { address: cozyURL.host })
                  )
                }}
              />
            </Text>
          </Stack>
          <Stack spacing="l">
            <p
              dangerouslySetInnerHTML={{
                __html: snarkdown(t('InstalledPage.faq'))
              }}
            />
            <Card>
              <Stack spacing="m">
                <Text>{t('InstalledPage.availablePlatforms')}</Text>
                <div>
                  {Object.entries(supportedPlatforms).map(
                    ([platform, infos]) => (
                      <PlatformButton
                        key={platform}
                        href={infos.storeUrl}
                        icon={`browser-${platform}`}
                        label={infos.label}
                      />
                    )
                  )}
                  <PlatformButton
                    disabled
                    icon="phone"
                    label={t('InstalledPage.smartphone')}
                  />
                </div>
              </Stack>
            </Card>
          </Stack>
        </Stack>
      </NarrowContent>
    </Wrapper>
  )
}

const InstalledPage = compose(translate(), withClient)(DumbInstalledPage)

export default InstalledPage
