"use client"
import { useRef, useState } from 'react'
import { Select } from '.'

type ProductSelectProps = {
  obj: {
    name: string
    content: string[]
  }
  className?: string
  handleAddItem?: (newBrand: string) => void
}

export default function ProductSelect({ obj, className, handleAddItem }: ProductSelectProps) {
  const [showAdd, setShowAdd] = useState(false)
  const inputRef = useRef<null | HTMLInputElement>(null)

  return (
    <fieldset className="relative flex w-[50%] items-center gap-4">
      <legend hidden>{obj.name}</legend>
      {obj.name === 'MATERIAL' ? <span className="text-grey absolute left-[-2rem]">
        Optional
      </span> : null}

      <label htmlFor="gender" className="w-32 whitespace-nowrap text-right">
        {obj.name}
      </label>

      <Select name={obj.name} content={obj.content} className={className} />

      {obj.name === 'BRAND' || obj.name === 'MATERIAL' ? (
        <div className="absolute right-[-6rem] cursor-pointer"
          onClick={() => setShowAdd(!showAdd)}
        >
          <span>+</span>
          <span className="text-grey">Add new</span>
        </div>) : null}

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

    </fieldset>

  )
}
