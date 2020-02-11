import { useState, useEffect } from 'react'
import get from 'lodash/get'
import { useFlag } from 'cozy-flags'

export const extensionStatuses = {
  checking: 'checking',
  installed: 'installed',
  notInstalled: 'not-installed'
}

export const useExtensionStatus = () => {
  const [installed, setInstalled] = useState(extensionStatuses.notInstalled)
  const extensionCheckDisabled = useFlag('extension-check-disabled')

  useEffect(() => {
    if (extensionCheckDisabled) {
      return
    }

    const checkExtensionInstallation = () => {
      window.postMessage(
        {
          message: { source: 'cozy-passwords' }
        },
        // This star means that we are sending the message to all
        // tabs / extensions. This is not ideal, but since we don't know the
        // cozy extension URI, we can't target it directly
        '*'
      )
    }

    checkExtensionInstallation()
    const interval = setInterval(checkExtensionInstallation, 1000)

    const handleInstalled = event => {
      if (get(event, 'data.message.source') !== 'cozy-extension') {
        return
      }

      setInstalled(extensionStatuses.installed)
      cleanup()
    }

    window.addEventListener('message', handleInstalled)

    const cleanup = () => {
      clearInterval(interval)
      window.removeEventListener('message', handleInstalled)
    }

    return cleanup
  }, [])

  return installed
}
