"use client"
import { useState } from "react"
import Link from "next/link"

import { IconPlus } from "@/app/components/admin"

type LayoutAddNewParams = {
  params?: { [key: string]: string | string[] | undefined }
}

export default function LayoutAddNew({ params }: LayoutAddNewParams) {
  const lang = params?.lang
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="hover:text-t_admin_black hover:bg-white text-[#e3e3e3] flex w-21 cursor-pointer items-baseline justify-start gap-2 self-baseline px-2"
    >
      <IconPlus isHovered={isHovered} />

      <Link href={`/${lang}/admin/manage`} >
        <span className="w-16 self-baseline whitespace-nowrap text-[0.80rem]">
          ADD NEW
        </span>
      </Link>

    </div>
  )
}
