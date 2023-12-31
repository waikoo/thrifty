"use client"
import { useUIStore } from "@/state/uiState";
import { handleRecoverPassword } from "@/utils/supabase";
import { useRouter } from "next/navigation";
import { Input, SubmitButton } from "../generic";
import { useUserEmail } from "../hooks";

export default function RecoverPassword() {
  const { email, setEmail } = useUserEmail()
  const { setShowRecovery, setShowSignIn } = useUIStore()
  const router = useRouter()

  return (
    <form
      className="grid gap-5"
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault()
        handleRecoverPassword(e, email, setShowRecovery, setShowSignIn)
        // TODO: We've sent you the recovery link -> settimeout
        setShowRecovery(false)
        // router.push('/en/women');
      }}>

      <h2 className="text-content text-center font-normal text-2xl">
        Recover Password
      </h2>

      <Input type="email" value={email} setValue={setEmail} />

      <SubmitButton >Send</SubmitButton>

    </form >
  )
}
