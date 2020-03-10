import React from 'react'
import Wrapper from 'components/Wrapper'
import NarrowContent from 'cozy-ui/transpiled/react/NarrowContent'
import Stack from 'cozy-ui/transpiled/react/Stack'
import { MainTitle, Text } from 'cozy-ui/transpiled/react/Text'
import { useI18n } from 'cozy-ui/transpiled/react/I18n'
import { currentBrowser } from '../currentBrowser'
import chromeIllustration from 'assets/extension-connected-chrome.svg'
import firefoxIllustration from 'assets/extension-connected-firefox.svg'
import Help from './Help'
import { Link } from 'react-router-dom'

const illustrations = {
  chrome: chromeIllustration,
  firefox: firefoxIllustration
}

const ImportedPageLink = () => {
  const { t } = useI18n()
  return (
    <p>
      <Link to="/installation/import">{t('Help.import')}</Link>
    </p>
  )
}

const ConnectedPage = () => {
  const { t } = useI18n()

  return (
    <Wrapper>
      <NarrowContent>
        <Stack spacing="xxl">
          <img src={illustrations[currentBrowser.name]} alt="" />
          <Stack spacing="m">
            <MainTitle>{t('ConnectedPage.title')}</MainTitle>
            <Text>{t('ConnectedPage.description')}</Text>
          </Stack>
          <Stack spacing="l">
            <ImportedPageLink />
            <Help />
          </Stack>
        </Stack>
      </NarrowContent>
    </Wrapper>
  )
}

export default ConnectedPage
