import Link from 'next/link'

import { albert, albert_800 } from '@/utils/fonts'
import { Gender, Locales } from '@/types/link'
import { useNavigationStore } from '@/state/client/navigationState'
import { supabase } from '@/app/supabase'
import { useRouter } from 'next/navigation'
import { useUIStore } from '@/state/client/uiState'

type HamburgerAccountAndHelpProps = {
  lang: Locales
  gender: Gender
}

export default function HamburgerAccountAndHelp({ lang, gender }: HamburgerAccountAndHelpProps) {
  const { setShowHamburgerMenu } = useNavigationStore()
  const router = useRouter()
  const { showSignIn, setShowSignIn } = useUIStore()

  const hideHamburger = async (e: React.MouseEvent) => {
    e.preventDefault()

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      setShowSignIn(true)
    } else {
      const target = e.target as HTMLAnchorElement
      const targetText = target.textContent!.toLowerCase()
      router.push(`/${lang}/${gender}/${targetText}`)
    }
    setShowHamburgerMenu(false)
  }

  return (
    <div className="bg-t_white dark:bg-t_black dark:text-t_white flex flex-col gap-6 p-6 pl-[2.8rem]">
      <div className="grid gap-3">
        <span className={`block ${albert_800.className} text-[15px] sm:text-[1rem] tracking-wider`}>ACCOUNT</span>
        <div className={`*:text-[15px] sm:*:text-[17px] grid gap-3 ${albert.className}`}>
          <a onClick={(e) => hideHamburger(e)}>Profile</a>
          <a onClick={(e) => hideHamburger(e)}>Orders</a>
          <a onClick={(e) => hideHamburger(e)}>Returns</a>
          <a onClick={(e) => hideHamburger(e)}>Settings</a>
        </div>
      </div>

      <div className="grid gap-3">
        <span className={`block ${albert_800.className} text-[15px] sm:text-[1rem] tracking-wider`}>HELP</span>
        <div className={`*:text-[15px] sm:*:text-[1.0625rem] grid gap-3 ${albert.className}`}>
          <Link onClick={hideHamburger} href={`/${lang}/${gender}/help?section=0`}>About Us</Link>
          <Link onClick={hideHamburger} href={`/${lang}/${gender}/help?section=1`}>Delivery & Returns</Link>
          <Link onClick={hideHamburger} href={`/${lang}/${gender}/help?section=3`}>Contact</Link>
        </div>
      </div>
    </div>
  )
}

