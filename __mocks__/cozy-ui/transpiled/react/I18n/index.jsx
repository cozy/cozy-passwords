import React from 'react'

const translate = () => Wrapped => props => {
  return <Wrapped t={key => key} {...props} />
}

export { translate }
