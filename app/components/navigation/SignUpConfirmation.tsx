import { useUIStore } from "@/state/client/uiState"
import IconOpenMail from "./icons/IconOpenMail"
import { albert, albert_600, albert_900 } from "@/utils/fonts"
import { useUserStore } from "@/state/client/userState"
import WithCloseButton from "./WithCloseButton"


export default function SignUpConfirmation() {
  const { showSignUpConfirmation, setShowSignUpConfirmation } = useUIStore()
  const { email } = useUserStore()

  return (
    <WithCloseButton onClose={() => setShowSignUpConfirmation(false)}
      className="sm:min-w-[420px] xl:w-auto "
    >
      <div className="mx-auto">
        <IconOpenMail />
      </div>

      <span className={`${albert_900.className} text-[1.0625rem] sm:text-[1.3125rem] xl:text-[1.125rem] text-center tracking-wide mt-8`}>PLEASE VERIFY YOUR EMAIL</span>
      <p className={`${albert.className} text-[0.8125rem] tracking-wide max-w-[200px] text-center mx-auto mt-10`}>You're almost there! We have sent an email to <span className={`${albert_600.className}`}>{email}</span>. Just click the link in the email to activate your account.</p>


    </WithCloseButton>
  )
}

