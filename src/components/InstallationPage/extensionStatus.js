import { useState, useEffect } from 'react'

export const extensionStatuses = {
  checking: 'checking',
  installed: 'installed',
  notInstalled: 'not-installed'
}

export const useExtensionStatus = () => {
  const [installed, setInstalled] = useState(extensionStatuses.checking)

  useEffect(() => {
    const checkExtensionInstallation = () => {
      const root = document.getElementById('cozy-app')
      const isExtensionInstalled = root.dataset.cozyExtensionInstalled

      if (isExtensionInstalled) {
        clearInterval(interval)
      }

      setInstalled(isExtensionInstalled ? 'installed' : 'not-installed')
    }

    checkExtensionInstallation()
    const interval = setInterval(checkExtensionInstallation, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return installed
}
