import ColorCarouselImages from "@/app/components/home/ColorCarouselImages"
import { render, screen } from "@testing-library/react"

describe('Client: ColorCarousel', () => {

  describe('ColorCarouselImages', () => {
    it('renders as many images as it receives as prop', async () => {
    const gender = "kids"
    const images = ['blue.jpg', 'green.jpg', 'purple.jpg', 'red.jpg', 'yellow.jpg', 'pink.jpg', 'black.jpg', 'white.jpg']
    render(<ColorCarouselImages gender={gender} images={images}/>)

    const onScreenImages = screen.getAllByRole('img')
    expect(onScreenImages).not.toHaveLength(0)
    expect(onScreenImages).toHaveLength(8)
    }) 

    it('renders all images into the document & all have correct src attribute', async () => {
      const gender = "kids"
      const images = ['blue.jpg', 'green.jpg', 'purple.jpg', 'red.jpg', 'yellow.jpg', 'pink.jpg', 'black.jpg', 'white.jpg']
      render(<ColorCarouselImages gender={gender} images={images}/>)

      const onScreenImages = await screen.findAllByRole('img')

      images.forEach((filename, i) => {
        expect(onScreenImages[i]).toBeInTheDocument()
        expect(onScreenImages[i]).toHaveAttribute('src', `/images/color_carousel/${gender}/${filename}`)
      })
    })
  })
})

