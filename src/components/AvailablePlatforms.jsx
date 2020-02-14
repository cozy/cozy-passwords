import React from 'react'
import Card from 'cozy-ui/transpiled/react/Card'
import Icon from 'cozy-ui/transpiled/react/Icon'
import { ButtonLink } from 'cozy-ui/transpiled/react/Button'
import supportedPlatforms from 'supportedPlatforms'
import Stack from 'cozy-ui/transpiled/react/Stack'
import { Text } from 'cozy-ui/transpiled/react/Text'
import { translate } from 'cozy-ui/transpiled/react/I18n'

const PlatformButton = props => {
  const { icon, ...rest } = props
  return (
    <ButtonLink
      {...rest}
      icon={<Icon icon={icon} size={16} color="var(--slateGrey)" />}
      theme="secondary"
      className="u-mb-half"
    />
  )
}

// eslint-disable-next-line no-unused-vars
const DumbAvailablePlatforms = ({ t, f, ...props }) => {
  return (
    <Card {...props}>
      <Stack spacing="m">
        <Text>{t('AvailablePlatforms.text')}</Text>
        <div>
          {Object.entries(supportedPlatforms).map(([platform, infos]) => (
            <PlatformButton
              key={platform}
              href={infos.storeUrl}
              icon={`browser-${platform}`}
              label={infos.label}
            />
          ))}
          <PlatformButton
            disabled
            icon="phone"
            label={t('AvailablePlatforms.smartphone')}
          />
        </div>
      </Stack>
    </Card>
  )
}

const AvailablePlatforms = translate()(DumbAvailablePlatforms)

export default AvailablePlatforms
