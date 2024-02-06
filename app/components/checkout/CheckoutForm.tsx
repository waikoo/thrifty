import ContactForm from "@/app/components/checkout/ContactForm";
import ShippingForm from "@/app/components/checkout/ShippingForm";
import PaymentForm from "@/app/components/checkout/PaymentForm";

type CheckoutFormProps = {
  className: string
}

export default function CheckoutForm({ className }: CheckoutFormProps) {

  return (
    <div className={`bg-bkg mb-[10rem] w-[800px] ${className}`}>
      <ContactForm />
      <hr />

      <ShippingForm />
      <hr />

      <PaymentForm />
      <hr />
    </div>
  )
}
