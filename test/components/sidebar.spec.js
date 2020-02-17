'use strict'

/* eslint-env jest */

import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import AppLike from '../lib/AppLike'
import { Sidebar } from 'components/Sidebar'

describe('Sidebar component', () => {
  it('should be rendered correctly', () => {
    const { getByText } = render(
      <AppLike>
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      </AppLike>
    )

    expect(getByText(/presentation/i)).toBeDefined()
    expect(getByText(/security/i)).toBeDefined()
    expect(getByText(/installation/i)).toBeDefined()
  })
})
