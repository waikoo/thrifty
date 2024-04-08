"use client"
import { FaMinus, FaPlus } from "react-icons/fa6";

import CheckMark from "@/app/components/checkout/CheckMark";
import { useCheckoutStore } from "@/state/client/checkoutState";

type CheckoutContactTitleProps = {
  number: string
  title: string
}

export default function CheckoutContactTitle({ number, title }: CheckoutContactTitleProps) {
  const { setIsContactOpen, isContactOpen, setIsShippingOpen, isShippingOpen, setIsPaymentOpen, isPaymentOpen, isContactErrorFree, isShippingErrorFree, isPaymentErrorFree } = useCheckoutStore()

  const handleOnClick = () => {
    if (title === 'CONTACT') setIsContactOpen(!isContactOpen)
    if (title === 'SHIPPING') setIsShippingOpen(!isShippingOpen)
    if (title === 'PAYMENT') setIsPaymentOpen(!isPaymentOpen)
  }

  return (
    <div className="relative flex items-center justify-between">
      <div className="bg-faded absolute -top-[3.2rem] left-0 right-0 mx-auto grid h-[2.5rem] w-[2.5rem] place-items-center rounded-full">
        <span className="relative z-50 ">
          {number === '1' && isContactErrorFree && <CheckMark />}
          {number === '2' && isShippingErrorFree && <CheckMark />}
          {number === '3' && isPaymentErrorFree && <CheckMark />}
        </span>
        <span className="text-bkg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-[1rem] font-bold"> {number} </span>
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
