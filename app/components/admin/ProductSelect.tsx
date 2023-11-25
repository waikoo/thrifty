import { AddNew, Optional, Select } from '.'

type ProductSelectProps = {
  obj: {
    name: string
    content: string[]
  }
  handleAddItem?: (newBrand: string) => void
}

export default function ProductSelect({ obj: { name, content }, handleAddItem }: ProductSelectProps) {

  return (
    <fieldset className="relative flex w-[50%] items-center gap-4">
      <legend hidden>{name}</legend>

      <label htmlFor={name.toLowerCase()} className="grid grid-cols-[8rem_21rem] items-center gap-4 whitespace-nowrap">
        <span className="justify-self-end">{name}</span>

        <Select name={name} content={content} />
      </label>

      {name === 'BRAND' || name === 'MATERIAL' ? <AddNew {... { name, handleAddItem }} /> : null}

      {name === 'MATERIAL' ? <Optional /> : null}

    </fieldset>
  )
}
