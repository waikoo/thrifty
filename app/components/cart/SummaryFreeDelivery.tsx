import { EURO, FREE_HOME_DELIVERY_PRICE } from "@/app/components/data/orderSummary";
import { useCartStore } from "@/state/client/cartState";
import { useOrderStore } from "@/state/client/orderState";
import { albert_500 } from "@/utils/fonts";

export default function SummaryFreeDelivery() {
  const { isFreeDelivery } = useOrderStore()
  const { cartTotalPrice } = useCartStore()

  const freeDeliveryText = isFreeDelivery
    ? "Free shipping reached"
    : "Left until free shipping"

  const amountUntilFreeDelivery = FREE_HOME_DELIVERY_PRICE - cartTotalPrice < 0
    ? ""
    : `${EURO}${FREE_HOME_DELIVERY_PRICE - cartTotalPrice}`

  const width = isFreeDelivery
    ? "100%"
    : `${(cartTotalPrice / FREE_HOME_DELIVERY_PRICE) * 100}%`

  return (
    <>
      <span className={`text-nowrap sm:text-[17px] xl:text-[15px] ${albert_500.className}`}>{freeDeliveryText}</span>
      <span className={`justify-self-end sm:text-[17px] xl:text-[15px] ${albert_500.className}`}>{amountUntilFreeDelivery}</span>

      <div className="h-[0.5rem] w-full bg-white col-span-2">
        <div className={`h-[0.5rem] bg-t_black`}
          style={{ width: width }}></div>
      </div>
    </>)
}
