import { albert_800 } from "@/utils/fonts"
import Image from "next/image"
import Link from "next/link"

type CategoryImageProps = {
  children: string
  src: string
  className: string
  href: string
}

export default function GenderImage({ children, className, src, href }: CategoryImageProps) {
  return (
    <Link href={href} className={`w-max-full relative grid cursor-pointer place-items-center ${className}`}>
      <span className={`textShadow absolute text-[1.5625rem] text-t_white ${albert_800.className}`}>{children}</span>

      <div className="w-full">
        <Image
          src={src}
          alt=""
          width={800}
          height={400}
          className="rounded-[0.625rem]"
        />
      </div>
    </Link>
  )
}
