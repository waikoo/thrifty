"use client"
import { useRef, useState } from 'react'
import { twMerge as tm } from 'tailwind-merge'

type ProductSelectProps = {
  obj: {
    name: string
    content: string[]
  }
  className?: string
  defaultSelect?: string
  handleAddItem?: (newBrand: string) => void
}

export default function ProductSelect({ obj, className, handleAddItem, defaultSelect = '- Select -' }: ProductSelectProps) {
  const lowerCaseName = obj.name.toLowerCase()
  const [showAdd, setShowAdd] = useState(false)
  const inputRef = useRef<null | HTMLInputElement>(null)

  return (
    <fieldset className="relative flex w-[50%] items-center gap-4">
      <legend hidden>{obj.name}</legend>
      {obj.name === 'MATERIAL' ? <span className="text-grey absolute left-[-2rem]">Optional</span> : null}
      <label htmlFor="gender" className="w-32 whitespace-nowrap text-right">{obj.name}</label>

      <select
        name={lowerCaseName}
        id={lowerCaseName}
        className={tm(`text-content bg-bkg relative right-0 p-2 ${className}`)}>

        <option className="">{defaultSelect}</option>

        {obj.content.map((item) => (
          <option key={item} value={item.toLowerCase()}>{item}</option>
        ))}
      </select>


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
