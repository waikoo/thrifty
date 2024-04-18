import Hero from "@/app/components/home/Hero"
import HeroButton from "@/app/components/home/HeroButton"
import HeroImage from "@/app/components/home/HeroImage"
import { render, screen } from "@testing-library/react"

describe('Client: Hero', () => {

  it('renders CTA button', () => {
    render(<Hero />)

    const button = screen.getByRole('button', { name: /shop now/i })
    expect(button).toBeInTheDocument()
  })

  it('CTA has correct link to /products', () => {
    const gender = 'women'
    const lang = 'en'
    render(<HeroButton gender={gender} lang={lang} />)

    const link = screen.getByRole('link', { name: /shop now/i })
    expect(link).toHaveAttribute('href', `/${lang}/${gender}/products?gender=${gender}&shop-by=new+in&sort-by=newfirst&page=1`)
  })

  it('renders Hero image', () => {
    render(<HeroImage />)

    const image = screen.getByAltText(/a short haired man looking away from the camera into nature/i)
    expect(image).toBeInTheDocument()
  })
})

