import ColorCarousel from "@/app/components/home/ColorCarousel"
import ColorCarouselImage from "@/app/components/home/ColorCarouselImage"
import ColorCarouselImages from "@/app/components/home/ColorCarouselImages"
import { render, screen } from "@testing-library/react"

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn()
  }))
})

Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn()
  }))
})

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: matchingMediaQueries.includes(query),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn()
  }))
})

let matchingMediaQueries: string[] = []

export function setMatchingMediaQuery(queries: string | string[]): void {
  matchingMediaQueries = Array.isArray(queries) ? queries : [queries]
}

export function resetMatchingMediaQuery(): void {
  matchingMediaQueries = []
}

describe('Client: ColorCarousel', () => {
  describe('ColorCarouselImages', () => {
    it('renders as many images as it receives as prop', () => {
      const gender = "kids"
      const images = ['blue.jpg', 'green.jpg', 'purple.jpg', 'red.jpg', 'yellow.jpg', 'pink.jpg', 'black.jpg', 'white.jpg']
      render(<ColorCarouselImages gender={gender} images={images} />)

      const onScreenImages = screen.getAllByRole('img')
      expect(onScreenImages).not.toHaveLength(0)
      expect(onScreenImages).toHaveLength(8)
    })

    it('renders all images into the document & all have correct src attribute', () => {
      const gender = "kids"
      const images = ['blue.jpg', 'green.jpg', 'purple.jpg', 'red.jpg', 'yellow.jpg', 'pink.jpg', 'black.jpg', 'white.jpg']
      render(<ColorCarouselImages gender={gender} images={images} />)

      const onScreenImages = screen.getAllByRole('img')

      images.forEach((filename, i) => {
        expect(onScreenImages[i]).toBeInTheDocument()
        expect(onScreenImages[i]).toHaveAttribute('src', `/images/color_carousel/${gender}/${filename}`)
      })
    })

    it('renders an image into the document with correct alt text', () => {
      render(<ColorCarouselImage index={0} filename='black.jpg' gender='kids' />)
      const image = screen.getByRole('img')
      expect(image).toHaveAttribute('alt', 'a kid in black clothes')
    })
  })
})

