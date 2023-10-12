type ColorCarouselElementProps = {
  color: string,
  imgUrl: string,
  alt: string
}

export default function ColorCarouselElement({ color, imgUrl, alt }: ColorCarouselElementProps) {
  const localColor = `bg-${color}-500`

  return (
    <div className="relative grid place-content-center">
      <div
        className={`${localColor} h-full w-full absolute  opacity-50`}
      ></div>

      <img
        src={imgUrl}
        alt={alt}
        className="" />


      <img
        src={imgUrl}
        alt={alt}
        className="object-cover rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-5/6 w-10/12"
        style={{ clipPath: 'inset(0 3% 0 3%)' }}
      />

    </div>

  )
}
