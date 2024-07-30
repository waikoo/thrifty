import { FaMinus, FaPlus } from 'react-icons/fa6'

import { useCheckoutStore } from '@/state/client/checkoutState'

type CheckoutContactTitleVisibilityProps = {
  title: string
}

export default function CheckoutContactTitleVisibility({ title }: CheckoutContactTitleVisibilityProps) {
  const { setIsContactOpen, isContactOpen, setIsShippingOpen, isShippingOpen, setIsPaymentOpen, isPaymentOpen } = useCheckoutStore()

  const handleOnClick = () => {
    if (title === 'CONTACT') setIsContactOpen(!isContactOpen)
    if (title === 'SHIPPING') setIsShippingOpen(!isShippingOpen)
    if (title === 'PAYMENT') setIsPaymentOpen(!isPaymentOpen)
  }

  return (
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
  )
}

