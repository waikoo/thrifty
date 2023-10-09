import { StaticImageData } from "next/dist/shared/lib/image-external"

export type TColor = {
  id: number,
  color: string,
  imgUrl: string,
  alt: string
}


export type HeroCarouselImagesProps = {
  selectedCircle: number
}

export type Timages = {
  small: {
    [key: number]: StaticImageData[]
    // '0': StaticImageData[],
    // '1': StaticImageData[],
    // '2': StaticImageData[],
  },
  large: {
    [key: number]: StaticImageData
    // '0': StaticImageData,
    // '1': StaticImageData,
    // '2': StaticImageData,
  }
}

