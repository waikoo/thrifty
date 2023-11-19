"use client"
import { usePathname } from "next/navigation"
import FilterTitle from "./FilterTitle"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { Category, Locales } from "@/types/home"
import { useFilterTitleStore } from "@/state/uiState"

type FilterConditionProps = {
  type: string
  condition: number[]
}

export default function FilterCondition({ type, condition }: FilterConditionProps) {
  const isExpanded = useFilterTitleStore((state) => state.expandedComponents.includes(type))

  const pathname = usePathname()
  const lang = pathname.split('/')[1] as Locales
  const category = pathname.split('/')[2] as Category['category']

  const renderStars = (rating: number) => {
    const starRow = []
    for (let i = 0; i < condition[0]; i++) {
      starRow.push(
        i < rating
          ? <AiFillStar key={`fill-${i}`} />
          : <AiOutlineStar key={`outline-${i}`} />
      )
    }
    return starRow
  }

  return (
    <div>
      <FilterTitle
        type={type}
        lang={lang}
        category={category}
      />

      {isExpanded && (
        <div className="px-8">
          {condition.map((con, i) => {
            return (
              <div key={`div-${i}`} className={"flex"}>
                {...renderStars(con)}
              </div>
            )
          })}
        </div>
      )}

    </div>
  )
}
