import React from 'react'
import Button, { ButtonLink } from 'cozy-ui/transpiled/react/Button'
import AppLinker, { generateWebLink } from 'cozy-ui/transpiled/react/AppLinker'
import { translate } from 'cozy-ui/transpiled/react/I18n'
import { withClient } from 'cozy-client'
import flowRight from 'lodash/flowRight'
import { Link } from 'react-router-dom'

const DumbLinkToSettings = withClient(props => {
  // eslint-disable-next-line no-unused-vars
  const { client, t, f, ...rest } = props
  const cozyURL = new URL(client.getStackClient().uri)
  const { cozySubdomainType } = client.getInstanceOptions()
  const settingsAppSlug = 'settings'
  const settingsAppHref = generateWebLink({
    cozyUrl: cozyURL.origin,
    slug: settingsAppSlug,
    subDomainType: cozySubdomainType
  })

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

const LinkToSettings = flowRight(withClient, translate())(DumbLinkToSettings)

const DumbSecurityPage = props => {
  const { t } = props

  return (
    <>
      <LinkToSettings />
      <Button
        tag={Link}
        to="/security/hint"
        label={t('SecurityPage.keep-password')}
        theme="secondary"
      />
    </>
  )
}

const SecurityPage = translate()(DumbSecurityPage)

export default SecurityPage
