"use client"
import { usePathname } from "next/navigation"

import PreferenceElement from "@/app/components/settings/PreferenceElement"
import getLangAndGender from "@/utils/getLangAndGender"
import useMediaQuery from "@/app/components/hooks/useMediaQuery"
import { albert_800 } from "@/utils/fonts"

export default function Preferences() {
  const genders = ['Men', 'Women', 'Kids']
  const languages = ['English', 'German']
  const themes = ['Light', 'Dark']

  const { lang, gender } = getLangAndGender(usePathname())
  const prefersDarkMode = useMediaQuery(['(prefers-color-scheme: dark)'], [true], false)
  const theme = prefersDarkMode ? 'dark' : 'light'

  return (
    <section className="mx-auto w-full xl:w-[500px]">
      <h1 className={`text-t_black mt-6 text-center text-[13px] sm:text-[17px] xl:text-[15px] ${albert_800.className}`}>PREFERENCES</h1>

      <div className="mt-5 bg-[#f2f2f2] rounded-[40px] xl:w-[450px] py-6">
        <PreferenceElement title={'Shopping'} radioValues={genders} defaultChecked={'women'} />
        <PreferenceElement title={'Language'} radioValues={languages} defaultChecked={lang} gender={gender} />
        <PreferenceElement title={'Theme'} radioValues={themes} defaultChecked={theme} />
      </div>

    </section>
  )
}
