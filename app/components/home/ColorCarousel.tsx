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

  return (
    <section className="mt-[3.125rem] max-w-[95vw] xl:max-w-[1390px] mx-auto">

      <ColorCarouselTitle />

      <ColorCarouselImages images={imageFilenames} gender={gender} />

    </section>
  )
}

