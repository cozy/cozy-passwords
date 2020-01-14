import React from 'react'
import { Redirect } from 'react-router-dom'
import { useState, useEffect } from 'react'
import get from 'lodash/get'

export const extensionStatuses = {
  checking: 'checking',
  installed: 'installed',
  notInstalled: 'not-installed'
}

export const useExtensionStatus = () => {
  const [installed, setInstalled] = useState(extensionStatuses.notInstalled)

  useEffect(() => {
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
    }

    window.addEventListener('message', handleInstalled)

    return () => {
      clearInterval(interval)
      window.removeEventListener('message', handleInstalled)
    }
  }, [])

  return installed
}

const withExtensionInstallCheck = Wrapped => props => {
  const extensionInstalled = useExtensionStatus()

  if (extensionInstalled === extensionStatuses.checking) {
    return null
  }

  if (extensionInstalled === extensionStatuses.installed) {
    return <Redirect to="/installation/installed" />
  }

  return <Wrapped {...props} />
}

export default withExtensionInstallCheck
