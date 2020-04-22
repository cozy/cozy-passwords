import React from 'react'
import { I18n } from 'cozy-ui/transpiled/react/I18n'
import { MemoryRouter } from 'react-router-dom'
import CozyClient, { CozyProvider } from 'cozy-client'
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/hooks/useBreakpoints'

const AppLike = props => {
  const client = new CozyClient({ uri: 'https://test.mycozy.cloud' })
  return (
    <BreakpointsProvider>
      <CozyProvider client={client}>
        <I18n
          lang="en"
          dictRequire={lang => require(`../../src/locales/${lang}`)}
        >
          <MemoryRouter>{props.children}</MemoryRouter>
        </I18n>
      </CozyProvider>
    </BreakpointsProvider>
  )
}

export default AppLike
