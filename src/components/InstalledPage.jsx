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
import { currentBrowser } from '../currentBrowser'
import chromeIllustration from 'assets/extension-installed-chrome.svg'
import firefoxIllustration from 'assets/extension-installed-firefox.svg'

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

const illustrations = {
  chrome: chromeIllustration,
  firefox: firefoxIllustration
}

const DumbInstalledPage = props => {
  const { t, client } = props
  const cozyURL = new URL(client.getStackClient().uri)

  return (
    <Wrapper>
      <NarrowContent>
        <Stack spacing="xxl">
          <img src={illustrations[currentBrowser.name]} alt="" />
          <Stack spacing="m">
            <MainTitle>{t('InstalledPage.title')}</MainTitle>
            <Text>
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
          <Card>
            <Stack spacing="m">
              <Text>{t('InstalledPage.availablePlatforms')}</Text>
              <div>
                {Object.entries(supportedPlatforms).map(([platform, infos]) => (
                  <PlatformButton
                    key={platform}
                    href={infos.storeUrl}
                    icon={`browser-${platform}`}
                    label={infos.label}
                  />
                ))}
                <PlatformButton
                  disabled
                  icon="phone"
                  label={t('InstalledPage.smartphone')}
                />
              </div>
            </Stack>
          </Card>
        </Stack>
      </NarrowContent>
    </Wrapper>
  )
}

const InstalledPage = compose(translate(), withClient)(DumbInstalledPage)

export default InstalledPage
