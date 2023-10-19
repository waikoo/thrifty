"use client"
import { useUIStore } from "@/state";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

type withHomeProps = {
  children: React.ReactNode
}

export default function WithHome({ children }: withHomeProps) {
  const [, locale, category] = usePathname().split('/')
  const anchorRef = useRef<HTMLAnchorElement | null>(null)
  const { setShowCategoryMenu } = useUIStore()

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (e.target === anchorRef.current) {
      setShowCategoryMenu(false)
    }
  }

  return (
    <Link
      href={`/${locale}/${category}`}
      className="flex justify-center"
      ref={anchorRef}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </Link>
  )
}
