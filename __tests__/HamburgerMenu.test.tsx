import NavBarMobile from "@/app/components/navigation/NavBarMobile"
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'

describe('Client: HamburgerMenu', () => {

  test("in NavBarMobile the hamburger icon renders", () => {
    render(<NavBarMobile />)
    const hamburgerIcon = screen.getByTitle(/hamburger menu/i)

    expect(hamburgerIcon).toBeInTheDocument()
  })

  test('HamburgerMenu should render on hamburger icon click from NavBarMobile', async () => {
    const user = userEvent.setup()

    render(<NavBarMobile />)
    const hamburgerIcon = screen.getByTitle(/hamburger menu/i)

    await user.click(hamburgerIcon)

    const hamburgerMenu = await screen.findByTestId('hamburger-menu')

    expect(hamburgerMenu).toBeInTheDocument()
  })
})
