"use client"
import { useState } from "react"
import { IconProducts } from "."
import Link from "next/link"

type ProductsProps = {
  params: { [key: string]: string | string[] | undefined }
}

export default function Products({ params }: ProductsProps) {
  const [isHovered, setIsHovered] = useState(false)
  const lang = params.lang

  return (
    <div className={`hover:text-t_admin_black hover:bg-white flex whitespace-nowrap self-baseline items-baseline gap-2 cursor-pointer px-2`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <IconProducts isHovered={isHovered} />

      <Link href={`/${lang}/admin/products`}>
        <span className={"self-baseline text-[0.80rem]"}>PRODUCTS</span>
      </Link>
    </div >
  )
}

