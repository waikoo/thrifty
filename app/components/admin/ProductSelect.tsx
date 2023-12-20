"use client"
import { AddNew, IconChevronDown, Optional, Select } from '.'
import { useProductStore } from '@/state'

type ProductSelectProps = {
  obj: {
    name: string
    content: string[] | { [key: string]: string[] }
  }
  handleAddItem?: (newBrand: string) => void
  value?: string
}

export default function ProductSelect({ obj: { name, content }, handleAddItem, value }: ProductSelectProps) {
  const { category } = useProductStore()

  const getContent = (content: string[] | { [key: string]: string[] }) => {
    if (Array.isArray(content)) return content
    if (['', '- Select -'].includes(category)) return content['all']
    return content[category]
  }

  return (
    <fieldset className="text-content relative flex w-[50%] items-center gap-4">
      <legend hidden>{name}</legend>

      <label
        htmlFor={name.toLowerCase()}
        className="grid grid-cols-[8rem_21rem] items-center gap-4 whitespace-nowrap">
        <span className="flex flex-row-reverse gap-2 justify-self-end text-[0.8125rem] font-semibold">
          {name}
          {['BRAND', 'MATERIAL'].includes(name) ? <Optional /> : null}
        </span>

        <Select
          name={name}
          content={getContent(content)}
          value={value}
        />
      </label>

      {['BRAND', 'MATERIAL'].includes(name) ? <AddNew {... { name, handleAddItem }} /> : null}

      <IconChevronDown className="absolute right-3 z-50" />

    </fieldset>
  )
}
