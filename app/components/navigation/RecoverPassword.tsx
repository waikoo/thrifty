"use client"
import { useUIStore } from "@/state/uiState";
import { handleRecoverPassword } from "@/utils/supabase";
import { SubmitButton, Input } from "../generic";
import { useUserEmail } from "../hooks";

export default function RecoverPassword() {
  const { email, setEmail } = useUserEmail()
  const { setShowRecovery, setShowSignIn } = useUIStore()

  return (
    <form
      className="grid gap-5"
      onSubmit={(e: React.FormEvent) =>
        handleRecoverPassword({ e, email, setShowRecovery, setShowSignIn })}>

      <h2 className="text-content text-center font-normal text-2xl">
        Recover Password
      </h2>

      <Input type="email" value={email} setValue={setEmail} />

      <SubmitButton >Send</SubmitButton>

    </form>
  )
}
