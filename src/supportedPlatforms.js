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
  },
  safari: {
    label: 'Safari',
    storeUrl: 'macappstore://itunes.apple.com/app/id1504487449?mt=12'
  }
}

export const isSupportedPlatform = platformName => {
  const normalizedPlatformName = platformName.trim().toLowerCase()

  return Object.keys(supportedPlatforms).includes(normalizedPlatformName)
}

export default supportedPlatforms
