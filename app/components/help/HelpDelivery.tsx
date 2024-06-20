import HelpTitle from "@/app/components/help/HelpTitle"
import { EURO } from "@/app/components/data/orderSummary"
import DeliveryType from "@/app/components/help/DeliveryType"

export default function HelpDelivery() {

  return (
    <div className="text-left">
      <HelpTitle>DELIVERY</HelpTitle>

      <div className="xl:flex sm:gap-4 xl:gap-2">
        <DeliveryType
          cost={`${EURO}15`}
          duration="2-4"
          details="Our standard delivery option ensures your order reaches you within 2 to 4 business days. A tracking number will be provided once your order has been dispatched, allowing you to monitor its progress."
        >STANDARD DELIVERY
        </DeliveryType>

        <DeliveryType
          cost="Free"
          duration="2-4"
          details={`Enjoy free shipping on all orders exceeding ${EURO}30. Your items will be delivered within 2 to 4 business days at no additional cost. This offer applies automatically at checkout when your order total is over ${EURO}30.`}
        >FREE DELIVERY ABOVE {EURO}30
        </DeliveryType>

        <DeliveryType
          cost="Free"
          details="You can buy any item online and pick it up from our store, or you can reserve any item for 24 hours for free. This also gives the option to try it on in the store allowing you time to decide!"
        >COLLECT FROM STORE
        </DeliveryType>
      </div>
    </div>
  )
}

