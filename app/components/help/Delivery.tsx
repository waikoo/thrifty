import HelpDelivery from "@/app/components/help/HelpDelivery";
import HelpReturns from "@/app/components/help/HelpReturns";

type DeliveryProps = {
  className?: string
}

export default function Delivery({ className }: DeliveryProps) {

  return (
    <div className={`p-10 ${className}`}>
      <HelpDelivery />
      <HelpReturns />
    </div>
  )
}
