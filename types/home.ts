import { StaticImageData } from "next/dist/shared/lib/image-external"

export type TColor = {
  id: number,
  color: string,
  imgUrl: string,
  alt: string
}

export type Category = {
  category: 'men' | 'women' | 'kids'
}

export type PageProps = {
  params: {
    lang: string,
    category: Category['category']
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

