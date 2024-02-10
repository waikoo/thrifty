import { useCheckoutStore, useOrderStore } from "@/state/uiState"

type CheckoutRadioProps = {
  text: string
  price?: string
  value: string
  name: string
}

export default function CheckoutRadio({ text, price, value, name }: CheckoutRadioProps) {
  const { shippingType, setShippingType } = useOrderStore()
  const { paymentType, setPaymentType, setIsPaymentErrorFree } = useCheckoutStore()

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
    <label className="border-content text-content flex w-full cursor-pointer items-center justify-between gap-4 border-[0.1rem] p-4">
      <div className="flex items-center gap-2">
        <input
          type="radio"
          name={name}
          checked={shippingType === value || paymentType === value}
          onChange={onChangeHandler} />
        <span className="select-none">{text}</span>
      </div>
      <span>{price}</span>
    </label>
  )
}
