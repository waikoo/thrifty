import { Category, Locales } from "@/types/home";
import { FilterCheckbox, FilterColor, FilterCondition, FilterSize } from ".";
import { brandNamesArray } from "../data/brandsData";
import { filter } from "../data";
import Link from "next/link";

type FilterSideProps = {
  lang: Locales
  category: Category['category']
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function FilterSide({ lang, category, searchParams }: FilterSideProps) {

  return (
    <aside className="sticky top-10 flex max-h-[600px] w-[300px] flex-col gap-6">

      <div className="text-[0.813rem] font-normal">
        <span className="underline underline-offset-4">Expand All</span>
        <span> / </span>
        <Link href={`/${lang}/${category}/products`}>
          <span className="underline underline-offset-4">Clear All</span>
        </Link>

      </div>

      <FilterCheckbox
        type={"CATEGORY"}
        elements={filter.category}
      />

      <FilterCheckbox
        type={"SHOP BY"}
        elements={filter.shopBy}
      />

      <FilterCheckbox
        type={"PRODUCT TYPE"}
        elements={filter.productType}
      />

      <FilterSize
        type={"SIZE"}
        sizes={filter.size} />

      <FilterColor
        type={"COLOR"}
        colors={filter.color}
      />

      <FilterCheckbox
        type={"BRAND"}
        elements={brandNamesArray}
        search
      />

      <FilterCondition
        type={"CONDITION"}
        condition={filter.condition}
      />

      <FilterCheckbox
        type={"MATERIAL"}
        elements={filter.material}
      />

      <FilterCheckbox
        type={"DATE ADDED"}
        elements={filter.dateAdded}
      />

      <button className="bg-faded m-auto w-full whitespace-nowrap py-2 text-[0.813rem] font-semibold text-black">
        SAVE FILTER
      </button>

    </aside>
  )
}
