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
  isBlockHidden: boolean
}

export default function CheckoutRadio({ text, price, value, name, isBlockHidden }: CheckoutRadioProps) {
  const { shippingType, setShippingType } = useOrderStore()
  const { paymentType, setPaymentType, setIsPaymentErrorFree } = useCheckoutStore()
  const inputRef = useRef<HTMLInputElement>(null)
  const conditionalBg = (shippingType === value || paymentType === value) && !isBlockHidden
    ? 'bg-t_mustard'
    : (shippingType === value || paymentType === value) && isBlockHidden
      ? 'bg-t_mustard/50'
      : '';
  const labelTextStyle = isBlockHidden ? 'text-gray-400' : 'text-black';
  const labelBorderStyle = isBlockHidden ? 'border-t_mustard/50' : 'border-t_mustard';
  const inputBgStyle = isBlockHidden ? 'checked:bg-black/50' : 'checked:bg-black'
  const conditionalBold = price === 'Free' ? '' : albert_600.className;

  const onChangeHandler = () => {
    if (value === "home" || value === "store") {
      setShippingType(value)
    }
    if (value === "cash" || value === "card") {
      setPaymentType(value)
      setIsPaymentErrorFree(true)
    }
  }

  return (
    <label className={`${conditionalBg} text-[13px] sm:text-[17px] xl:text-[14px] ${albert.className} ${labelBorderStyle} border-[0.1rem] ${labelTextStyle} flex w-full cursor-pointer items-center justify-between gap-4 p-4 ${borderRadius}`}>
      <div className={`flex items-center gap-2`}>
        <input
          type="radio"
          name={name}
          checked={shippingType === value || paymentType === value}
          onChange={onChangeHandler}
          className={inputBgStyle}
          ref={inputRef}
        />

        <span className='select-none'>{text}</span>
      </div>
      <span className={`${conditionalBold}`}>{price}</span>
    </label>
  )
}
