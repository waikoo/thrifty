import { Category, Locales } from "@/types/home";
import { FilterCheckbox, FilterColor, FilterCondition, FilterSize } from ".";
import { brandNamesArray } from "../data/brandsData";

type FilterSideProps = {
  lang: Locales
  category: Category['category']
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function FilterSide({ lang, category, searchParams }: FilterSideProps) {

  return (
    <aside className="flex w-[300px] flex-col gap-6">

      <div className="text-[0.813rem] font-normal">
        <span className="underline underline-offset-4">Expand All</span>
        <span> / </span>
        <span className="underline underline-offset-4">Clear All</span>
      </div>

      <FilterCheckbox
        type={"CATEGORY"}
        elements={["Men", "Women", "Kids"]}
      />

      <FilterCheckbox
        type={"SHOP BY"}
        elements={["All Products", "New In", "Promos"]}
      />

      <FilterCheckbox
        type={"PRODUCT TYPE"}
        elements={["Coats", "Jackets", "Tops", "T-Shirts", "Sweaters", "Jeans", "Pants"]}
      />
      {/* TODO: object[category] -> access right array */}

      <FilterSize
        type={"SIZE"}
        sizes={["35", "35.5", "36", "36.5", "37", "37.5", "38", "38.5", "39", "39.5", "40", "40.5", "41", "41.5", "42", "42.5", "43", "43.5", "44", "44.5", "46", "XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"]} />

      <FilterColor
        type={"COLOR"}
        colors={["Black", "White", "Beige", "Brown", "Grey", "Blue", "Purple", "Multicolor", "Pink", "Red", "Green", "Yellow", "Orange", "Gold", "Silver"]}
      />

      <FilterCheckbox
        type={"BRAND"}
        elements={brandNamesArray}
        search
      />

      <FilterCondition
        type={"CONDITION"}
        conditions={[5, 4, 3]}
      />

      <FilterCheckbox
        type={"MATERIAL"}
        elements={["Cotton", "Denim", "Wool", "Satin", "Leather", "Synthetic", "Lace"]}
      />

      <FilterCheckbox
        type={"DATE ADDED"}
        elements={["Today", "Last 3 Days", "This Week"]}
      />

      <button className="bg-faded m-auto w-full whitespace-nowrap py-2 text-[0.813rem] font-semibold text-black">
        SAVE FILTER
      </button>

    </aside>
  )
}
