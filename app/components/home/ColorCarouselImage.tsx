/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { pluralToSingular, removeExtension } from "@/utils/home";
import { Gender } from "@/types/link"
import { albert, albert_800 } from "@/utils/fonts";
import Link from "next/link";
import getLangAndGender from "@/utils/getLangAndGender";
import { usePathname } from "next/navigation";

type ColorCarouselImageProps = {
  index: number
  filename: string
  gender: Gender
}

export default function ColorCarouselImage({ index, filename, gender }: ColorCarouselImageProps) {
  const [showOverlay, setShowOverlay] = useState(true)
  const { lang } = getLangAndGender(usePathname())
  const colorCarouselColors = ['bg-t_black/40', 'bg-t_blue_cc/40', 'bg-t_green_cc/40', 'bg-t_pink_cc/40', 'bg-t_purple_cc/40', 'bg-t_red_cc/40', 'bg-t_white/40', 'bg-t_yellow_cc/40']
  const colorNames = ['BLACK', 'BLUE', 'GREEN', 'PINK', 'PURPLE', 'RED', 'WHITE', 'YELLOW']

  return (
    <Link
      href={`/${lang}/${gender}/products/?gender=${gender}&color=${colorNames[index].toLowerCase()}&page=1`}
      className="flex flex-col pt-2 items-center rounded-full"
    >
      <div
        onMouseEnter={() => setShowOverlay(false)}
        onMouseLeave={() => setShowOverlay(true)}
        className="relative rounded-full w-full overflow-hidden bg:red-400"
      >
        <picture>
          <source
            srcSet={`/images/color_carousel/${gender}/avif/${filename.replace('.jpg', '.avif')}`}
            type="image/avif"
          />
          <source
            srcSet={`/images/color_carousel/${gender}/webp/${filename.replace('.jpg', '.webp')}`}
            type="image/webp"
          />
          <img
            src={`/images/color_carousel/${gender}/${filename}`}
            alt={`a ${pluralToSingular(gender)} in ${removeExtension(filename)} clothes`}
            loading="lazy"
            className="rounded-full w-full mx-auto hover:scale-110 object-contain transition-transform duration-50"
          />
        </picture>
        {showOverlay && (
          <div className={`absolute h-full w-full ${colorCarouselColors[index]} top-0 z-50 rounded-full hover:transition-transform hover:duration-50`}
          ></div>
        )}
      </div>
      <span className={`mt-4 text-center w-full text-[0.75rem] md:text-[1.25rem] lg:text-[1.25rem] ${albert_800.className}`}>{colorNames[index]}</span>
    </Link>
  )
}

