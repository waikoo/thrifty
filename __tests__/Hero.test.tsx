import Hero from "@/app/components/home/Hero"
import HeroImage from "@/app/components/home/HeroImage"
import { render, screen } from "@testing-library/react"

describe('Client: Hero', () => {

  it('renders CTA button', () => {
    render(<Hero />)

    const button = screen.getByRole('button', { name: /shop now/i })
    expect(button).toBeInTheDocument()
  })

  it('renders Hero image', () => {
    render(<HeroImage state="new_in" />)

    const image = screen.getByAltText(/a short haired man looking away from the camera into nature/i)
    expect(image).toBeInTheDocument()
  })
})

