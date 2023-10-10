type ColorCarouselElementProps = {
  color: string,
  imgUrl: string,
  alt: string
}

export default function ColorCarouselElement({ color, imgUrl, alt }: ColorCarouselElementProps) {

  return (
    <div className="bg-faded">
      <img src={imgUrl} alt={alt} className="w-full" />
    </div>
  )
}
