/* global cozy */

import React from 'react'
import UIBarTitle from 'cozy-ui/transpiled/react/BarTitle'
import useBreakpoints from 'cozy-ui/transpiled/react/hooks/useBreakpoints'

const { BarCenter } = cozy.bar

const BarTitle = ({ children }) => {
  const { isMobile } = useBreakpoints()
  return isMobile ? (
    <BarCenter>
      <UIBarTitle>{children}</UIBarTitle>
    </BarCenter>
  ) : null
}

export default BarTitle
