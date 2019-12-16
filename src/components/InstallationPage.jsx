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
import { translate } from 'cozy-ui/transpiled/react/I18n'
import compose from 'lodash/flowRight'
import { withClient } from 'cozy-client'
import snarkdown from 'snarkdown'

const browser = detectBrowser()

const stores = {
  chrome:
    'https://chrome.google.com/webstore/detail/cozy-personal-cloud/jplochopoaajoochpoccajmgelpfbbic',
  firefox: 'https://addons.mozilla.org/en-US/firefox/addon/cozy-personal-cloud'
}

const DumbInstallationPage = props => {
  const { t, client } = props

  const cozyURL = new URL(client.getStackClient().uri)

  return (
    <Wrapper>
      <NarrowContent>
        <Stack spacing="xxl">
          <Stack spacing="m">
            <img src={browserExtensionIcon} alt="" />
            <MainTitle>{t('InstallationPage.title')}</MainTitle>
            <Text>{t('InstallationPage.description')}</Text>
          </Stack>
          <Card className="u-ta-left">
            <OrderedList className="u-mv-0">
              <ListItem>{t(`InstallationPage.step1.${browser.name}`)}</ListItem>
              <ListItem
                dangerouslySetInnerHTML={{
                  __html: snarkdown(t(`InstallationPage.step2.${browser.name}`))
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
            href={stores[browser.name]}
            target="_blank"
            label="Installer l'extension Cozy"
            extension="full"
            className="u-mt-2-half"
          />
        </Stack>
      </NarrowContent>
    </Wrapper>
  )
}

const InstallationPage = compose(translate(), withClient)(DumbInstallationPage)

export default InstallationPage
