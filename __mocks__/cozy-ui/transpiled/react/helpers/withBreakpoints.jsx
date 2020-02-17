import React from 'react'

const withBreakpoints = () => Wrapped => props => {
  return <Wrapped {...props} breakpoints={{ isDesktop: true }} />
}

export default withBreakpoints
