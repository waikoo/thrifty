import Image from 'next/image'
import { capitalize } from "@/utils/capitalize";
import { EURO } from "@/app/components/data/orderSummary";
import { ProductItemType } from "@/types/productItem";
import { useCartStore } from "@/state/uiState";

type MiniCartItemProps = {
  item: ProductItemType
}

export default function MiniCartItem({ item }: MiniCartItemProps) {
  const { removeFromCart } = useCartStore()

  return (
    <div className="flex gap-2">
      <Image src={item.img_url[0]} alt="cart image" width={100} height={100} />
      <div className="flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-[0.625rem] font-medium">{item.brand.toUpperCase()}</span>
          <span className="cursor-pointer p-2 text-[0.625rem]" onClick={() => removeFromCart(item.uuid)}>X</span>
        </div>
        <span className="text-[0.625rem] font-light">{capitalize(item.color)} {capitalize(item.material)} {capitalize(item.category)}</span>
        <span className="text-[0.625rem] font-light">Size: {item.size}</span>
        <span className="text-[0.6875rem] font-semibold">{EURO}{item.price}</span>
      </div>
    </div>
  )
}
