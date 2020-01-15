import React from 'react'
import Icon from 'cozy-ui/transpiled/react/Icon'
import './styles.css'

const CloudIcon = props => {
  return (
    <Icon
      icon="cloud"
      size={16}
      color="var(--charcoalGrey)"
      className="CloudIcon"
      {...props}
    />
  )
}

export default CloudIcon
