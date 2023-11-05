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
    <Link href={`/${lang}/admin/manage`}>
      <div className={`flex  items-center gap-3 cursor-pointer hover:text-bkg hover:bg-content p-1`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <IconPlus isHovered={isHovered} />
        <span className={`self-center`}>ADD NEW</span>
      </div>
    </Link>
  )
}
