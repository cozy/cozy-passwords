import React, { useState } from 'react'
import Button from 'cozy-ui/transpiled/react/Button'
import { translate } from 'cozy-ui/transpiled/react/I18n'
import Input from 'cozy-ui/transpiled/react/Input'
import compose from 'lodash/flowRight'
import { withClient } from 'cozy-client'
import Alerter from 'cozy-ui/transpiled/react/Alerter'

const DumbHintPage = props => {
  const { t, client, history } = props
  const [hint, setHint] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()

    setLoading(true)

    try {
      await client.getStackClient().fetchJSON('PUT', '/settings/hint', {
        hint
      })

      history.push('/installation')
    } catch (err) {
      Alerter.error(t('HintPage.error'))

      // eslint-disable-next-line no-console
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder={t('HintPage.placeholder')}
        value={hint}
        onChange={e => setHint(e.target.value)}
      />
      <Button label={t('HintPage.submit')} disabled={loading} />
    </form>
  )
}

const HintPage = compose(translate(), withClient)(DumbHintPage)

export default HintPage
