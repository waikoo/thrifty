"use client"
import { useRouter } from "next/navigation";

import { useUIStore } from "@/state/client/uiState";
import { handleRecoverPassword } from "@/db/handleRecoverPassword";
import { Input, SubmitButton } from "@/app/components/generic";
import { useUserStore } from "@/state/client/userState";

export default function RecoverPassword() {
  const { email, setEmail } = useUserStore()
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
