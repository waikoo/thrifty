type CheckoutRadioProps = {
  text: string
  price?: string
}

export default function CheckoutRadio({ text, price }: CheckoutRadioProps) {

  return (
    <label className="border-content text-content flex w-full items-center justify-between gap-4 border-[0.1rem] p-4">
      <div className="flex items-center gap-2">
        <input type="radio" />
        <span>{text}</span>
      </div>
      <span>{price}</span>
    </label>
  )
}
