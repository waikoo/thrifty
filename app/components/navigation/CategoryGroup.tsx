import Link from "next/link"
import { usePathname } from "next/navigation"

import getLangAndGender from "@/utils/getLangAndGender"
import { buildUrl } from "@/utils/buildUrl"
import { Gender } from "@/types/link"

type CategoryGroupProps = {
  title: string,
  hoveredGender: Gender | null
  items: string[]
  brands?: boolean
}

export default function CategoryGroup({ title, hoveredGender, items, brands }: CategoryGroupProps) {
  const { lang } = getLangAndGender(usePathname())
  const pre = `/${lang}/${hoveredGender}/products?gender=${hoveredGender}`

  return (
    <div>
      <h3 className="text-content text-[1.2rem] font-bold">{title}</h3>
      <ul className="flex cursor-pointer flex-col  gap-4 pt-8">

        {items.map((item: string, i: number) => {
          const url = buildUrl(pre, title, item, brands)

          return (
            <Link href={url} key={`${item}-${i}`}>
              <li>{item}</li>
            </Link>
          );
        })}

      </ul>
      <span className="mt-4 block underline underline-offset-4">{brands && 'See More'}</span>
    </div>
  )
}
