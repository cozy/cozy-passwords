import React from 'react'

import { useI18n } from 'cozy-ui/transpiled/react/I18n'
import generateWebAppLink from 'helpers/generateWebAppLink'
import AppLinker from 'cozy-ui/transpiled/react/AppLinker'
import { ButtonLink } from 'cozy-ui/transpiled/react/Button'

import { useClient } from 'cozy-client'

const SETTINGS_APP_SLUG = 'settings'
const PASSWORD_APP_SLUG = 'passwords'

const ChangePasswordLink = ({ successRoute, cancelRoute, ...props }) => {
  const client = useClient()
  const { t } = useI18n()
  const rawSettingsAppHref = generateWebAppLink(SETTINGS_APP_SLUG, client)
  const passwordsUrl = generateWebAppLink(PASSWORD_APP_SLUG, client)

  const successUrl = new URL(successRoute, passwordsUrl).href
  const cancelUrl = new URL(cancelRoute, passwordsUrl).href

  const settingsPath = '#/profile/password'
  const settingsQuery = `?redirect_success=${encodeURIComponent(
    successUrl
  )}&redirect_cancel=${encodeURIComponent(cancelUrl)}`

  const settingsAppHref = new URL(
    settingsPath + settingsQuery,
    rawSettingsAppHref
  ).href

  return (
    <AppLinker slug={SETTINGS_APP_SLUG} href={settingsAppHref}>
      {({ onClick, href }) => (
        <ButtonLink href={href} onClick={onClick} {...props} />
      )}
    </AppLinker>
  )
}

export default ChangePasswordLink
