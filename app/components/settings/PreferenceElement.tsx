"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { useThemeStore } from "@/state/themeState"
import { themeSettings } from "@/app/components/data/theme"
import { supabase } from "@/app/supabase"
import { Gender } from "@/types/link"
import { albert, albert_600 } from "@/utils/fonts"

type PreferenceElementProps = {
  radioValues: string[]
  title: 'Shopping' | 'Language' | 'Theme'
  defaultChecked: string
  gender?: Gender
}

export default function PreferenceElement({ radioValues, title, defaultChecked, gender }: PreferenceElementProps) {
  const [checked, setChecked] = useState(defaultChecked)
  const { updateTheme } = useThemeStore()
  const router = useRouter()

  useEffect(() => {
    // theme
    if (checked === 'light' || checked === 'dark') {
      updateTheme(checked)
      document.documentElement.dataset.theme = checked
      localStorage.setItem(themeSettings.LOCAL_STORAGE_KEY, (checked === 'dark').toString())
    }

    // language
    const lang = checked.slice(0, 2)
    if (lang === 'en' || lang === 'de') {
      router.push(`/${lang}/${gender}/settings`)
    }

    // gender
    const saveGenderPreference = async (gender: 'men' | 'women' | 'kids', client_id: string) => {
      const { data: update, error: updateError } = await supabase.
        from('clients')
        .update({ gender_preference: gender })
        .eq('client_id', client_id)
      if (updateError) console.error(updateError)
    }

    const getSession = async () => {
      return await supabase.auth.getSession()
    }

    if (checked === 'women' || checked === 'men' || checked === 'kids') {
      getSession().then(({ data: { session } }) => {
        if (session) {
          saveGenderPreference(checked, session.user.id)
        }
      })
    }
  }, [checked])

  const getValue = (value: string) => {
    return value.toLowerCase() === checked
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.value.toLowerCase())
  }

  return (
    <div className="*:text-black mb-2 grid grid-cols-3 sm:grid-cols-4 gap-3 xl:gap-6 items-center rounded-full mx-4 xl:mx-0 sm:px-3 py-3 *:text-[13px] *:sm:text-[17px] *:xl:text-[14px]">
      <h2 className={`sm:justify-self-end col-span-full col-start-1 col-end-2 row-start-1 row-end-2 justify-self-start text-[13px] sm:text-[17px] xl:text-[14px] ${albert_600.className}`}>{title}</h2>

      <div className="row-start-2 sm:row-start-1 flex gap-3">
        {radioValues.map((value) => {
          const lowerCase = value.toLowerCase()
          const checkedBg = checked === lowerCase || checked === lowerCase.slice(0, 2) ? `bg-[#d2d62e] rounded-full py-1 px-3 w-min-content xl:text-[14px] ${albert_600.className}` : 'bg-none'

          return (
            <label key={value} className={`flex items-center gap-2 font-normal text-[13px] sm:text-[17px] xl:text-[14px] ${albert.className}`}>
              <input type="radio" name={title} value={value} checked={getValue(value)} onChange={onChange} className="checked:hover:bg-[#d2d62e] checked:bg-t_black hover:bg-[#e3e3e3] bg-[#F9F9F9]" />
              <span className={`${checkedBg}`}> {value} </span>
            </label>
          )
        })}
      </div>

    </div>
  )
}
