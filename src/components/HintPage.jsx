import React, { useState, useEffect } from 'react'
import Button from 'cozy-ui/transpiled/react/Button'
import { useI18n } from 'cozy-ui/transpiled/react/I18n'
import Input from 'cozy-ui/transpiled/react/Input'
import { withClient } from 'cozy-client'
import Alerter from 'cozy-ui/transpiled/react/Alerter'
import Wrapper from 'components/Wrapper'
import NarrowContent from 'cozy-ui/transpiled/react/NarrowContent'
import passwordClueIcon from 'assets/password-clue.svg'
import { MainTitle, Text } from 'cozy-ui/transpiled/react/Text'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Spinner from 'cozy-ui/transpiled/react/Spinner'
import VerticallyCentered from './VerticallyCentered'

const DumbHintPage = props => {
  const { client, history } = props
  const { t } = useI18n()
  const [hint, setHint] = useState('')
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(true)

  const goToNextStep = () => history.push('/installation')

  const handleSubmit = async e => {
    e.preventDefault()

    setSaving(true)

    try {
      await client.getStackClient().fetchJSON('PUT', '/settings/hint', {
        hint
      })

      goToNextStep()
    } catch (err) {
      Alerter.error(t('HintPage.error'))

      // eslint-disable-next-line no-console
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  useEffect(() => {
    const checkExistingHint = async () => {
      try {
        await client
          .getStackClient()
          .collection('io.cozy.settings')
          .get('hint')

        // If the user has already defined a hint, bypass this step
        goToNextStep()
      } catch (err) {
        // In case of any error, the user should enter a hint
        setLoading(false)
      }
    }

    checkExistingHint()
  }, [])

  if (loading) {
    return <Spinner size="xxlarge" middle={true} />
  }

  return (
    <VerticallyCentered>
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
    </VerticallyCentered>
  )
}

const HintPage = withClient(DumbHintPage)

export default HintPage
