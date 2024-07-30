import { borderRadius } from '@/app/components/data/universalStyles'
import { useUIStore } from '@/state/client/uiState'
import { albert_600 } from '@/utils/fonts'

export default function CheckoutGuestOrAccount() {
  const { setShowSignIn } = useUIStore()

  return (
    <div className={`bg-white w-[800px] mt-10 p-4 ${borderRadius}`}>
      <div className="mx-auto w-1/2 flex justify-around">
        <label
          htmlFor="guest"
          className="flex gap-2"
        >
          <input
            type="radio"
            name="guestOrAccount"
            id="guest"
            className="checked:bg-black"
            defaultChecked={true}
          />
          <span className={`text-[14px] ${albert_600.className}`}>
            Continue as Guest
          </span>
        </label>

        <label
          htmlFor="account"
          className="flex gap-2"
        >
          <input
            type="radio"
            name="guestOrAccount"
            id="account"
            className="checked:bg-black"
            onClick={() => setShowSignIn(true)}
          />
          <span className={`text-[14px] ${albert_600.className}`}>
            Log In / Create Account
          </span>
        </label>
      </div>
    </div>
  )
}
