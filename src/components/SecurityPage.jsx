import React from 'react'
import { ButtonLink } from 'cozy-ui/transpiled/react/Button'
import AppLinker, { generateWebLink } from 'cozy-ui/transpiled/react/AppLinker'
import { translate } from 'cozy-ui/transpiled/react/I18n'
import { withClient } from 'cozy-client'
import flowRight from 'lodash/flowRight'

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

const SecurityPage = () => {
  return (
    <div>
      <LinkToSettings />
    </div>
  )
}

export default SecurityPage
