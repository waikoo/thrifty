import { useRef } from 'react'
import { DELIVERY, EURO } from '@/app/components/data/orderSummary'
import { useOrderStore, useOrderSummaryStore } from '@/state/client/orderState'
import { useCartStore } from '@/state/client/cartState'

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
    <select className="text-bkg bg-faded col-span-full text-[0.75rem] font-medium" name="shipping" id="shipping" ref={selectRef} onChange={selectOnChange}>
      <option value="home" className="">Home Delivery 2-3 Days</option>
      <option value="store" className="">Collect from store </option>
    </select>
  )
}
