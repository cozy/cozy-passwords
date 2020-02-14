import React from 'react'
import snarkdown from 'snarkdown'
import Stack from 'cozy-ui/transpiled/react/Stack'
import { translate } from 'cozy-ui/transpiled/react/I18n'
import AvailablePlatforms from './AvailablePlatforms'

// eslint-disable-next-line no-unused-vars
const DumbHelp = ({ t, f, ...props }) => {
  return (
    <Stack spacing="l">
      <p
        dangerouslySetInnerHTML={{
          __html: snarkdown(t('Help.faq'))
        }}
      />
      <AvailablePlatforms />
    </Stack>
  )
}

const Help = translate()(DumbHelp)

export default Help
