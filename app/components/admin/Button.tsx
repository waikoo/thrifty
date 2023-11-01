"use client"
import { supabase } from "@/app/supabase"
import { useProductStore } from "@/state/productState"

export default function Button() {
  const state = useProductStore(state => state)
  const { counter, setCounter, saveDraft } = useProductStore()

  const handleSave = () => {
    console.log(state)
    saveDraft()
    setCounter({ created: counter.created ? counter.created + 1 : 1 })

    supabase.auth.getUser().then(({ data: { user } }) => {
      console.log(user)
    })
    // supabase.auth.getSession().then(({ data: { session } }) => {
    //   console.log(session)
    // })
  }
  supabase.auth.getSession().then(({ data }) => {
    console.log(data)
  })

  return (
    <button
      className={`adminBorder w-16 mx-auto py-3 px-24 items-center justify-center flex`}
      onClick={handleSave}
    >
      SAVE
    </button>
  )
}


// TODO: config object passed into custom hook
