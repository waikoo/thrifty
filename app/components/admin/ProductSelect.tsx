"use client"
import { useRef, useState } from 'react'
import { AddNew, Optional, Select } from '.'

type ProductSelectProps = {
  obj: {
    name: string
    content: string[]
  }
  handleAddItem?: (newBrand: string) => void
}

export default function ProductSelect({ obj, handleAddItem }: ProductSelectProps) {
  const [showAdd, setShowAdd] = useState(false)
  const inputRef = useRef<null | HTMLInputElement>(null)

  return (
    <fieldset className="relative flex w-[50%] items-center gap-4">
      <legend hidden>{obj.name}</legend>

      <label htmlFor={obj.name.toLowerCase()} className="grid grid-cols-[8rem_21rem] gap-4 whitespace-nowrap">
        <span className="justify-self-end">{obj.name}</span>

        <Select name={obj.name} content={obj.content} />
      </label>

      {obj.name === 'BRAND' || obj.name === 'MATERIAL' ? (
        <AddNew setShowAdd={setShowAdd} showAdd={showAdd} />) : null}

      {showAdd ? (
        <div
          className="absolute right-[-12rem] top-[-1.5rem]">
          <input ref={inputRef} type="text" className="text-bkg w-[8rem]" />
          <button
            onClick={(e) => {
              e.preventDefault();
              inputRef.current?.value && handleAddItem!(inputRef.current.value);
              inputRef.current!.value = ''
              setShowAdd(false)
            }}
            className="ml-4">Add</button>
        </div>
      ) : null}
      {obj.name === 'MATERIAL' ? <Optional /> : null}

    </fieldset>

  )
}
