import Image from 'next/image'

type ApparelGridImageProps = {
  src: string,
  alt: string
}

export default function ApparelGridImage({ src, alt }: ApparelGridImageProps) {
  return (
    <Image src={src}
      alt={alt}
      width={100}
      height={100}
      className="object-fit w-full"
    />

  )
}
