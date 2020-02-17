import React from 'react'

const { createMockClient } = jest.requireActual('cozy-client')

const mockClient = createMockClient({})

const withClient = Component => props => {
  return <Component {...props} client={mockClient} />
}

export { withClient }
