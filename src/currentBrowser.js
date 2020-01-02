import { detect as detectBrowser } from 'detect-browser'
import capitalize from 'lodash/capitalize'
import { isSupportedPlatform } from 'supportedPlatforms'

const currentBrowser = detectBrowser()
export const isSupportedBrowser = isSupportedPlatform(currentBrowser.name)

const normalizedBrowserNames = {
  ios: 'iOS'
}

export const browserName =
  normalizedBrowserNames[currentBrowser.name] || capitalize(currentBrowser.name)
