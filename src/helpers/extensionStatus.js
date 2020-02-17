import { useState, useEffect } from 'react'
import { useFlag } from 'cozy-flags'

export const extensionStatuses = {
  checking: 'checking',
  installed: 'installed',
  notInstalled: 'not-installed',
  connected: 'connected'
}

export const useExtensionStatus = () => {
  const [status, setStatus] = useState(extensionStatuses.notInstalled)
  const extensionCheckDisabled = useFlag('extension-check-disabled')

  useEffect(() => {
    if (extensionCheckDisabled) {
      return
    }

    const checkExtensionStatus = () => {
      const event = document.createEvent('Event')
      event.initEvent('check-cozy-extension-status')
      document.dispatchEvent(event)
    }

    const handleExtensionInstalled = () => {
      setStatus(extensionStatuses.installed)
    }

    const handleExtensionConnected = () => {
      setStatus(extensionStatuses.connected)

      cleanup()
    }

    document.addEventListener(
      'cozy-extension-installed',
      handleExtensionInstalled
    )

    document.addEventListener(
      'cozy-extension-connected',
      handleExtensionConnected
    )

    checkExtensionStatus()
    const interval = setInterval(checkExtensionStatus, 1000)

    const cleanup = () => {
      clearInterval(interval)

      document.removeEventListener(
        'extensioninstalled',
        handleExtensionInstalled
      )

      document.removeEventListener(
        'extensionconnected',
        handleExtensionConnected
      )
    }

    return cleanup
  }, [])

  return status
}
