"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { twMerge as tm } from "tailwind-merge"

import { supabase } from "@/app/supabase";
import getLangAndGender from "@/utils/getLangAndGender";

type withHomeProps = {
  children: React.ReactNode
  className?: string
}

export default function WithHome({ className, children }: withHomeProps) {

  const { lang } = getLangAndGender(usePathname())
  const [genderPreference, setGenderPreference] = useState('women')

  useEffect(() => {

    const getUserId = async () => {
      const { error, data } = await supabase.auth.getUser()

      if (error) {
        console.log(error)
      } else {
        return data.user?.id
      }
    }

    const getGenderPreference = async () => {
      const isSession = await supabase.auth.getSession()
      if (!isSession.data.session) return

      const userId = await getUserId()

      const { data, error } = await supabase
        .from('clients')
        .select('gender_preference')
        .eq('client_id', userId)
      if (error) console.error(error)

      return data
    }

    getGenderPreference().then(genderPref => {
      if (genderPref) {
        setGenderPreference(genderPref[0]?.gender_preference || 'women')
      }
    })
  }, [])

  const channels = supabase.channel('custom-all-channel')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'clients' },
      (payload) => {
        const updatedData = payload.new as { gender_preference: 'men' | 'women' | 'kids' };
        setGenderPreference(updatedData.gender_preference)
      }
    )
    .subscribe()

  return (
    <Link
      href={`/${lang}/${genderPreference}`}
      className={tm(`flex justify-center ${className}`)}
    >
      {children}
    </Link>
  )
}
