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

    const getSession = async () => {
      return await supabase.auth.getSession()
    }
    // theme
    const getUserId = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      return user?.id
    }
    const getThemePreference = async (client_id: string) => {
      const { data, error } = await supabase
        .from('clients')
        .select('*')
        .eq('client_id', client_id)
        .select('wants_dark')
      if (error) console.error(error)
      return data
    }

    const setThemeInDb = async (client_id: string, wants_dark: boolean) => {
      const { error } = await supabase
        .from('clients')
        .update({ wants_dark })
        .eq('client_id', client_id)
      if (error) console.error(error)
    }

    if (checked === 'light' || checked === 'dark') {
      getSession().then(({ data: { session } }) => {
        if (session) {
          getUserId().then(id => {
            if (id) {
              getThemePreference(id).then(data => {
                if (data) {
                  console.log(data)
                  const storedTheme = data[0].wants_dark === null ? checked : data[0].wants_dark ? 'dark' : 'light'
                  updateTheme(storedTheme)
                  document.documentElement.dataset.theme = storedTheme
                  localStorage.setItem(themeSettings.LOCAL_STORAGE_KEY, (storedTheme === 'dark').toString())
                  setThemeInDb(id, checked === 'dark')
                }
              })
            }
          })
        }
      })
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

    if (checked === 'women' || checked === 'men' || checked === 'kids') {
      getSession().then(({ data: { session } }) => {
        if (session) {
          saveGenderPreference(checked, session.user.id)
        }
      })
    }
  }, [checked])

  const getValue = (value: string) => {
    const lowercaseValue = value.toLowerCase()

    if (lowercaseValue === 'english' || lowercaseValue === 'deutsch') {
      return lowercaseValue.slice(0, 2) === checked
    }

    return lowercaseValue === checked
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value.toLowerCase())
    setChecked(e.target.value.toLowerCase())
  }

  return (
    <div className="*:text-black mb-2 grid grid-cols-3 sm:grid-cols-4 gap-3 xl:gap-6 items-center rounded-full mx-4 xl:mx-0 sm:px-3 py-3 *:text-[13px] *:sm:text-[17px] *:xl:text-[14px]">
      <h2 className={`sm:justify-self-end col-span-full col-start-1 col-end-2 row-start-1 row-end-2 justify-self-start text-[13px] sm:text-[17px] xl:text-[14px] ${albert_600.className}`}>{title}</h2>

      <div className="row-start-2 sm:row-start-1 flex gap-3">
        {radioValues.map((value) => {
          const lowerCase = value.toLowerCase()
          const checkedBg = checked === lowerCase || checked === lowerCase.slice(0, 2) ? albert_600.className : ''

          return (
            <label key={value}
              className={`flex items-center gap-2 font-normal text-[13px] sm:text-[17px] xl:text-[14px] ${albert.className}`}>
              <input
                type="radio"
                name={title}
                value={value}
                checked={getValue(value)}
                onChange={onChange}
                className="checked:hover:bg-[#d2d62e] checked:bg-t_black hover:bg-[#e3e3e3] bg-[#F9F9F9] peer" />

              <span className={`peer-checked:bg-t_mustard rounded-full py-1 px-3 xl:text-[14px] ${checkedBg}`}>
                {value}
              </span>
            </label>
          )
        })}
      </div>

    </div>
  )
}
