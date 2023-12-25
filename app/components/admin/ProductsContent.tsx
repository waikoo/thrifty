"use client"
import { usePathname, useRouter } from "next/navigation"
import { useSupabaseServer } from "../hooks/serverIndex"
import Image from 'next/image'
import { ProductItemType } from "@/types/productItem"

type ProductsContentProps = {
  products: ProductItemType[]
}

export default function ProductsContent({ products }: ProductsContentProps) {
  const [router, pathname] = [useRouter(), usePathname()]
  console.log(pathname)
  console.log(pathname.split('/'))
  const [, lang, admin,] = pathname.split('/')

  return (
    <section className="bg-content max-h-[50vh]">
      <div className="grid grid-cols-[repeat(20,minmax(30px,1fr))] gap-2 p-6">
        {products?.filter(el => el.img_url && el.img_url.length > 0).map((el, i) => (
          <div className={`relative aspect-square`}
            key={i}
            data-uuid={el.uuid}
            onClick={() => {
              // if (toggleSelected) {
              //   toggleItem(el.uuid)
              //   return
              // }
              router.push(`/${lang}/${admin}/manage/?uuid=${el.uuid}`)
            }}
          >
            <Image
              className="relative block h-full w-full cursor-pointer object-cover"
              src={el.img_url[0]}
              alt={`new-product-${i}`}
              width={100}
              height={100}
            />
          </div>
        ))
        }
      </div >
    </section>
  )
}
