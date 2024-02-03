type CheckoutContactProps = {
  type: string
  text: string
  id: string
}

export default function CheckoutContact({ type, text, id }: CheckoutContactProps) {

  return (
    <div className="relative flex w-full flex-col">
      <input className="bg-bkg border-b-content peer border-x-0 border-b-[0.1rem] border-t-0 border-solid pl-0 placeholder-transparent focus:ring-0" id={id} type={type} placeholder={text} />
      <label className="absolute -top-3.5 left-0 text-gray-600 transition-all  peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-100" htmlFor={id}>{text}</label>
    </div>
  )
}
