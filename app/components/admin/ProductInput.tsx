import { Optional } from "."
import useProductInputUtils, { FieldName } from "../hooks/useProductInputUtils"

type ProductInputProps = {
  name: FieldName
  placeholder: string
  icon: string
}

export default function ProductInput({ name, placeholder, icon }: ProductInputProps) {
  const upperCaseName = name.toUpperCase()
  const { getOnChange, getValue } = useProductInputUtils()

  return (
    <fieldset className="relative flex w-[50%] items-center gap-4">
      <legend hidden>{upperCaseName}</legend>
      <label htmlFor={name}
        className="grid grid-cols-[8rem_21rem] items-center gap-4">
        <span className="justify-self-end">{upperCaseName} </span>
        <input
          placeholder={placeholder}
          type="text"
          pattern="[0-9]*"
          name={name}
          id={name}
          className={`bg-bkg p-2 adminBorder`}
          value={getValue(name)}
          onChange={(e) => getOnChange(e, name)}
        />
      </label>
      <span className="absolute right-2">{icon}</span>
      {name === 'discount' ? <Optional className="top-0" /> : null}
    </fieldset>
  )
}

