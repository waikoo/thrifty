import IconShare from "@/app/components/cart/icons/IconShare"
import IconDelete from "@/app/components/cart/icons/IconDelete"
import IconHeart from "@/app/components/cart/icons/IconHeart"

export default function CartControls() {
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
      <div className="flex items-center gap-2 underline underline-offset-2">
        <IconDelete />
        <span className="text-[0.75rem] font-normal"> Delete </span>
      </div>
    </div>
  )
}
