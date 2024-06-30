"use client"
import { FilterCheckbox, FilterColor, FilterCondition, FilterSize, FilterSlider } from "@/app/components/products";
import { brandNamesArray } from "@/app/components/data/brandsData";
import { filter } from "@/app/components/data";
import SetNewFilter from "@/app/components/products/SetNewFilter";
import { Gender, Locales } from "@/types/link";
import Portal from "@/app/components/generic/Portal";
import { useFilterStore } from "@/state/client/filterState";
import { albert_500 } from "@/utils/fonts";

type FilterSideProps = {
  lang: Locales
  gender: Gender
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function FilterSide({ lang, gender, searchParams }: FilterSideProps) {
  const { showNewFilterPopup, setShowNewFilterPopup, hideFilters } = useFilterStore()

  const getType = (searchParams: { [key: string]: string | string[] | undefined }) => {
    const genderArray = searchParams['gender']?.toString().split(',')
    const categoryArray = searchParams['category']?.toString().split(',')

    if (!genderArray) {
      return filter.type.all.all;
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

      categoryArray?.forEach((category) => {

        result.push(...filter.type[gender][category]);
      });
    });

    return [...new Set(result)];
  }

  return (!hideFilters && (
    (

      <aside className="top-24 flex w-[300px] flex-col gap-6 self-start pb-10">

        <button className={`bg-t_mustard rounded-full tracking-wider mx-auto w-full whitespace-nowrap py-2 text-[14px] ${albert_500.className} text-black`}
          onClick={() => setShowNewFilterPopup(true)}
        >
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
          start={0}
          end={500}
        />

        <FilterSlider
          type={"DISCOUNT"}
          start={0}
          end={100}
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

        {showNewFilterPopup && (
          <Portal>
            <SetNewFilter searchParams={searchParams} />
          </Portal>
        )}
      </aside>
    )
  ))
}
