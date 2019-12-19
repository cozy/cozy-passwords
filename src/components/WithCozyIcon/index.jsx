import React from 'react'
import Icon from 'cozy-ui/transpiled/react/Icon'
import { Bold } from 'cozy-ui/transpiled/react/Text'
import { Media, Bd, Img } from 'cozy-ui/transpiled/react/Media'

const WithCozyIcon = props => {
  return (
    <Media className="u-inline-flex">
      <Img>
        <Icon icon="cloud" size={16} color="var(--charcoalGrey)" />
      </Img>
      <Bd className="u-ml-half">
        <Bold tag="strong" {...props} />
      </Bd>
    </Media>
  )
}

export default WithCozyIcon
