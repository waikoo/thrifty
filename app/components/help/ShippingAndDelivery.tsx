import HelpTitle from "@/app/components/help/HelpTitle"
import { EURO } from "@/app/components/data/orderSummary"

export default function ShippingAndDelivery() {
  return (
    <>
      <HelpTitle>SHIPPING & DELIVERY</HelpTitle>
      <div className="*:font-semibold *:text-[0.8125rem]">
        <p>{EURO}20 standard delivery (2-4 days)</p>
        <p>FREE Shipping ABOVE {EURO}25</p>
        <p>FREE COLLECT FROM STORE</p>
      </div>
    </>
  )
}
