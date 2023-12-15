import { Optional } from "."
import useProductInputUtils from "../hooks/useProductInputUtils"

type ProductInputProps = {
  name: string
  placeholder: string
  icon: string
}

export default function ProductInput({ name, placeholder, icon }: ProductInputProps) {
  const upperCaseName = name.toUpperCase()
  const { getOnChange, getValue } = useProductInputUtils()

  return (
    <fieldset className="text-content relative flex w-[50%] items-center gap-4">
      <legend hidden>{upperCaseName}</legend>
      <label htmlFor={name}
        className="grid grid-cols-[8rem_21rem] items-center gap-4">
        <span className="relative flex flex-row-reverse gap-2 justify-self-end text-[0.8125rem] font-semibold">
          {upperCaseName}
          {['discount', 'size'].includes(name) ? <Optional /> : null}

        </span>
        <input
          placeholder={placeholder}
          type={'text'}
          name={name}
          id={name}
          className={"bg-bkg adminBorder p-2 text-[0.8125rem] font-normal"}
          value={getValue(name)}
          onChange={(e) => getOnChange(e, name)}
        />
      </label>
      <span className="absolute right-2">{icon}</span>

    </fieldset>
  )
}

