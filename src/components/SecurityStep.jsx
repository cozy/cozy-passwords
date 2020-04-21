import React from 'react'
import Button, { ButtonLink } from 'cozy-ui/transpiled/react/Button'
import AppLinker from 'cozy-ui/transpiled/react/AppLinker'
import { useI18n } from 'cozy-ui/transpiled/react/I18n'
import { withClient } from 'cozy-client'
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
import VerticallyCentered from './VerticallyCentered'

const DumbLinkToSettings = withClient(props => {
  const { client, ...rest } = props
  const { t } = useI18n()
  const settingsAppSlug = 'settings'
  const rawSettingsAppHref = generateWebAppLink(settingsAppSlug, client)
  const passwordsUrl = generateWebAppLink('passwords', client)

  const successUrl = new URL('#/installation/configureExtension', passwordsUrl)
    .href
  const cancelUrl = new URL('#/installation/hint', passwordsUrl).href

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
          label={t('SecurityStep.enhance-password')}
          {...rest}
        />
      )}
    </AppLinker>
  )
})

const LinkToSettings = withClient(DumbLinkToSettings)

const SecurityStep = ({ onSkip }) => {
  const { t } = useI18n()

  return (
    <VerticallyCentered>
      <Wrapper>
        <NarrowContent>
          <Stack>
            <img src={strongPasswordIcon} alt="" width="204" />
            <MainTitle>{t('SecurityStep.title')}</MainTitle>
            <Stack spacing="xxl">
              <Text>{t('SecurityStep.description')}</Text>
              <Card>
                <UnorderedList className="u-ta-left u-mv-0">
                  <ListItem
                    dangerouslySetInnerHTML={{
                      __html: snarkdown(
                        t('SecurityStep.advices.strong_passphrase')
                      )
                    }}
                  />
                  <ListItem
                    dangerouslySetInnerHTML={{
                      __html: snarkdown(t('SecurityStep.advices.memorize'))
                    }}
                  />
                  <ListItem>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: snarkdown(t('SecurityStep.advices.our_tip'))
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
                  onClick={onSkip}
                  label={t('SecurityStep.keep-password')}
                  theme="secondary"
                  className="u-mt-half"
                  extension="full"
                />
              </Stack>
            </Stack>
          </Stack>
        </NarrowContent>
      </Wrapper>
    </VerticallyCentered>
  )
}

export default SecurityStep
