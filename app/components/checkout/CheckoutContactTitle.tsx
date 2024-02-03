import { FaMinus } from "react-icons/fa6";

type CheckoutContactTitleProps = {
  number: string
  title: string
}

export default function CheckoutContactTitle({ number, title }: CheckoutContactTitleProps) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="col-start-1 col-end-2 text-[0.8125rem] font-extrabold tracking-wide">{number}. {title}</h2>
      <FaMinus className="col-start-2 col-end-3 justify-self-end" />
    </div>
  )
}
