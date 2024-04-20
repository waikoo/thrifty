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
    <section>

      <ColorCarouselTitle />

      <ColorCarouselImages images={imageFilenames} gender={gender} />

    </section>
  )
}

