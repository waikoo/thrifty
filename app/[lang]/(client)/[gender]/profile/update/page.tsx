"use client"
import { SubmitButton } from "@/app/components";
import Input from "@/app/components/generic/Input";
import { supabase } from "@/app/supabase";
import { useUserStore } from "@/state";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const { password, setPassword } = useUserStore()
  const router = useRouter()
  const [email, setEmail] = useState('')

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    const { data, error } = await supabase.auth.updateUser({
      email: email,
      password: password,
      data: { hello: 'world' }
    })
    router.push('/en/women')
  }

  return (
    <form className="flex flex-col gap-3 w-1/4 text-bkg" onSubmit={handleUpdate}>
      <h1 className="text-2xl font-bold text-content">
        Set up a new password
      </h1>
      <Input type="email" value={email} setValue={setEmail} />
      <Input type="password" value={password} setValue={setPassword} />
      <SubmitButton className="block">Sign In</SubmitButton>
    </form>
  )
}
