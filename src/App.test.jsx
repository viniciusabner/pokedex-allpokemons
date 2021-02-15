import React from 'react'
import { screen, render } from '@testing-library/react'

import App from '.'

describe('<App />', () => {
  it('render App component', () => {
    render (<App />)

    screen.debug();
  })
})