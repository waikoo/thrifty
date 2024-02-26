"use client"
import { useEffect, useState } from "react"

import { useThemeStore } from "@/state/themeState"
import { themeSettings } from "@/app/components/data/theme"

type PreferenceElementProps = {
  radioValues: string[]
  title: 'SHOPPING' | 'LANGUAGE' | 'THEME'
  defaultChecked: string
}

export default function PreferenceElement({ radioValues, title, defaultChecked }: PreferenceElementProps) {
  const [checked, setChecked] = useState(defaultChecked)
  const { updateTheme } = useThemeStore()

  useEffect(() => {
    // theme
    if (checked === 'light' || checked === 'dark') {
      updateTheme(checked)
      document.documentElement.dataset.theme = checked
      localStorage.setItem(themeSettings.LOCAL_STORAGE_KEY, (checked === 'dark').toString())
    }
  }, [checked])

  const getValue = (value: string) => {
    const lowercase = value.toLowerCase()

    return title === 'LANGUAGE'
      ? lowercase.slice(0, 2) === checked
      : lowercase === checked
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.value.toLowerCase())
  }

  return (
    <div className="bg-faded *:text-black mb-2 grid grid-cols-4 gap-6 rounded-full px-10 py-8">
      <h2 className={`justify-self-end text-[0.75rem] font-extrabold`}>{title}</h2>

      {radioValues.map((value) => (
        <label key={value} className="flex items-center gap-2 text-[0.8125rem] font-normal">
          <input type="radio" name={title} value={value} checked={getValue(value)} onChange={onChange} />
          {value}
        </label>
      ))}
    </div>
  )
}
