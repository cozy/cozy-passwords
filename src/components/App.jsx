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
import ConnectedPage from './ConnectedPage'
import ImportPage from './ImportPage'
import {
  useExtensionStatus,
  extensionStatuses
} from '../helpers/extensionStatus'
import flag, { FlagSwitcher } from 'cozy-flags'
import minilog from 'minilog'

window.minilog = minilog
window.flag = flag

const RedirectIfExtensionInstalledOrConnected = props => {
  const extensionStatus = useExtensionStatus()

  if (extensionStatus === extensionStatuses.checking) {
    return null
  }

  if (extensionStatus === extensionStatuses.installed) {
    return <Redirect to="/installation/installed" />
  }

  if (extensionStatus === extensionStatuses.connected) {
    return <Redirect to="/installation/connected" />
  }

  return <Route {...props} />
}

/*
 * This is not very DRY to have RedirectIfExtensionInstalledOrConnected and
 * RedirectIfExtensionConnected, but the problem is that on
 * /installation/installed route we can't listen for the installed status or we
 * will have an infinite redirection loop. So in this case we just want to
 * listen for connection.
 */
const RedirectIfExtensionConnected = props => {
  const extensionStatus = useExtensionStatus()

  if (extensionStatus === extensionStatuses.checking) {
    return null
  }

  if (extensionStatus === extensionStatuses.connected) {
    return <Redirect to="/installation/connected" />
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
                <Switch>
                  <RedirectIfExtensionInstalledOrConnected
                    path="/presentation"
                    component={PresentationPage}
                  />
                  <RedirectIfExtensionInstalledOrConnected
                    path="/security"
                    exact
                    component={SecurityPage}
                  />
                  <RedirectIfExtensionInstalledOrConnected
                    path="/security/hint"
                    exact
                    component={HintPage}
                  />
                  <RedirectIfExtensionInstalledOrConnected
                    path="/installation"
                    exact
                    component={InstallationPage}
                  />
                  <RedirectIfExtensionConnected
                    path="/installation/installed"
                    exact
                    component={InstalledPage}
                  />
                  <Route
                    path="/installation/connected"
                    exact
                    component={ConnectedPage}
                  />
                  <Route
                    path="/installation/import"
                    exact
                    component={ImportPage}
                  />
                  <Redirect from="/" to="/presentation" />
                  <Redirect from="*" to="/presentation" />
                </Switch>
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
