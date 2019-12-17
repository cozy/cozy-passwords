import React from 'react'
import Icon from 'cozy-ui/transpiled/react/Icon'
import { Bold } from 'cozy-ui/transpiled/react/Text'
import './styles.css'

const WithCozyIcon = props => {
  return (
    <>
      <Icon
        icon="cloud"
        size={16}
        color="var(--charcoalGrey)"
        className="CozyIcon"
      />{' '}
      <Bold tag="strong" {...props} />
    </>
  )
}

export default WithCozyIcon
