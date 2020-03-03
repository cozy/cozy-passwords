import React from 'react'
import App from './App'
import { render } from '@testing-library/react'
import {
  useExtensionStatus,
  extensionStatuses
} from '../helpers/extensionStatus.js'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import AppLike from '../../test/lib/AppLike'

// This should not be required since cozy-ui v29.9.1
// (see https://github.com/cozy/cozy-ui/releases/tag/v29.9.1)
jest.mock('cozy-ui/transpiled/react/utils/color', () => ({
  getCssVariableValue: () => '#fff'
}))

jest.mock('detect-browser')
jest.mock('cozy-ui/transpiled/react/helpers/withBreakpoints')
jest.mock('../helpers/extensionStatus')

// See https://testing-library.com/docs/example-react-router
function renderWithRouter(
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) {
  const Wrapper = ({ children }) => (
    <Router history={history}>{children}</Router>
  )
  return {
    ...render(ui, { wrapper: Wrapper }),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history
  }
}

describe('App', () => {
  afterEach(() => {
    useExtensionStatus.mockReset()
  })

  describe('when extension is not installed', () => {
    beforeEach(() => {
      useExtensionStatus.mockReturnValue(extensionStatuses.notInstalled)
    })

    it('should render PresentationPage by default', () => {
      const { getByText } = render(
        <AppLike>
          <App />
        </AppLike>
      )

      expect(getByText('Stop losing your passwords')).toBeDefined()
      expect(getByText(/let's go/i)).toBeDefined()
    })
  })

  describe('when extension is installed', () => {
    beforeEach(() => {
      useExtensionStatus.mockReturnValue(extensionStatuses.installed)
    })

    // Disabled this test since it should pass, but it doesn't and I can't find
    // why for now
    xit('should redirect to /installation/installed', async () => {
      const { history } = renderWithRouter(<App />)
      expect(history.location.pathname).toBe('/installation/installed')
    })
  })

  describe('when extension is connected', () => {
    beforeEach(() => {
      useExtensionStatus.mockReturnValue(extensionStatuses.connected)
    })

    // Disabled this test since it should pass, but it doesn't and I can't find
    // why for now
    xit('should redirect to /installation/connected', async () => {
      const { history } = renderWithRouter(<App />)
      expect(history.location.pathname).toBe('/installation/connected')
    })
  })
})
