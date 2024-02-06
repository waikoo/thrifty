"use client"
import CheckoutRadio from "@/app/components/checkout/CheckoutRadio";
import CheckoutContactTitle from "@/app/components/checkout/CheckoutContactTitle";
import CartPaymentMethods from "@/app/components/cart/CartPaymentMethods";
import { useCheckoutStore } from "@/state/uiState";

export default function PaymentForm() {
  const { isPaymentOpen } = useCheckoutStore()

  return (
    <section className="flex flex-col gap-8 p-8">
      <CheckoutContactTitle number="3" title="PAYMENT" />

      {isPaymentOpen &&
        <>
          <div className="flex gap-8">
            <CheckoutRadio price="" text="Cash" value="cash" name="payment" />
            <CheckoutRadio price="" text="Credit or Debit Card" value="card" name="payment" />
          </div>

          <CartPaymentMethods className="" />
        </>
      }
    </section>
  )
}
