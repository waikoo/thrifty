"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { twMerge as tm } from "tailwind-merge"

import { supabase } from "@/app/supabase";

type withHomeProps = {
  children: React.ReactNode
  className?: string
}

export default function WithHome({ className, children }: withHomeProps) {
  let [, locale, category] = usePathname().split('/')
  const [genderPreference, setGenderPreference] = useState('women')

  useEffect(() => {

    const getUserId = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      return user?.id
    }

    const getGenderPreference = async () => {
      const { data, error } = await supabase
        .from('clients')
        .select('gender_preference')
        .eq('client_id', await getUserId())
      if (error) console.error(error)
      return data
    }

    getGenderPreference().then(genderPref => {
      if (genderPref) {
        setGenderPreference(genderPref[0].gender_preference)
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
      href={`/${locale}/${genderPreference}`}
      className={tm(`flex justify-center ${className}`)}
    >
      {children}
    </Link>
  )
}
