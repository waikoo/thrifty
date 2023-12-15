"use client"
import { useEffect, useLayoutEffect, useState } from 'react'
import { AddNew, Optional, Select } from '.'
import { useProductStore } from '@/state'

type ProductSelectProps = {
  obj: {
    name: string
    content: string[] | { [key: string]: string[] }
  }
  handleAddItem?: (newBrand: string) => void
}

export default function ProductSelect({ obj: { name, content }, handleAddItem }: ProductSelectProps) {
  const { type, category } = useProductStore()
  // const [typeState, setTypeState] = useState(() => {
  //   return Array.isArray(content) ? content : content['all']
  //   return !Array.isArray(content) ? (content[category] as string[]) : (content['all'] as string[])
  // })

  console.log(category)
  //
  // useEffect(() => {
  //   if (name === 'PRODUCT TYPE') {
  //     setTypeState(() => {
  //       return !Array.isArray(content)
  //         ? (content[category] as string[])
  //         : (content['all'] as string[]);
  //     });
  //   }
  // }, [category]);

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
          content={Array.isArray(content) ? content : content['all']}
        // content={typeState}
        />
      </label>

      {['BRAND', 'MATERIAL'].includes(name) ? <AddNew {... { name, handleAddItem }} /> : null}


    </fieldset>
  )
}
