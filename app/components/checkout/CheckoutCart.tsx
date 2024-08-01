"use client"
import { FaPlus, FaMinus } from "react-icons/fa6";

import CheckoutCartItems from "@/app/components/checkout/CheckoutCartItems";
import { borderBottomRadius } from "@/app/components/data/universalStyles";
import { useCheckoutStore } from "@/state/client/checkoutState";

export default function CheckoutCart() {
  const { isCartOpen, setIsCartOpen } = useCheckoutStore()
  const cartRadius = isCartOpen ? '' : borderBottomRadius
  const conditionalMargin = isCartOpen ? '' : 'mb-10'

  return (
    <div className={`${cartRadius} `}>
      <div className={`${conditionalMargin} bg-white border-t_white cursor-pointer ${cartRadius} border-b-[0.2rem] p-6`}
        onClick={() => setIsCartOpen(!isCartOpen)}
      >
        <div className="flex items-center justify-between">
          <span className="select-none">YOUR CART</span>
          <div>
            {!isCartOpen ? <FaPlus className="" /> : <FaMinus />}
          </div>
        </div>
      </div>

      <CheckoutCartItems />
    </div>
  )
}
