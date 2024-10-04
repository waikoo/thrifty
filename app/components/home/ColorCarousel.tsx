import path from 'path'
import fs from 'fs/promises'

import ColorCarouselImages from '@/app/components/home/ColorCarouselImages';
import ColorCarouselTitle from '@/app/components/home/ColorCarouselTitle';
import { Gender } from '@/types/link';

type ColorCarouselProps = {
  gender: Gender
}

export default async function ColorCarousel({ gender }: ColorCarouselProps) {
  const imageDirectory = path.join(process.cwd(), `/public/images/color_carousel/${gender}`);
  const imageFilenames = await fs.readdir(imageDirectory);
  const webpFolder = imageFilenames.indexOf('webp')
  const avifFolder = imageFilenames.indexOf('avif')
  // remove avif & webp folders from imageFilenames
  imageFilenames.splice(webpFolder, 1)
  imageFilenames.splice(avifFolder, 1)

  return (
    <section className="mt-[3.125rem] max-w-[90vw] 3xl:max-w-[1900px] mx-auto">

      <ColorCarouselTitle />

      <ColorCarouselImages images={imageFilenames} gender={gender} />

    </section>
  )
}

