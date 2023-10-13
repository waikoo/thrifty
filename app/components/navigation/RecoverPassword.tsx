"use client"
import { supabase } from "@/app/supabase";
import { useUIStore } from "@/state/uiState";
import { SubmitButton } from "../generic";
import Input from "../generic/Input";
import { useUserEmail } from "../hooks";

export default function RecoverPassword() {
  const { email, setEmail } = useUserEmail()
  const { setShowRecovery, setShowSignIn } = useUIStore()

  const handleRecoverPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    let { data, error }: { data: any, error: any } = await supabase.auth.resetPasswordForEmail(email)
    if (Object.keys(data).length > 0) {
      console.log('Password reset email sent!')
    } else if (error !== null) {
      console.log('Something went wrong')
    }

    setShowRecovery(false)
    setShowSignIn(false)
  }

  return (
    <form className="grid gap-5" onSubmit={handleRecoverPassword}>

      <h2 className="text-content text-center font-normal text-2xl">
        Recover Password
      </h2>

      <Input type="email" value={email} setValue={setEmail} />

      <SubmitButton >Send</SubmitButton>

    </form>
  )
}
