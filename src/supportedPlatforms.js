const supportedPlatforms = {
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

export const isSupportedPlatform = platformName => {
  const normalizedPlatformName = platformName.trim().toLowerCase()

  return Object.keys(supportedPlatforms).includes(normalizedPlatformName)
}

export default supportedPlatforms
