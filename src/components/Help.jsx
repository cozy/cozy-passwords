import React from 'react'
import snarkdown from 'snarkdown'
import Stack from 'cozy-ui/transpiled/react/Stack'
import AvailablePlatforms from './AvailablePlatforms'
import { useI18n } from 'cozy-ui/transpiled/react/I18n'
import { Link } from 'react-router-dom'
import flag from 'cozy-flags'

// eslint-disable-next-line no-unused-vars
const Help = props => {
  const { t } = useI18n()

  return (
    <Stack spacing="l">
      <p
        dangerouslySetInnerHTML={{
          __html: snarkdown(t('Help.faq'))
        }}
      />
      {flag('passwords.import-page') ? (
        <p>
          <Link to="/installation/import">{t('Help.import')}</Link>
        </p>
      ) : null}
      <AvailablePlatforms />
    </Stack>
  )
}

export default Help
