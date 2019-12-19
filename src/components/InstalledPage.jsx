import React from 'react'
import Wrapper from 'components/Wrapper'
import NarrowContent from 'cozy-ui/transpiled/react/NarrowContent'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Card from 'cozy-ui/transpiled/react/Card'
import Icon from 'cozy-ui/transpiled/react/Icon'
import { ButtonLink } from 'cozy-ui/transpiled/react/Button'
import { MainTitle, Text } from 'cozy-ui/transpiled/react/Text'
import extensionInstalledIcon from 'assets/extension-installed.svg'
import compose from 'lodash/flowRight'
import { withClient } from 'cozy-client'
import { translate } from 'cozy-ui/transpiled/react/I18n'
import snarkdown from 'snarkdown'
import WithCozyIcon from 'components/WithCozyIcon'
import platforms from 'platforms'

const DumbInstalledPage = props => {
  const { t, client } = props
  const cozyURL = new URL(client.getStackClient().uri)

  return (
    <Wrapper>
      <NarrowContent>
        <Stack spacing="xxl">
          <img src={extensionInstalledIcon} alt="" />
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
              <WithCozyIcon>cozy</WithCozyIcon>{' '}
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
                {Object.entries(platforms).map(([platform, infos]) => (
                  <ButtonLink
                    key={platform}
                    href={infos.storeUrl}
                    icon={
                      <Icon
                        icon={`browser-${platform}`}
                        size={16}
                        color="var(--slateGrey)"
                      />
                    }
                    theme="secondary"
                    label={infos.label}
                  />
                ))}
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
