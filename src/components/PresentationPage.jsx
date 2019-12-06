import React from 'react'
import Button from 'cozy-ui/transpiled/react/Button'
import { translate } from 'cozy-ui/transpiled/react/I18n'
import { Link } from 'react-router-dom'

const DumbPresentationPage = props => {
  const { t } = props

  return (
    <div>
      <Button to="/security" label={t('PresentationPage.lets-go')} tag={Link} />
    </div>
  )
}

const PresentationPage = translate()(DumbPresentationPage)

export default PresentationPage
