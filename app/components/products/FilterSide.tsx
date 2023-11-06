import { Category } from "@/types/home";
import { FilterCheckbox, FilterColor, FilterSize } from ".";

type FilterSideProps = {
  category: Category['category']
}

export default function FilterSide({ category }: FilterSideProps) {

  return (
    <aside className="flex w-[350px] flex-col gap-3 border-[2px]">

      <div>
        <span>Expand All</span>
        <span> / </span>
        <span>Clear All</span>
      </div>

      <FilterCheckbox
        type={"GENDER"}
        elements={["Men", "Women", "Boys", "Girls"]}
        category={category} />

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
        type={"MATERIAL"}
        elements={["Cotton", "Denim", "Wool", "Satin", "Leather", "Synthetic", "Lace"]}
      />

      <FilterCheckbox
        type={"DATE ADDED"}
        elements={["Today", "Last 3 Days", "This Week"]}
      />

    </aside>
  )
}
