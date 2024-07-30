"use client"
import { usePathname, useRouter } from "next/navigation";

import { borderRadius } from "@/app/components/data/universalStyles";
import { EURO } from "@/app/components/data/orderSummary";
import { useCheckoutStore } from "@/state/client/checkoutState";
import { useOrderSummaryStore } from "@/state/client/orderState";

type Endpoint = 'cart' | 'checkout' | 'summary'

type SummarySubmitProps = {
  className?: string
}

export default function SummarySubmit({ className }: SummarySubmitProps) {
  const [router, pathname] = [useRouter(), usePathname()]
  const splitPath = pathname.split('/')
  const lang = splitPath[1]
  const endpoint = splitPath[splitPath.length - 1]

  const { isContactErrorFree, isShippingErrorFree, isPaymentErrorFree } = useCheckoutStore()
  const { totalWithShipping } = useOrderSummaryStore()

  const checkout = () => {
    if (endpoint === 'cart') {
      router.push(`/${lang}/checkout`)
    }

    if (endpoint === 'checkout') {
      if (isContactErrorFree && isShippingErrorFree && isPaymentErrorFree) {
        router.push(`/${lang}/checkout/summary`)
      } else {
        return
      }
    }

    if (endpoint === 'summary') {
      router.push(`/${lang}/checkout/success`)
    }
  }

  const getButtonText = (endpoint: Endpoint) => {
    const text = {
      cart: "CHECKOUT",
      checkout: "CONFIRM ORDER",
      summary: `PAY ${EURO}${totalWithShipping}`
    }

    return text[endpoint]
  }
  const textContent = getButtonText(endpoint as Endpoint)

  return (
    <button
      className={`${className} bg-t_black text-t_white col-span-full p-3 text-[0.875rem] font-semibold ${borderRadius}`}
      onClick={checkout}>
      {textContent}
    </button>
  )
}
