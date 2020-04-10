import flag from 'cozy-flags'

const getSupportedPlatforms = () => {
  const platforms = {
    chrome: {
      label: 'Google Chrome',
      storeUrl:
        'https://chrome.google.com/webstore/detail/cozy-personal-cloud/jplochopoaajoochpoccajmgelpfbbic'
    },
    firefox: {
      label: 'Mozilla Firefox',
      storeUrl:
        'https://addons.mozilla.org/en-US/firefox/addon/cozy-personal-cloud'
    }
  }

  if (flag('passwords.safari-supported')) {
    platforms.safari = {
      label: 'Safari',
      storeUrl: 'macappstore://itunes.apple.com/app/id1504487449?mt=12'
    }
  }

  return platforms
}

export const isSupportedPlatform = platformName => {
  const supportedPlatforms = getSupportedPlatforms()
  const normalizedPlatformName = platformName.trim().toLowerCase()

  return Object.keys(supportedPlatforms).includes(normalizedPlatformName)
}

export default getSupportedPlatforms
