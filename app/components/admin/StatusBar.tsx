"use client"
import { supabase } from "@/app/supabase"
import { useProductStore } from "@/state/productState"

type StatusBarProps = {
}

export default function StatusBar({ }: StatusBarProps) {
  const { created, edited } = useProductStore((state) => state.counter)
  supabase.auth.getUser().then(({ data: { user } }) => console.log(user))

  return (
    <div className="bg-content text-bkg fixed bottom-0 left-0 right-0 grid w-screen grid-cols-[auto_auto_1fr] gap-8 p-6 text-[1.2rem] font-bold ">

      <span>CREATED: {created} </span>
      <span className="justify-self-start">EDITED: {edited} </span>

      <button className="bg-bkg text-content cursor-pointer justify-self-end px-24 py-4 font-semibold tracking-wider">PUBLISH CHANGES</button>
    </div>
  )
}
