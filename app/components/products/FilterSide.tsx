import { Category, Locales } from "@/types/home";
import { FilterCheckbox, FilterColor, FilterCondition, FilterSize, FilterSlider } from ".";
import { brandNamesArray } from "../data/brandsData";
import { filter } from "../data";
import { ProductItemType } from "@/types/productItem";

type FilterSideProps = {
  lang: Locales
  gender: Category['category']
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function FilterSide({ lang, gender, searchParams }: FilterSideProps) {
  const getType = (searchParams: { [key: string]: string | string[] | undefined }) => {
    const sp = new URLSearchParams(searchParams);
    let genderArray = sp.getAll('gender')[0]?.split(',')
    let categoryArray = sp.getAll('category')[0]?.split(',')

    if (!genderArray) {
      return filter.type.all;
    }

    if (!categoryArray || categoryArray.length === 0) {
      if (genderArray[0] === 'men') { return filter.type.men.all; }
      if (genderArray[0] === 'women') { return filter.type.women.all; }
      if (genderArray[0] === 'kids') { return filter.type.kids.all; }

      if (genderArray.includes('men') && genderArray.includes('women')) {
        return [...new Set([...filter.type.men.all, ...filter.type.women.all])];
      }
      if (genderArray.includes('men') && genderArray.includes('kids')) {
        return [...new Set([...filter.type.men.all, ...filter.type.kids.all])];
      }
      if (genderArray.includes('women') && genderArray.includes('kids')) {
        return [...new Set([...filter.type.women.all, ...filter.type.kids.all])];
      }
    }

    let result: string[] = [];
    genderArray.forEach((gender) => {
      categoryArray.forEach((category) => {
        if (filter.type[gender][category]) {
          result.push(...filter.type[gender][category]);
        }
      });
    });

    return [...new Set(result)];
  }

  return (
    <aside className="sticky flex w-[300px] flex-col gap-6">

      <button className="bg-faded mx-auto w-full whitespace-nowrap py-2 text-[0.813rem] font-semibold text-black">
        SAVE FILTER
      </button>

      <FilterCheckbox
        type={"GENDER"}
        elements={filter.gender}
      />

      <FilterCheckbox
        type={"SHOP BY"}
        elements={filter.shopBy}
      />

      <FilterCheckbox
        type={"CATEGORY"}
        elements={filter.category}
      />

      <FilterCheckbox
        type={"TYPE"}
        elements={getType(searchParams)}
      />

      <FilterSlider
        type={"PRICE"}
      />

      <FilterSlider
        type={"DISCOUNT"}
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

    </aside>
  )
}
