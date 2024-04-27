import { albert_800 } from "@/utils/fonts"
import Image from "next/image"

type CategoryImageProps = {
  children: string
  src: string
  className: string
}

export default function GenderImage({ children, className, src }: CategoryImageProps) {
  return (
    <div className={`w-max-full relative grid cursor-pointer place-items-center ${className}`}>
      <span className={`textShadow absolute text-[1.5625rem] text-t_white ${albert_800.className}`}>{children}</span>

      <div className="bg-red w-full">
        <Image
          src={src}
          alt={`photo of women in category ${children.toLowerCase()}`}
          width={800}
          height={400}
          className="rounded-[0.625rem]"
        />
      </div>
    </div>
  )
}
