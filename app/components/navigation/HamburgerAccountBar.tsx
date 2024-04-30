import { useEffect, useState } from "react";

import { RxCross2 } from "react-icons/rx";

import { supabase } from "@/app/supabase";

import { albert_600 } from "@/utils/fonts";
import { useNavigationStore } from "@/state/client/navigationState";
import IconAccount from "@/app/components/navigation/icons/IconAccount";
import { getLocalPartOfEmail } from "@/utils/navigation";

export default function HamburgerAccountBar() {
  const { setShowHamburgerMenu } = useNavigationStore()
  const [text, setText] = useState('')

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      return user
    }

    getUser().then(user => {
      if (user && user.email) {
        setText(getLocalPartOfEmail(user.email))
        return
      }
      setText('Sign In')
    })

  }, [])

  return (
    <div className="grid grid-cols-2 w-full text-t_black dark:text-t_white">
      <div className="flex gap-2 items-center">
        <IconAccount width="15px" />
        <span className={`${albert_600.className} text-[0.75rem] sm:text-[1rem]`}>Hi, {text}!</span>
      </div>
      <div
        onClick={() => setShowHamburgerMenu(false)}
        className="justify-self-end" >
        <RxCross2 />
      </div>
    </div>
  )
}

