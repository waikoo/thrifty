import { heroAlt } from "@/app/components/data/home"
import Hero from "@/app/components/home/Hero"
import HeroButton from "@/app/components/home/HeroButton"
import HeroImage from "@/app/components/home/HeroImage"
import { render, screen } from "@testing-library/react"

describe('Client: Hero', () => {

  describe('CTA button', () => {

    it('renders', () => {
      render(<Hero />)

      const button = screen.getByRole('button', { name: /shop now/i })
      expect(button).toBeInTheDocument()
    })

    it('has correct link to /products', () => {
      const gender = 'women'
      const lang = 'en'
      render(<HeroButton gender={gender} lang={lang} />)

      const link = screen.getByRole('link', { name: /shop now/i })
      expect(link).toHaveAttribute('href', `/${lang}/${gender}/products?gender=${gender}&shop-by=new+in&sort-by=newfirst&page=1`)
    })
  })

  describe('Image', () => {
    it('renders with correct alt text', () => {
      const gender = "men"
      const state = "new_in"

      render(<HeroImage gender={gender} state={state} />)

      const image = screen.getByAltText(heroAlt[state][gender])
      expect(image).toBeInTheDocument()
    })
  })
})

