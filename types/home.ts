import { StaticImageData } from "next/image"

import { Gender } from "@/types/link"

export type TColorCarouselData = {
  women: TColor[],
  men: TColor[],
  kids: TColor[],
}

export type TColor = {
  id: number,
  // gender: Gender,
  color: string,
  imgUrl: string,
  alt: string
}

export type PageProps = {
  params: {
    lang: string,
    category: Gender
  },
  searchParams: { [key: string]: string | string[] | undefined }
}

export type HeroCarouselImagesProps = {
  selectedCircle: number
}

export type Timages = {
  men: {
    small: Record<number, StaticImageData[]>;
    large: Record<number, StaticImageData>;
  };
  women: {
    small: Record<number, StaticImageData[]>;
    large: Record<number, StaticImageData>;
  };
  kids: {
    small: Record<number, StaticImageData[]>;
    large: Record<number, StaticImageData>;
  };
};

export type HeroCarouselImageProps = {
  src: StaticImageData,
  alt: string,
  className?: string
  priority: boolean
}

