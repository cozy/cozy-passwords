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

describe('App', () => {
  afterEach(() => {
    useExtensionStatus.mockReset()
  })

  describe('when extension is not installed', () => {
    beforeEach(() => {
      useExtensionStatus.mockReturnValue(extensionStatuses.notInstalled)
    })

    it('should render PresentationStep by default', () => {
      const { getByText } = render(
        <AppLike>
          <App />
        </AppLike>
      )

      expect(getByText('Stop losing your passwords')).toBeDefined()
      expect(getByText(/let's go/i)).toBeDefined()

    })
  })
})
