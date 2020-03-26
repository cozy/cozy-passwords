import React, { useState, useCallback } from 'react'
import { ButtonLink } from 'cozy-ui/transpiled/react/Button'
import supportedPlatforms from 'supportedPlatforms'
import Stack from 'cozy-ui/transpiled/react/Stack'
import { useI18n } from 'cozy-ui/transpiled/react/I18n'
import { isAndroid, isIOS } from 'cozy-device-helper'

import Card from 'cozy-ui/transpiled/react/Card'
import Icon from 'cozy-ui/transpiled/react/Icon'
import { Text } from 'cozy-ui/transpiled/react/Text'
import Modal, { ModalContent } from 'cozy-ui/transpiled/react/Modal'

import playBadgeEn from 'assets/google-play-badge-en.png'
import playBadgeFr from 'assets/google-play-badge-fr.png'

import appStoreBadgeEn from 'assets/app-store-badge-en.png'
import appStoreBadgeFr from 'assets/app-store-badge-fr.png'
import flag from 'cozy-flags'

const playStoreBadges = {
  en: playBadgeEn,
  fr: playBadgeFr
}

const appStoreBadges = {
  en: appStoreBadgeEn,
  fr: appStoreBadgeFr
}

const PlatformButton = props => {
  const { icon, ...rest } = props
  const color = props.theme === 'primary' ? 'var(--white)' : 'var(--slateGrey)'
  return (
    <ButtonLink
      icon={<Icon icon={icon} size={16} color={color} />}
      theme="secondary"
      className="u-mb-half"
      {...rest}
    />
  )
}

const AppStoreButton = props => {
  const { lang } = useI18n()
  const badge = appStoreBadges[lang] || appStoreBadges.en
  return (
    <a {...props}>
      <img src={badge} style={{ height: '3rem', marginRight: '0.5rem' }} />
    </a>
  )
}

const PlayStoreButton = props => {
  const { lang } = useI18n()
  const badge = playStoreBadges[lang] || playStoreBadges.en
  return (
    <a {...props}>
      <img src={badge} style={{ height: '3rem' }} />
    </a>
  )
}

export const InstallNativeAppButton = props => {
  const [isSmartphoneModalOpened, setSmartphoneModalOpened] = useState(false)
  const mobileOS = isAndroid() ? 'android' : isIOS() ? 'ios' : null
  const handleOpenModal = useCallback(() => {
    setSmartphoneModalOpened(true)
  }, [setSmartphoneModalOpened])

  const handleDismissModal = useCallback(() => {
    setSmartphoneModalOpened(false)
  }, [setSmartphoneModalOpened])

  return (
    <>
      <PlatformButton
        icon="phone"
        href={mobileOS !== null ? storeLinksPerOS[mobileOS] : null}
        onClick={mobileOS === null ? handleOpenModal : null}
        {...props}
      />
      {isSmartphoneModalOpened ? (
        <Modal size="small" dismissAction={handleDismissModal}>
          <ModalContent className="u-ta-center">
            <AppStoreButton href={storeLinksPerOS.ios} />
            <PlayStoreButton href={storeLinksPerOS.android} />
          </ModalContent>
        </Modal>
      ) : null}
    </>
  )
}

const storeLinksPerOS = {
  ios: 'https://apps.apple.com/us/app/cozy-pass/id1504487449',
  android: 'https://play.google.com/store/apps/details?id=io.cozy.pass.mobile'
}

const AvailablePlatforms = props => {
  const { t } = useI18n()
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
          {flag('passwords.app-available') ? (
            <InstallNativeAppButton
              label={t('AvailablePlatforms.smartphone')}
            />
          ) : (
            <PlatformButton
              icon="phone"
              label={t('AvailablePlatforms.smartphone-soon')}
              disabled
            />
          )}
        </div>
      </Stack>
    </Card>
  )
}

export default AvailablePlatforms
