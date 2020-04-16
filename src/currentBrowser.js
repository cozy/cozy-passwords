import { detect as detectBrowser } from 'detect-browser'
import capitalize from 'lodash/capitalize'
import { isSupportedPlatform } from 'supportedPlatforms'

const normalizedBrowserNames = {
  ios: 'iOS'
}

const normalizeBrowserName = name => {
  return normalizedBrowserNames[name] || capitalize(name)
}
export const currentBrowser = detectBrowser()
export const browserName = normalizeBrowserName(currentBrowser.name)
export const isSupportedBrowser = () => isSupportedPlatform(currentBrowser.name)
