"use client"
import useUserSession from "@/app/components/hooks/useUserSession"
import { albert_500, albert_900 } from "@/utils/fonts"

type ProfileSettings = {
  children: React.ReactNode
  showPopup: (popup: boolean) => void
}

export default function ProfileSettings({ children, showPopup }: ProfileSettings) {
  const { session } = useUserSession()

  return (
    <div className="relative focus:bg-t_mustard min-w-[300px] sm:w-[70%] xl:w-[50%] text-[0.8125rem] sm:text-[1.0625rem] rounded-full px-12 py-5 text-black border-[0.2rem] border-t_mustard hover:bg-t_mustard cursor-pointer"
      onClick={() => showPopup(true)}
    >
      <p className={`${albert_900.className}`}>{children}</p>
      <span className={`${albert_500.className}`}>{children === 'Email' ? session?.user.email : '**********'}</span>

      <span
        className={`absolute bottom-8 right-10 text-[0.8125rem] sm:text-[1rem] ${albert_900.className}`}
      >
        EDIT
      </span>
    </div>
  )
}
