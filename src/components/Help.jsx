import React from 'react'
import snarkdown from 'snarkdown'

import Stack from 'cozy-ui/transpiled/react/Stack'
import { useI18n } from 'cozy-ui/transpiled/react/I18n'
import Icon from 'cozy-ui/transpiled/react/Icon'
import GearIcon from 'cozy-ui/transpiled/react/Icons/Gear'

import AvailablePlatforms from 'components/AvailablePlatforms'
import ChangePasswordLink from 'components/ChangePasswordLink'

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
      <ChangePasswordLink
        successRoute="#/installation/configureExtension"
        cancelRoute="#/installation/configureExtension"
        Component="a"
      >
        <Icon size={12} icon={GearIcon} /> {t('UpdateCozyPassPassword')}
      </ChangePasswordLink>
      <AvailablePlatforms />
    </Stack>
  )
}

export default Help
