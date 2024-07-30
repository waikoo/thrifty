'use client'
import { FaMinus, FaPlus } from 'react-icons/fa6'

import { useCheckoutStore } from '@/state/client/checkoutState'
import { albert_800 } from '@/utils/fonts'

type CheckoutContactTitleProps = {
  number: string
  title: string
}

export default function CheckoutContactTitle({
  number,
  title,
}: CheckoutContactTitleProps) {
  const { setIsContactOpen, isContactOpen, setIsShippingOpen, isShippingOpen, setIsPaymentOpen, isPaymentOpen } = useCheckoutStore()

  const handleOnClick = () => {
    if (title === 'CONTACT') setIsContactOpen(!isContactOpen)
    if (title === 'SHIPPING') setIsShippingOpen(!isShippingOpen)
    if (title === 'PAYMENT') setIsPaymentOpen(!isPaymentOpen)
  }

  return (
    <div className="relative flex items-center justify-between">
      <div className="bg-[#f2f2f2] absolute -top-[3.2rem] left-0 right-0 mx-auto grid h-[2.5rem] w-[2.5rem] place-items-center rounded-full">

        <span className={`text-t_dark absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-[14px] ${albert_800.className}`}>
          {' '}{number}{' '}
        </span>
      </div>

      <h2 className={`col-start-1 col-end-2 text-[15px] ${albert_800.className} tracking-wide`}>
        {title}
      </h2>

      <div
        className="col-start-2 col-end-3 cursor-pointer justify-self-end"
        onClick={handleOnClick}
      >
        {(title === 'CONTACT' && isContactOpen) ||
          (title === 'SHIPPING' && isShippingOpen) ||
          (title === 'PAYMENT' && isPaymentOpen) ? (
          <FaMinus />
        ) : (
          <FaPlus />
        )}
      </div>
    </div>
  )
}
