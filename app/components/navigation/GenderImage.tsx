import Image, { StaticImageData } from "next/image"

type CategoryImageProps = {
  children: string
  img: StaticImageData
  className: string
}

export default function GenderImage({ children, img, className }: CategoryImageProps) {
  return (
    <div className={`w-max-full relative grid cursor-pointer place-items-center ${className}`}>
      <span className="textShadow absolute text-xl">{children}</span>
      <div className="bg-red w-full">
        <Image src={img.src} alt={`photo of women in category ${children.toLowerCase()}`} width={800} height={400} />
      </div>
    </div>
  )
}
