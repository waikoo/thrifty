import CheckMark from '@/app/components/checkout/CheckMark'
import { useCheckoutStore } from '@/state/client/checkoutState'
import CheckoutError from './CheckoutError'

type CheckoutContactTitleIconsProps = {
  number: string
  title: string
}

export default function CheckoutContactTitleIcons({ number, title }: CheckoutContactTitleIconsProps) {
  const { isContactErrorFree, isShippingErrorFree, isPaymentErrorFree } = useCheckoutStore()


  return (
    <span className="relative z-50 ">
      {number === '1' && isContactErrorFree && <CheckMark />}
      {number === '1' && isContactErrorFree === false && <CheckoutError />}

      {number === '2' && isShippingErrorFree && <CheckMark />}
      {number === '2' && isShippingErrorFree === false && <CheckoutError />}

      {number === '3' && isPaymentErrorFree && <CheckMark />}
      {number === '3' && isPaymentErrorFree === false && <CheckoutError />}
    </span>
  )
}

