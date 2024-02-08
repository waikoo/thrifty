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
    <div className="relative flex items-center justify-between">
      <div className="bg-faded absolute -top-14 left-0 right-0 mx-auto grid h-[2.875rem] w-[2.875rem] place-items-center rounded-full">
        <span className="text-bkg text-[1rem] font-bold">{number}</span>
      </div>
      <h2 className="col-start-1 col-end-2 text-[0.8125rem] font-extrabold tracking-wide">{title}</h2>
      <div className="col-start-2 col-end-3 cursor-pointer justify-self-end" onClick={handleOnClick}>
        {(title === 'CONTACT' && isContactOpen)
          || (title === 'SHIPPING' && isShippingOpen)
          || (title === 'PAYMENT' && isPaymentOpen)
          ? <FaMinus /> : <FaPlus />}
      </div>
    </div>
  )
}
