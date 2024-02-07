"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge as tm } from "tailwind-merge"

type withHomeProps = {
  children: React.ReactNode
  className?: string
}

export default function WithHome({ className, children }: withHomeProps) {
  let [, locale, category] = usePathname().split('/')
  category = !['men', 'women', 'kids'].includes(category) ? 'women' : category

  return (
    <Link
      href={`/${locale}/${category}`}
      className={tm(`flex justify-center ${className}`)}
    >
      {children}
    </Link>
  )
}
