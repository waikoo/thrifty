import { useProductStore } from '@/state/productState'
import Image from 'next/image'


type ImagesDisplayProps = {
}

export default function ImagesDisplay({ }: ImagesDisplayProps) {
  const { imgUrl, setImgUrl } = useProductStore()

  return (
    <div className="flex w-full flex-wrap gap-4">

      {
        imgUrl.map((src, i) => (
          <div key={`admin-imgs-${i}`} className="w-[23.2%]">
            <Image src={src} alt="" width={100} height={100} className="block w-full" />
          </div>
        ))
      }

    </div>
  )
}
