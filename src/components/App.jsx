import React from 'react'
import { hot } from 'react-hot-loader'
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom'
import { Layout, Main, Content } from 'cozy-ui/react/Layout'
import { Sprite as IconSprite } from 'cozy-ui/react/Icon'

import Sidebar from './Sidebar'
import PresentationPage from './PresentationPage'
import SecurityPage from './SecurityPage'
import InstallationPage from './InstallationPage'

export const App = () => (
  <HashRouter>
    <Layout>
      <Sidebar />
      <Main>
        <Content className="app-content">
          <Switch>
            <Route path="/presentation" component={PresentationPage} />
            <Route path="/security" component={SecurityPage} />
            <Route path="/installation" component={InstallationPage} />
            <Redirect from="/" to="/presentation" />
            <Redirect from="*" to="/presentation" />
          </Switch>
        </Content>
      </Main>
      <IconSprite />
    </Layout>
  </HashRouter>
)

/*
  Enable Hot Module Reload using `react-hot-loader` here
  We enable it here since App is the main root component
  No need to use it anywhere else, it sould work for all
  child components
*/
export default hot(module)(App)
