import HelpTitle from "@/app/components/help/HelpTitle"
import { EURO } from "@/app/components/data/orderSummary"

type ShippingAndDeliveryProps = {
  children: React.ReactNode
}

export default function ShippingAndDelivery({ children }: ShippingAndDeliveryProps) {
  return (
    <>
      <HelpTitle>{children}</HelpTitle>
      <div className="*:font-semibold *:text-[0.8125rem]">
        <p>{EURO}20 standard delivery (2-4 days)</p>
        <p>FREE Shipping ABOVE {EURO}25</p>
        <p>FREE COLLECT FROM STORE</p>
      </div>
    </>
  )
}
