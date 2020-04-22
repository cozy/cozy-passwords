import { createContext, useState, useEffect } from 'react'
import { useClient } from 'cozy-client'
import flag from 'cozy-flags'

export const BitwardenSettingsContext = createContext()

/* Remove when https://github.com/cozy/cozy-client/pull/686 is merged */
const useFetchJSON = (method, route, dependencies) => {
  const client = useClient()
  const [fetchStatus, setFetchStatus] = useState('pending')
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)
  useEffect(() => {
    const fetch = async () => {
      setFetchStatus('loading')
      try {
        const doc = await client.stackClient.fetchJSON(method, route)
        setData(doc)
        setError(null)
        setFetchStatus('loaded')
      } catch (e) {
        setError(e)
        setFetchStatus('error')
      }
    }
    fetch()
  }, dependencies)

  return { fetchStatus, error, data }
}

export const useBitwardenSettingsQuery = () => {
  if (flag('passwords.force-vault-unconfigured')) {
    return {
      fetchStatus: 'loaded',
      data: {
        extension_installed: false
      }
    }
  }
  return useFetchJSON(
    'GET',
    '/data/io.cozy.settings/io.cozy.settings.bitwarden',
    []
  )
}
