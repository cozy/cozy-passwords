import React from 'react'
import Card from 'cozy-ui/transpiled/react/Card'
import Icon from 'cozy-ui/transpiled/react/Icon'
import Button, { ButtonLink } from 'cozy-ui/transpiled/react/Button'
import supportedPlatforms from 'supportedPlatforms'
import Stack from 'cozy-ui/transpiled/react/Stack'
import { Text } from 'cozy-ui/transpiled/react/Text'
import { useI18n } from 'cozy-ui/transpiled/react/I18n'
import { isAndroid, isIOS } from 'cozy-device-helper'

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

const AppleStoreButton = props => {
  return  <ButtonLink {...props}>Apple store</ButtonLink>
}

const PlayStoreButton = props => {
  return  <ButtonLink {...props}>Play store</ButtonLink>
}

const storeLinksPerOS = {
  ios: 'https://itunesconnect.com',
  android: 'http://playstore.com'
}

const AvailablePlatforms = props => {
  const { t } = useI18n()
  const [isSmartphoneModalOpened, setSmartphoneModalOpened] = useState(false)
  const handleOpenModal = useCallback(ev => {
    setSmartphoneModalOpened(true)
  }, [setSmartphoneModalOpened])

  const handleDismissModal = useCallback(() => {
    setSmartphoneModalOpened(false)
  }, [setSmartphoneModalOpened])
  const mobileOS = isAndroid() ? 'android' : isIOS() ? 'ios' : null
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
            icon="phone"
            label={t('AvailablePlatforms.smartphone')}

            href={mobileOS !== null ? storeLinksPerOS[mobileOS] : null}
            onClick={mobileOS === null ? handleClickSmartphone : null}
          />
          {isSmartphoneModalOpened ?
            <Modal dismissAction={handleDismissModal}>
              <ModalTitle>Please choose your plaform</ModalTitle>
              <AppleStoreButton href={storeLinksPerOS.ios} />
              <PlayStoreButton href={storeLinksPerOS.android} />
              <ModalFooter>
                <Button onClick={handleDismissModal} theme="secondary">Cancel</Button>
              </ModalFooter>
            </Modal> : null}
        </div>
      </Stack>
    </Card>
  )
}

export default AvailablePlatforms
