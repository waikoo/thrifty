import { useCartStore } from "@/state/uiState"
import { EURO, FREE_HOME_DELIVERY_PRICE } from "@/app/components/data/orderSummary";
import { useOrderStore } from "@/state/client/orderState";

export default function SummaryFreeDelivery() {
  const { isFreeDelivery } = useOrderStore()
  const { cartTotalPrice } = useCartStore()

  const freeDeliveryText = isFreeDelivery
    ? "Free home delivery reached"
    : "Left until free home delivery"

  const amountUntilFreeDelivery = FREE_HOME_DELIVERY_PRICE - cartTotalPrice < 0
    ? ""
    : `${EURO}${FREE_HOME_DELIVERY_PRICE - cartTotalPrice}`

  return (
    <>
      <span className="text-nowrap text-[0.75rem] font-medium">{freeDeliveryText}</span>
      <span className="justify-self-end text-[0.75rem] font-normal">{amountUntilFreeDelivery}</span>
    </>)
}
