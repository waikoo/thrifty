import Link from 'next/link'

import { albert_500, albert_900 } from '@/utils/fonts'
import { Gender, Locales } from '@/types/link'
import { useNavigationStore } from '@/state/client/navigationState'

type HamburgerAccountAndHelpProps = {
  lang: Locales
  gender: Gender
}

export default function HamburgerAccountAndHelp({ lang, gender }: HamburgerAccountAndHelpProps) {
  const { setShowHamburgerMenu } = useNavigationStore()

  const hideHamburger = () => {
    setShowHamburgerMenu(false)
  }

  return (
    <div className="bg-t_white flex flex-col gap-6 p-6 pl-[2.8rem]">
      <div className="grid gap-3">
        <span className={`block ${albert_900.className} text-[0.75rem] tracking-wider`}>ACCOUNT</span>
        <div className={`*:text-[0.8125rem] grid gap-3 *:${albert_500.className}`}>
          <Link onClick={hideHamburger} href={`/${lang}/${gender}/profile`}>Profile</Link>
          <Link onClick={hideHamburger} href={`/${lang}/${gender}/orders`}>Orders</Link>
          <Link onClick={hideHamburger} href={`/${lang}/${gender}/returns`}>Returns</Link>
          <Link onClick={hideHamburger} href={`/${lang}/${gender}/settings`}>Settings</Link>
        </div>
      </div>

      <div className="grid gap-3">
        <span className={`block ${albert_900.className} text-[0.75rem] tracking-wider`}>HELP</span>
        <div className={`*:text-[0.8125rem] grid gap-3 *:${albert_500.className}`}>
          <Link onClick={hideHamburger} href={`/${lang}/${gender}/help?section=0`}>About Us</Link>
          <Link onClick={hideHamburger} href={`/${lang}/${gender}/help?section=1`}>Delivery & Returns</Link>
          <Link onClick={hideHamburger} href={`/${lang}/${gender}/help?section=4`}>Contact</Link>
        </div>
      </div>
    </div>
  )
}

