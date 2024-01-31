import IconShare from "@/app/components/cart/icons/IconShare"
import IconDelete from "@/app/components/cart/icons/IconDelete"
import IconHeart from "@/app/components/cart/icons/IconHeart"
import { useCartStore } from "@/state/uiState"

export default function CartControls() {
  const { emptyCart } = useCartStore()

  const emptyCartItems = () => {
    emptyCart()
    localStorage.setItem('cart', '[]')
  }

  return (
    <div className="mt-[40px] flex items-center gap-2">
      <input type="checkbox" />
      <div className="flex items-center gap-2 underline underline-offset-2">
        <IconShare />
        <span className="text-[0.75rem] font-normal">Share</span>
      </div>
      <div className="flex items-center gap-2 underline underline-offset-2">
        <IconHeart />
        <span className="text-[0.75rem] font-normal"> Save </span>
      </div>
      <div className="flex cursor-pointer items-center gap-2 underline underline-offset-2">
        <IconDelete />
        <span className="text-[0.75rem] font-normal" onClick={emptyCartItems}> Delete </span>
      </div>
    </div>
  )
}
