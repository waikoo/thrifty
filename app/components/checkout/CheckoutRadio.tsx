import { useCheckoutStore } from "@/state/client/checkoutState"
import { useOrderStore } from "@/state/client/orderState";
import { albert, albert_600 } from "@/utils/fonts";
import { borderRadius } from "@/app/components/data/universalStyles";
import { useRef } from "react";

type CheckoutRadioProps = {
  text: string
  price?: string
  value: string
  name: string
}

export default function CheckoutRadio({ text, price, value, name }: CheckoutRadioProps) {
  const { shippingType, setShippingType } = useOrderStore()
  const { paymentType, setPaymentType, setIsPaymentErrorFree } = useCheckoutStore()
  const inputRef = useRef<HTMLInputElement>(null)
  const conditionalBg = shippingType === value || paymentType === value ? 'bg-t_mustard' : '';

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (value === "home" || value === "store") {
      setShippingType(value)
    }
    if (value === "cash" || value === "card") {
      setPaymentType(value)
      setIsPaymentErrorFree(true)
    }
  }

  return (
    <label className={`${conditionalBg} text-[13px] sm:text-[17px] xl:text-[14px] ${albert.className} border-t_mustard border-[0.1rem] text-content flex w-full cursor-pointer items-center justify-between gap-4 p-4 ${borderRadius}`}>
      <div className={`flex items-center gap-2`}>
        <input
          type="radio"
          name={name}
          checked={shippingType === value || paymentType === value}
          onChange={onChangeHandler}
          className='checked:bg-black'
          ref={inputRef}
        />

        <span className='select-none'>{text}</span>
      </div>
      <span className={`${price === 'Free' ? '' : albert_600.className}`}>{price}</span>
    </label>
  )
}
