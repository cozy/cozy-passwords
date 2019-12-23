import { detect as detectBrowser } from 'detect-browser'
import capitalize from 'lodash/capitalize'
import platforms from 'platforms'

const currentBrowser = detectBrowser()
export const isSupportedBrowser = Object.keys(platforms).includes(
  currentBrowser.name
)

const normalizedBrowserNames = {
  ios: 'iOS'
}

export const browserName =
  normalizedBrowserNames[currentBrowser.name] || capitalize(currentBrowser.name)
