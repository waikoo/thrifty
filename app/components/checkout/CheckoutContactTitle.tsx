"use client"
import { useCheckoutStore } from "@/state/uiState";
import { FaMinus, FaPlus } from "react-icons/fa6";

type CheckoutContactTitleProps = {
  number: string
  title: string
}

export default function CheckoutContactTitle({ number, title }: CheckoutContactTitleProps) {
  const { setIsContactOpen, isContactOpen, setIsShippingOpen, isShippingOpen, setIsPaymentOpen, isPaymentOpen } = useCheckoutStore()

  const handleOnClick = () => {
    if (title === 'CONTACT') setIsContactOpen(!isContactOpen)
    if (title === 'SHIPPING') setIsShippingOpen(!isShippingOpen)
    if (title === 'PAYMENT') setIsPaymentOpen(!isPaymentOpen)
  }

  return (
    <div className="flex items-center justify-between">
      <h2 className="col-start-1 col-end-2 text-[0.8125rem] font-extrabold tracking-wide">{number}. {title}</h2>
      <div className="col-start-2 col-end-3 cursor-pointer justify-self-end" onClick={handleOnClick}>
        {(title === 'CONTACT' && isContactOpen)
          || (title === 'SHIPPING' && isShippingOpen)
          || (title === 'PAYMENT' && isPaymentOpen)
          ? <FaMinus /> : <FaPlus />}
      </div>
    </div>
  )
}
