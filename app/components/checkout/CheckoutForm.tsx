import ContactForm from "@/app/components/checkout/ContactForm";
import ShippingForm from "@/app/components/checkout/ShippingForm";
import PaymentForm from "@/app/components/checkout/PaymentForm";

type CheckoutFormProps = {
  className: string
}

export default function CheckoutForm({ className }: CheckoutFormProps) {

  return (
    <div className={`mb-[10rem] flex w-[800px] flex-col gap-8 ${className}`}>
      <ContactForm />

      <ShippingForm />

      <PaymentForm />
    </div>
  )
}
