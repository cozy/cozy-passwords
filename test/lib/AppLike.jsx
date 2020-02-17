import React from 'react'
import { I18n } from 'cozy-ui/transpiled/react/I18n'
import { MemoryRouter } from 'react-router-dom'

const AppLike = props => {
  return (
    <I18n lang="en" dictRequire={lang => require(`../../src/locales/${lang}`)}>
      <MemoryRouter>{props.children}</MemoryRouter>
    </I18n>
  )
}

export default AppLike
