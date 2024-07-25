import { useRef } from 'react'

import { DELIVERY, EURO } from '@/app/components/data/orderSummary'
import { useOrderStore, useOrderSummaryStore } from '@/state/client/orderState'
import { useCartStore } from '@/state/client/cartState'
import { albert_500 } from '@/utils/fonts'

export default function SummaryShippingSelect() {
  const selectRef = useRef<HTMLSelectElement | null>(null)
  const { cartTotalPrice } = useCartStore()
  const { setShippingType } = useOrderStore()
  const { setShippingPrice, setShippingText, setTotalWithShipping } = useOrderSummaryStore()

  const selectOnChange = () => {
    const shippingMethod = selectRef.current?.value as "home" | "store"
    const shippingPrice = DELIVERY[shippingMethod]
    setShippingType(shippingMethod)
    setShippingPrice(shippingPrice)
    setShippingText(shippingPrice === 0 ? "FREE" : `${EURO}${shippingPrice}`)
    setTotalWithShipping(cartTotalPrice + shippingPrice)
  }

  return (
    <select className={`text-t_black bg-[#fcfcfc] col-span-full text-[14px] ${albert_500.className} border-[#e3e3e3]`}
      name="shipping"
      id="shipping"
      ref={selectRef}
      onChange={selectOnChange}
    >
      <option value="home">Home Delivery 2-4 Days</option>
      <option value="store">Collect from store </option>
    </select>
  )
}
