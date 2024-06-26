"use client"
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

import getLangAndGender from '@/utils/getLangAndGender'
import { albert_600, albert_900 } from '@/utils/fonts'

type AccountMenuBarItemProps = {
  children: React.ReactNode
}

export default function AccountMenuBarItem({ children }: AccountMenuBarItemProps) {
  const pathname = usePathname()
  const { lang, gender } = getLangAndGender(pathname)
  const lowercaseChildren = children!.toString().toLowerCase()
  const endpoint = pathname.split('/')[3]
  const selectedStyles = endpoint === lowercaseChildren ? `bg-t_black text-t_white ${albert_900.className}` : ''
  const [isHovered, setIsHovered] = useState(false)
  const hoveredStyles = isHovered ? `${albert_900.className}` : ''

  return (
    <div className="flex items-center gap-2">
      <Link
        href={`/${lang}/${gender}/${lowercaseChildren}`}
        className={`p-3 px-5 text-[0.8125rem] sm:text-[1rem] xl:text-[0.875rem] ${albert_600.className} ${selectedStyles} ${hoveredStyles}`}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        {children}
      </Link>
    </div>
  )
}
