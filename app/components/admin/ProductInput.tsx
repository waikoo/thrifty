import { Optional } from "."

type ProductInputProps = {
  name: string
  placeholder: string
  icon: string
}

export default function ProductInput({ name, placeholder, icon }: ProductInputProps) {
  const upperCaseName = name.toUpperCase()

  return (
    <fieldset className="relative flex w-[50%] items-center gap-4">
      <legend hidden>{upperCaseName}</legend>
      <label htmlFor={name}
        className="grid grid-cols-[8rem_21rem] gap-4">
        <span className="justify-self-end">{upperCaseName} </span>
        <input
          placeholder={placeholder}
          type="number"
          name={name}
          id={name}
          className={`bg-bkg p-2 adminBorder`}
        />
      </label>
      <span className="absolute right-2">{icon}</span>
      {name === 'discount' ? <Optional /> : null}
    </fieldset>
  )
}
