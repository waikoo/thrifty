"use client"
import { useState } from "react"
import { IconProducts } from "."
import Link from "next/link"
import { usePathname } from "next/navigation"

type ProductsProps = {
}

export default function Products({ }: ProductsProps) {
  const [isHovered, setIsHovered] = useState(false)
  const lang = usePathname().split('/')[1]

  return (
    <div className={`hover:text-bkg hover:bg-content flex whitespace-nowrap self-baseline items-baseline gap-2 cursor-pointer px-2`}
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

