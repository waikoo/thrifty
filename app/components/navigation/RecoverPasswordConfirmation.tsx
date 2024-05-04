import { useUserStore } from "@/state/client/userState"
import WithCloseButton from "./WithCloseButton"
import IconSuccessWithCircle from "./icons/IconSuccessWithCircle"
import { albert, albert_600, albert_900 } from "@/utils/fonts"
import { useUIStore } from "@/state/client/uiState"

export default function RecoverPasswordConfirmation() {
  const { email } = useUserStore()
  const { setShowPasswordConfirmation } = useUIStore()

  return (
    <WithCloseButton onClose={() => setShowPasswordConfirmation(false)}
      className="sm:min-w-[420px] xl:w-auto "
    >
      <div className="mx-auto">
        <IconSuccessWithCircle />
      </div>
      <span className={`${albert_900.className} text-[0.8125rem] text-center tracking-wide mt-8`}>PASSWORD RESET EMAIL SENT</span>
      <p className={`${albert.className} text-[0.8125rem] tracking-wide max-w-[200px] text-center mx-auto mt-10`}>Instructions for resetting your password have been sent to <span className={`${albert_600.className}`}>{email}</span>.</p>

    </WithCloseButton>
  )
}

