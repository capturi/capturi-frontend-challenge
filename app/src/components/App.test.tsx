import { screen } from '@testing-library/react'
import React from 'react'

import { render } from '../test-utils'
import { App } from './App'

test('renders trackers heading', () => {
  render(<App />)
  const headingElement = screen.getByText((content, element) => {
    return (
      element?.tagName.toLowerCase() === 'h2' && content.startsWith('Trackers')
    )
  })
  expect(headingElement).toBeInTheDocument()
})
