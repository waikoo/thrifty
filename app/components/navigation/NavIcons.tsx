"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { IconAccount, IconFavorite, IconShoppingBag } from '@/app/components/navigation/icons/'

type NavIconsProps = {
  className?: string
}

export default function NavIcons({ className }: NavIconsProps) {
  const pathname = usePathname().split('/')
  const [lang, gender] = [pathname[1], pathname[2]]

  return (
    <nav className={`flex items-center gap-6 pt-2 ${className}`}>
      <IconAccount />
      <Link href={`/${lang}/${gender}/favorites`}>
        <IconFavorite />
      </Link>
      <Link href={`/${lang}/${gender}/cart`}>
        <IconShoppingBag hideCartNumber={true} />
      </Link>
    </nav>
  )
}
