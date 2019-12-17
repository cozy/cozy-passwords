import React from 'react'
import Wrapper from 'components/Wrapper'
import NarrowContent from 'cozy-ui/transpiled/react/NarrowContent'
import Stack from 'cozy-ui/transpiled/react/Stack'
import { MainTitle, Text } from 'cozy-ui/transpiled/react/Text'
import extensionInstalledIcon from 'assets/extension-installed.svg'
import compose from 'lodash/flowRight'
import { withClient } from 'cozy-client'
import { translate } from 'cozy-ui/transpiled/react/I18n'
import snarkdown from 'snarkdown'

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
            <Text
              dangerouslySetInnerHTML={{
                __html: snarkdown(
                  t('InstalledPage.description', { address: cozyURL.host })
                )
              }}
            />
          </Stack>
        </Stack>
      </NarrowContent>
    </Wrapper>
  )
}

const InstalledPage = compose(translate(), withClient)(DumbInstalledPage)

export default InstalledPage
