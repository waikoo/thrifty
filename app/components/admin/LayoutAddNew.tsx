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
      <div className={`w-[18%]`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        <div className="hover:text-bkg hover:bg-content flex cursor-pointer items-center gap-3 p-1">
          <IconPlus isHovered={isHovered} />
          <span className={`self-center text-[0.80rem]`}>ADD NEW</span>
        </div>
      </div>
    </Link>
  )
}
