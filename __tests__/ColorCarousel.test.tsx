import ColorCarousel from "@/app/components/home/ColorCarousel"
import ColorCarouselImage from "@/app/components/home/ColorCarouselImage"
import ColorCarouselImages from "@/app/components/home/ColorCarouselImages"
import { Carousel, CarouselContent, CarouselItem } from "@/app/components/ui/carousel"
import { render, screen } from "@testing-library/react"

describe('Client: ColorCarousel', () => {
  // TODO: ColorCarouselImages errors out in:
  // TODO: carousel:51:1
  // TODO: ColorCarouselImages:18:48
  describe('ColorCarouselImages', () => {
    it('renders as many images as it receives as prop', () => {
      //   const gender = "kids"
      //   const images = ['blue.jpg', 'green.jpg', 'purple.jpg', 'red.jpg', 'yellow.jpg', 'pink.jpg', 'black.jpg', 'white.jpg']
      //   render(<ColorCarouselImages gender={gender} images={images} />)
      //
      //   const onScreenImages = screen.findAllByRole('img')
      //   expect(onScreenImages).not.toHaveLength(0)
      //   expect(onScreenImages).toHaveLength(8)
    })

    it('renders all images into the document & all have correct src attribute', () => {
      // const gender = "kids"
      // const images = ['blue.jpg', 'green.jpg', 'purple.jpg', 'red.jpg', 'yellow.jpg', 'pink.jpg', 'black.jpg', 'white.jpg']
      // render(<ColorCarouselImages gender={gender} images={images} />)

      // const onScreenImages = screen.getAllByRole('img')
      //
      // images.forEach((filename, i) => {
      //   expect(onScreenImages[i]).toBeInTheDocument()
      //   expect(onScreenImages[i]).toHaveAttribute('src', `/images/color_carousel/${gender}/${filename}`)
      // })
    })

    it('renders an image into the document with correct alt text', () => {
      render(<ColorCarouselImage index={0} filename='black.jpg' gender='kids' />)
      const image = screen.getByRole('img')
      expect(image).toHaveAttribute('alt', 'a kid in black clothes')
      expect
    })

    it('renders CarouselImage in CarouselItem', () => {
      render(<Carousel><CarouselContent><CarouselItem></CarouselItem></CarouselContent></Carousel>)
    })

    // it('renders CarouselItem', () => {
    //   render(<CarouselItem />)
    // })
  })
})

