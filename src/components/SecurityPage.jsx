import React from 'react'
import Button, { ButtonLink } from 'cozy-ui/transpiled/react/Button'
import AppLinker from 'cozy-ui/transpiled/react/AppLinker'
import { translate } from 'cozy-ui/transpiled/react/I18n'
import { withClient } from 'cozy-client'
import compose from 'lodash/flowRight'
import { Link } from 'react-router-dom'
import Wrapper from 'components/Wrapper'
import NarrowContent from 'cozy-ui/transpiled/react/NarrowContent'
import PasswordExample from 'cozy-ui/transpiled/react/PasswordExample'
import strongPasswordIcon from 'assets/strong-password.svg'
import Stack from 'cozy-ui/transpiled/react/Stack'
import { MainTitle, Text } from 'cozy-ui/transpiled/react/Text'
import Card from 'cozy-ui/transpiled/react/Card'
import { UnorderedList, ListItem } from 'cozy-ui/transpiled/react/UnorderedList'
import snarkdown from 'snarkdown'
import generateWebAppLink from 'helpers/generateWebAppLink'
import withExtensionInstallCheck from './withExtensionInstallCheck'

const DumbLinkToSettings = withClient(props => {
  // eslint-disable-next-line no-unused-vars
  const { client, t, f, ...rest } = props
  const settingsAppSlug = 'settings'
  const rawSettingsAppHref = generateWebAppLink(settingsAppSlug, client)
  const passwordsUrl = generateWebAppLink('passwords', client)

  const successUrl = new URL('#/installation', passwordsUrl).href
  const cancelUrl = new URL('#/security/hint', passwordsUrl).href

  const settingsPath = '#/profile/password'
  const settingsQuery = `?redirect_success=${encodeURIComponent(
    successUrl
  )}&redirect_cancel=${encodeURIComponent(cancelUrl)}`

  const settingsAppHref = new URL(
    settingsPath + settingsQuery,
    rawSettingsAppHref
  ).href

  return (
    <AppLinker slug={settingsAppSlug} href={settingsAppHref}>
      {({ onClick, href }) => (
        <ButtonLink
          href={href}
          onClick={onClick}
          label={t('SecurityPage.enhance-password')}
          {...rest}
        />
      )}
    </AppLinker>
  )
})

const LinkToSettings = compose(withClient, translate())(DumbLinkToSettings)

const DumbSecurityPage = props => {
  const { t } = props

  return (
    <Wrapper>
      <NarrowContent>
        <Stack>
          <img src={strongPasswordIcon} alt="" width="204" />
          <MainTitle>{t('SecurityPage.title')}</MainTitle>
          <Stack spacing="xxl">
            <Text>{t('SecurityPage.description')}</Text>
            <Card>
              <UnorderedList className="u-ta-left u-mv-0">
                <ListItem
                  dangerouslySetInnerHTML={{
                    __html: snarkdown(
                      t('SecurityPage.advices.strong_passphrase')
                    )
                  }}
                />
                <ListItem
                  dangerouslySetInnerHTML={{
                    __html: snarkdown(t('SecurityPage.advices.memorize'))
                  }}
                />
                <ListItem>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: snarkdown(t('SecurityPage.advices.our_tip'))
                    }}
                  />
                  <PasswordExample password="Cl4ude€st1Nu@ge" />
                </ListItem>
              </UnorderedList>
            </Card>
            <Stack spacing="xs">
              <LinkToSettings extension="full" />
              <Button
                tag={Link}
                to="/security/hint"
                label={t('SecurityPage.keep-password')}
                theme="secondary"
                className="u-mt-half"
                extension="full"
              />
            </Stack>
          </Stack>
        </Stack>
      </NarrowContent>
    </Wrapper>
  )
}

const SecurityPage = compose(
  translate(),
  withExtensionInstallCheck
)(DumbSecurityPage)

export default SecurityPage
