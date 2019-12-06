import React from 'react'
import Button from 'cozy-ui/transpiled/react/Button'
import { translate } from 'cozy-ui/transpiled/react/I18n'
import Input from 'cozy-ui/transpiled/react/Input'

const DumbHintPage = props => {
  const { t } = props

  return (
    <form>
      <Input placeholder={t('HintPage.placeholder')} />
      <Button label={t('HintPage.submit')} />
    </form>
  )
}

const HintPage = translate()(DumbHintPage)

export default HintPage
