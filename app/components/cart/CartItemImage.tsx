import { ProductItemType } from "@/types/productItem"
import getLangAndGender from "@/utils/getLangAndGender"
import Link from "next/link"
import { usePathname } from "next/navigation"

type CartItemImage = {
  product: ProductItemType
}

export default function CartItemImage({ product }: CartItemImage) {
  const { lang, gender } = getLangAndGender(usePathname())

  return (
    <div className="min-w-[142px]">
      <Link href={`/${lang}/${gender}/products/${product.uuid}`}>
        <img className="rounded-[10px] w-full h-full object-cover object-bottom block aspect-square"
          src={product.img_url[0]}
          alt="cart image"
        />
      </Link>
    </div>
  )
}

