import PopularBrands from "@/app/components/home/PopularBrands"
import { render, screen } from "@testing-library/react"

describe('Client: PopularBrands', () => {
  const gender = 'women'
  const lang = 'en'

  it('renders all images', () => {
    render(<PopularBrands gender={gender} lang={lang} />)

    const images = screen.getAllByRole('img')

    expect(images).toHaveLength(9)
  })

  it('all links have correct hrefs & are in the document', () => {
    render(<PopularBrands gender={gender} lang={lang} />)

    const links = screen.getAllByRole('link')

    links.forEach((link) => {
      expect(link).toHaveAttribute('href', `/${lang}/${gender}/products?gender=${gender}&brand=${link.getAttribute('data-brand')}&shop-by=new+in&sort-by=newfirst&page=1`)
      expect(link).toBeInTheDocument()
    })
  })
})
