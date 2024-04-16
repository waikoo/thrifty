import LayoutAddNew from "@/app/components/admin/LayoutAddNew"
import { render, screen } from "@testing-library/react"

describe('Admin: LayoutAddNew', () => {

  it('contains ADD NEW button', () => {
    render(<LayoutAddNew />)

    const button = screen.getByText(/add new/i)

    expect(button).toBeInTheDocument()
  })
})
