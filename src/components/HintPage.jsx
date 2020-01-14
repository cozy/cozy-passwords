import React, { useState } from 'react'
import Button from 'cozy-ui/transpiled/react/Button'
import { translate } from 'cozy-ui/transpiled/react/I18n'
import Input from 'cozy-ui/transpiled/react/Input'
import compose from 'lodash/flowRight'
import { withClient } from 'cozy-client'
import Alerter from 'cozy-ui/transpiled/react/Alerter'
import Wrapper from 'components/Wrapper'
import NarrowContent from 'cozy-ui/transpiled/react/NarrowContent'
import passwordClueIcon from 'assets/password-clue.svg'
import { MainTitle, Text } from 'cozy-ui/transpiled/react/Text'
import Stack from 'cozy-ui/transpiled/react/Stack'
import withExtensionInstallCheck from './withExtensionInstallCheck'

const DumbHintPage = props => {
  const { t, client, history } = props
  const [hint, setHint] = useState('')
  const [saving, setSaving] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()

    setSaving(true)

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
      setSaving(false)
    }
  }

  return (
    <Wrapper>
      <NarrowContent>
        <Stack spacing="xxl" tag="form" onSubmit={handleSubmit}>
          <Stack spacing="m">
            <img src={passwordClueIcon} alt="" />
            <MainTitle>{t('HintPage.title')}</MainTitle>
          </Stack>
          <Stack spacing="m">
            <Input
              placeholder={t('HintPage.placeholder')}
              value={hint}
              onChange={e => setHint(e.target.value)}
            />
            <Text>{t('HintPage.description')}</Text>
          </Stack>
          <Button
            label={t('HintPage.submit')}
            disabled={saving || hint === ''}
            busy={saving}
            extension="full"
            className="u-mt-2"
          />
        </Stack>
      </NarrowContent>
    </Wrapper>
  )
}

const HintPage = compose(
  translate(),
  withClient,
  withExtensionInstallCheck
)(DumbHintPage)

export default HintPage
