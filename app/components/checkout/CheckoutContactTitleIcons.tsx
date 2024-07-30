import CheckMark from '@/app/components/checkout/CheckMark'
import { useCheckoutStore } from '@/state/client/checkoutState'

type CheckoutContactTitleIconsProps = {
  number: string
}

export default function CheckoutContactTitleIcons({ number }: CheckoutContactTitleIconsProps) {
  const { isContactErrorFree, isShippingErrorFree, isPaymentErrorFree } = useCheckoutStore()

  return (
    <span className="relative z-50 ">
      {number === '1' && isContactErrorFree && <CheckMark />}
      {number === '2' && isShippingErrorFree && <CheckMark />}
      {number === '3' && isPaymentErrorFree && <CheckMark />}
    </span>
  )
}

