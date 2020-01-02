import { detect as detectBrowser } from 'detect-browser'
import capitalize from 'lodash/capitalize'
import supportedPlatforms from 'supportedPlatforms'

const currentBrowser = detectBrowser()
export const isSupportedBrowser = Object.keys(supportedPlatforms).includes(
  currentBrowser.name
)

const normalizedBrowserNames = {
  ios: 'iOS'
}

export const browserName =
  normalizedBrowserNames[currentBrowser.name] || capitalize(currentBrowser.name)
