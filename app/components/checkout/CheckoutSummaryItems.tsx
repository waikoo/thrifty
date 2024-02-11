"use client"
import { useCheckoutStore } from "@/state/uiState";
import CheckoutSummaryItem from "./CheckoutSummaryItem";


export default function CheckoutSummaryItems() {
  const { firstName, lastName, email, phone, address, city, country, zipcode, paymentType } = useCheckoutStore()

  return (
    <>
      <CheckoutSummaryItem title="CONTACT" content={[firstName, lastName, phone, email]} />
      <CheckoutSummaryItem title="SHIPPING" content={[address, city, country, zipcode]} />
      <CheckoutSummaryItem title="PAYMENT" content={[paymentType]} />
    </>
  )
}
