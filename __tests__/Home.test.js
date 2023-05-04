/**
 * @jest-environment jsdom
 */
import { render, screen } from './node_modules/@testing-library/react'
import './node_modules/@testing-library/jest-dom/extend-expect'
import Home from '../pages/index'

it('Should render title text', () => {
  render(<Home />)
  expect(screen.getByText('Next.js!')).toBeInTheDocument()
})
