import { it, expect, describe } from 'vitest'
import { render, screen } from "@testing-library/react"
import LayoutAddNew from '../LayoutAddNew'

describe('Admin: LayoutAddNew', () => {

  it('contains ADD NEW button', () => {
    render(<LayoutAddNew params={{ lang: 'en' }} />)

    const button = screen.getByText(/add new/i)

    expect(button).toBeInTheDocument()
  })
})
