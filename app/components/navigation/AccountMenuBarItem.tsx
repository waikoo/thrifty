"use client"
import Link from 'next/link'

import getLangAndGender from '@/utils/getLangAndGender'
import { usePathname } from 'next/navigation'

type AccountMenuBarItemProps = {
  children: React.ReactNode
  Icon: React.FC
}

export default function AccountMenuBarItem({ children, Icon }: AccountMenuBarItemProps) {
  const { lang, gender } = getLangAndGender(usePathname())
  const lowercaseChildren = children!.toString().toLowerCase()

  return (
    <div className="flex items-center gap-2">
      <Icon />
      <Link
        href={`/${lang}/${gender}/${lowercaseChildren}`}
        className="">
        {children}
      </Link>
    </div>
  )
}
