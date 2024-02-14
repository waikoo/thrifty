"use client"
import CheckoutCartItems from "@/app/components/checkout/CheckoutCartItems";
import { useCheckoutStore } from "@/state/uiState";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { borderBottomRadius } from "@/app/components/data/universalStyles";

export default function CheckoutCart() {
  const { isCartOpen, setIsCartOpen } = useCheckoutStore()

  return (
    <div className={`${isCartOpen ? '' : borderBottomRadius} `}>

      <div className={`bg-bkg border-faded cursor-pointer ${isCartOpen ? '' : borderBottomRadius} border-b-[0.1rem] p-6`}
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