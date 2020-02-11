import React, { useEffect } from 'react'
import { hot } from 'react-hot-loader'
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom'
import { Layout, Main, Content } from 'cozy-ui/transpiled/react/Layout'
import { Sprite as IconSprite } from 'cozy-ui/transpiled/react/Icon'
import Alerter from 'cozy-ui/transpiled/react/Alerter'
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme'
import withBreakpoints from 'cozy-ui/transpiled/react/helpers/withBreakpoints'

import Sidebar from './Sidebar'
import PresentationPage from './PresentationPage'
import SecurityPage from './SecurityPage'
import HintPage from './HintPage'
import InstallationPage from './InstallationPage'
import InstalledPage from './InstalledPage'
import NotAvailablePage from './NotAvailablePage'
import {
  useExtensionStatus,
  extensionStatuses
} from '../helpers/extensionStatus'
import flag, { FlagSwitcher } from 'cozy-flags'

const RedirectIfExtensionInstalled = props => {
  const extensionInstalled = useExtensionStatus()

  if (extensionInstalled === extensionStatuses.checking) {
    return null
  }

  if (extensionInstalled === extensionStatuses.installed) {
    return <Redirect to="/installation/installed" />
  }

  return <Route {...props} />
}

export const DumbApp = ({ breakpoints: { isDesktop } }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      flag('switcher', true)
    }
  }, [])

  if (isDesktop) {
    return (
      <MuiCozyTheme>
        <HashRouter>
          <Layout>
            <Sidebar />
            <Main>
              <Content>
                <div className="u-p-2 u-mt-auto u-mb-auto">
                  <Switch>
                    <RedirectIfExtensionInstalled
                      path="/presentation"
                      component={PresentationPage}
                    />
                    <RedirectIfExtensionInstalled
                      path="/security"
                      exact
                      component={SecurityPage}
                    />
                    <RedirectIfExtensionInstalled
                      path="/security/hint"
                      exact
                      component={HintPage}
                    />
                    <RedirectIfExtensionInstalled
                      path="/installation"
                      exact
                      component={InstallationPage}
                    />
                    <Route
                      path="/installation/installed"
                      exact
                      component={InstalledPage}
                    />
                    <Redirect from="/" to="/presentation" />
                    <Redirect from="*" to="/presentation" />
                  </Switch>
                </div>
              </Content>
            </Main>
            <IconSprite />
            <Alerter />
            <FlagSwitcher />
          </Layout>
        </HashRouter>
      </MuiCozyTheme>
    )
  }

  return (
    <>
      <NotAvailablePage />
      <IconSprite />
    </>
  )
}

const App = withBreakpoints()(DumbApp)

/*
  Enable Hot Module Reload using `react-hot-loader` here
  We enable it here since App is the main root component
  No need to use it anywhere else, it sould work for all
  child components
*/
export default hot(module)(App)
