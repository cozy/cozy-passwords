import React from 'react'
import Button, { ButtonLink } from 'cozy-ui/transpiled/react/Button'
import AppLinker, { generateWebLink } from 'cozy-ui/transpiled/react/AppLinker'
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

const DumbLinkToSettings = withClient(props => {
  // eslint-disable-next-line no-unused-vars
  const { client, t, f, ...rest } = props
  const cozyURL = new URL(client.getStackClient().uri)
  const { cozySubdomainType } = client.getInstanceOptions()
  const settingsAppSlug = 'settings'
  const rawSettingsAppHref = generateWebLink({
    cozyUrl: cozyURL.origin,
    slug: settingsAppSlug,
    subDomainType: cozySubdomainType
  })

  const passwordsUrl = generateWebLink({
    cozyUrl: cozyURL.origin,
    slug: 'passwords',
    subDomainType: cozySubdomainType
  })

  const successUrl = passwordsUrl + 'installation'
  const cancelUrl = passwordsUrl + 'security/hint'

  const settingsAppHref =
    rawSettingsAppHref +
    `profile/password?redirect_success=${encodeURIComponent(
      successUrl
    )}&redirect_cancel=${encodeURIComponent(cancelUrl)}`

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

const SecurityPage = translate()(DumbSecurityPage)

export default SecurityPage
