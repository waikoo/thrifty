/* eslint-disable @next/next/no-img-element */
import { Gender, Locales } from '@/types/link'
import Link from 'next/link'
import { useState } from 'react'

type SVGComponentProps = {
  className: string;
  textColor: string;
};

type PopularBrandItem = {
  brand: string
  lang: Locales
  gender: Gender
  theme: string
  className: string
  alt: string
  SVG: React.ComponentType<SVGComponentProps>
}


export default function PopularBrandItem({ brand, lang, gender, theme, className, alt, SVG }: PopularBrandItem) {
  const [isBrandHovered, setIsBrandHovered] = useState(false)
  const bgColor = theme === 'light' ? 'bg-t_white/40' : 'bg-t_black/40'
  const borderRadius = 'rounded-[15px] sm:rounded-[30px] lg:rounded-[40px]'

  const getInvertedBgColor = () => {
    if (theme === 'light') {
      return isBrandHovered ? 'bg-t_black/50' : 'bg-t_white/50'
    }
    return isBrandHovered ? 'bg-t_white/50' : 'bg-t_black/50'
  }

  const getInvertedTextColor = () => {
    if (theme === 'light') {
      return isBrandHovered ? 'white' : 'black'
    }
    return isBrandHovered ? 'black' : 'white'
  }

  return (
    <Link
      href={`/${lang}/${gender}/products/?gender=${gender}&brand=${brand}&shop-by=new+in&sort-by=newfirst&page=1`}
      scroll={true}
      data-brand={brand}
      className={`relative ${className} ${bgColor}`}
      onMouseOver={() => setIsBrandHovered(true)}
      onMouseOut={() => setIsBrandHovered(false)}
    >
      <picture>
        <source
          srcSet={`/images/brands/${brand}.avif`}
          type="image/avif"
        />
        <source
          srcSet={`/images/brands/${brand}.webp`}
          type="image/webp"
        />
        <img
          src={`/images/brands/${brand}.jpg`}
          alt={alt}
          className={`w-full h-full object-cover ${borderRadius}`}
        />
      </picture>
      <div className={`absolute inset-0 z-20 ${borderRadius} ${getInvertedBgColor()}`}></div>
      {/* <AdidasSVG className="absolute inset-0 z-30 mx-auto" textColor={getInvertedTextColor()} /> */}
      <SVG className="absolute inset-0 z-30 mx-auto" textColor={getInvertedTextColor()} />
    </Link>
  )
}

