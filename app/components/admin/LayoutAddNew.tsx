"use client"
import Link from "next/link"
import { IconPlus } from "."
import { useState } from "react"

type LayoutAddNewParams = {
  params?: { [key: string]: string | string[] | undefined }
}

export default function LayoutAddNew({ params }: LayoutAddNewParams) {
  const lang = params?.lang
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={`/${lang}/admin/manage`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="text-content bg-bkg hover:text-bkg hover:bg-content grid w-20 cursor-pointer grid-cols-[auto_auto] items-baseline justify-start gap-2 self-baseline"
    >
      <IconPlus
        isHovered={isHovered}
      />
      <span className="hover:bg-content w-16 self-baseline whitespace-nowrap text-[0.80rem]">ADD NEW</span>
    </Link>
  )
}
