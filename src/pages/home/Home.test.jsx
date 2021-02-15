import React from 'react'
import { screen, render } from '@testing-library/react'

import Home from './home'

describe('<Home />', () => {
  it('should render Home correctly', () => {
    const { container } = render(<Home>Teste</Home>)

    expect(screen.getByRole('home', { name: /Teste/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render Home as a custom HTML', () => {
    const CustomComponent = () => <span>customHTML</span>

    render(<Home as={CustomComponent} />)

    expect(screen.getByText('customHTML')).toBeInTheDocument()
  })

  it('render App component', () => {
    render (<Home />)

    expect(screen.getByText('Start')).toBeInTheDocument()
  })
})
