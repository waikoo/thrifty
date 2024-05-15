import { useState } from "react"
import { useRouter } from "next/navigation"

import { supabase } from "@/app/supabase"
import { albert_500, albert_900 } from "@/utils/fonts"
import WithCloseButton from "@/app/components/navigation/WithCloseButton"

type AccountDeletionPopupProps = {
  setShowAccountDeletionPopup: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AccountDeletionPopup({ setShowAccountDeletionPopup }: AccountDeletionPopupProps) {
  const [isChecked, setIsChecked] = useState(false)
  const router = useRouter()


  async function handleDeleteAccount(): Promise<void> {
    const getUserId = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      return user?.id
    }

    const id = await getUserId()
  }

  return (
    <WithCloseButton onClose={() => setShowAccountDeletionPopup(false)}>
      <div className="flex flex-col gap-12">

        <span className={`text-[1.0625rem] text-t_black dark:text-t_white ${albert_900.className} text-center`}>WE'RE SORRY TO SEE YOU GO</span>

        <div className="flex flex-col gap-8">
          <p className={`text-center text-[0.8125rem] max-w-[300px] ${albert_500.className}`}>Please note that this action will permanently remove access to your saved filters, favorites, and other history. This cannot be undone. Are you sure you want to proceed?</p>

          <label className="flex gap-2">
            <input type="checkbox" onChange={() => setIsChecked(!isChecked)} checked={isChecked} />
            Yes, I want to delete my account
          </label>
        </div>

        <button className="bg-t_black text-t_white py-3 w-full rounded-full"
          onClick={handleDeleteAccount}
        >
          CONFIRM DELETE
        </button>

      </div>
    </WithCloseButton>
  )
}

