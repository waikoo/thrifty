"use client"
import { usePathname } from "next/navigation"

import PreferenceElement from "@/app/components/settings/PreferenceElement"
import getLangAndGender from "@/utils/getLangAndGender"
import useMediaQuery from "@/app/components/hooks/useMediaQuery"

export default function Preferences() {
  const genders = ['Men', 'Women', 'Kids']
  const languages = ['English', 'Deutsch']
  const themes = ['Light', 'Dark']

  const { lang } = getLangAndGender(usePathname())
  const prefersDarkMode = useMediaQuery(['(prefers-color-scheme: dark)'], [true], false)
  const theme = prefersDarkMode ? 'dark' : 'light'

  return (
    <section>
      <h1 className="text-content mt-8 text-center text-[0.75rem] font-extrabold">PREFERENCES</h1>

      <div className="mt-5">
        <PreferenceElement title={'SHOPPING'} radioValues={genders} defaultChecked={'women'} />
        <PreferenceElement title={'LANGUAGE'} radioValues={languages} defaultChecked={lang} />
        <PreferenceElement title={'THEME'} radioValues={themes} defaultChecked={theme} />
      </div>

    </section>
  )
}
