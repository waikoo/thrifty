"use client"
import CheckoutSummaryItem from "@/app/components/checkout/CheckoutSummaryItem";
import { useCheckoutStore } from "@/state/client/checkoutState";


export default function CheckoutSummaryItems() {
  const { firstName, lastName, email, phone, address, city, country, zipcode, paymentType } = useCheckoutStore()

  return (
    <div className="flex flex-col gap-[3rem]">
      <CheckoutSummaryItem title="CONTACT" content={[firstName, lastName, phone, email]} />
      <CheckoutSummaryItem title="SHIPPING" content={[address, city, country, zipcode]} />
      <CheckoutSummaryItem title="PAYMENT" content={[paymentType]} />
    </div>
  )
}
