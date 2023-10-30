import { useProductStore } from "@/state/productState"
import { Optional } from "."

type ProductInputProps = {
  name: string
  placeholder: string
  icon: string
}

export default function ProductInput({ name, placeholder, icon }: ProductInputProps) {
  const upperCaseName = name.toUpperCase()
  const { setPrice, setDiscount, setSize } = useProductStore()
  const size = useProductStore(state => state.size)

  return (
    <fieldset className="relative flex w-[50%] items-center gap-4">
      <legend hidden>{upperCaseName}</legend>
      <label htmlFor={name}
        className="grid grid-cols-[8rem_21rem] gap-4">
        <span className="justify-self-end">{upperCaseName} </span>
        {name === 'price' || name === 'discount' ? (
          <input
            placeholder={placeholder}
            type="number"
            name={name}
            id={name}
            className={`bg-bkg p-2 adminBorder`}
            onChange={(e) => {
              if (name === 'price') {
                setPrice(+e.target.value)
              } else if (name === 'discount') {
                setDiscount(+e.target.value)
              }
            }}
          />
        ) : (
          <input
            placeholder={placeholder}
            type="text"
            name={name}
            id={name}
            className={`bg-bkg p-2 adminBorder`}
            onChange={(e) => {
              if (name === 'size') {
                setSize(e.target.value)
              }
            }}
          />
        )}
      </label>
      <span className="absolute right-2">{icon}</span>
      {name === 'discount' ? <Optional /> : null}
    </fieldset>
  )
}

