"use client"
import CheckoutSummaryItem from "@/app/components/checkout/CheckoutSummaryItem";
import { useCheckoutStore } from "@/state/client/checkoutState";
import { useOrderStore } from "@/state/client/orderState";


export default function CheckoutSummaryItems() {
  const { firstName, lastName, email, phone, address, city, country, zipcode, paymentType } = useCheckoutStore()
  const { shippingType } = useOrderStore()

  return (
    <div className="flex flex-col gap-[3rem]">
      <CheckoutSummaryItem title="CONTACT" content={[firstName, lastName, phone, email]} />
      <CheckoutSummaryItem title="SHIPPING" content={shippingType === 'store' ? [shippingType] : [address, city, country, zipcode]} />
      <CheckoutSummaryItem title="PAYMENT" content={[paymentType]} />
    </div>
  )
}
