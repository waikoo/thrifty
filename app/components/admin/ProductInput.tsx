'use client'
import { albert_600 } from "@/utils/fonts"
import { Optional } from "."
import { useInitValues } from "../hooks"
import useProductInputUtils from "../hooks/useProductInputUtils"

type ProductInputProps = {
  name: string
  placeholder: string
  icon: string
  value?: string
}

export default function ProductInput({ name, placeholder, icon, value }: ProductInputProps) {
  const upperCaseName = name.toUpperCase()
  const { getOnChange, getValue } = useProductInputUtils()
  useInitValues(!value ? '' : value, name)

  return (
    <fieldset className="relative flex w-[50%] items-center gap-4">
      <legend hidden>{upperCaseName}</legend>
      <label htmlFor={name}
        className="grid grid-cols-[8rem_21rem] items-center gap-4">
        <span className={`text-[#e3e3e3] relative flex flex-row-reverse gap-2 justify-self-end text-[0.8125rem] ${albert_600.className}`}>
          {upperCaseName}
          {['discount', 'size'].includes(name) ? <Optional /> : null}

        </span>
        <input
          placeholder={placeholder}
          type={'text'}
          name={name}
          id={name}
          className={"bg-[#151515] text-white border-[1px] border-[#1B1B1B] focus:ring-yellow border-2 p-2 text-[0.8125rem] font-normal focus:outline-none focus:ring-[0.15rem]"}
          value={getValue(name) || ''}
          onChange={(e) => {
            getOnChange(e, name)
          }}
        />
      </label>
      <span className="absolute right-2 text-[#c2c2c2]">{icon}</span>
    </fieldset>
  )
}

