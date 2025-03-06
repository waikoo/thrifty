import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

import { MdKeyboardArrowLeft } from "react-icons/md";

import { filter } from "../data/filterArrays"
import { albert, albert_500 } from "@/utils/fonts";
import { Gender, Locales } from "@/types/link";
import { brandNamesArray } from '@/app/components/data/brandsData'
import { useNavigationStore } from "@/state/client/navigationState";

type HamburgerDropdownCategoryProps = {
  category: 'clothing' | 'shoes' | 'accessories' | 'brands'
  selectedGender: Gender | ''
  gender: Gender
  lang: Locales
  setCategory: React.Dispatch<React.SetStateAction<string>>
}

export default function HamburgerDropdownCategory({ category, selectedGender, gender, lang, setCategory }: HamburgerDropdownCategoryProps) {

  const { setShowHamburgerMenu } = useNavigationStore()

  const hideHamburger = () => {
    setShowHamburgerMenu(false)
  }

  return (
    <section className="absolute z-[999] w-[80%]">

      <div className="grid grid-cols-[auto_1fr_auto] items-center bg-t_mustard py-3 px-2">
        <div onClick={() => setCategory('')}>
          <MdKeyboardArrowLeft className="dark:text-t_black" />
        </div>
        <span className={`text-center text-[0.875rem] sm:text-[1.125rem] text:t_black dark:text-t_black ${albert.className}`}>{category.toUpperCase()}</span>
        <div className="justify-self-end"> <RxCross2 className="dark:text-t_black" /> </div>
      </div>

      <div className="flex flex-col gap-4 bg-t_white dark:bg-t_black min-h-screen px-8 py-6"
        onClick={hideHamburger}>
        {category !== 'brands' && filter.type[selectedGender][category].map((item, index) => {
          const link = `/${lang}/${gender}/products?gender=${gender}&category=${category}&type=${item.toLowerCase()}&shop-by=new+in&sort-by=newfirst&page=1`

          return (
            <Link
              href={link}
              key={index}
              className={`${albert_500.className} tracking-wider text-[0.8125rem] sm:text-[1.0625rem] text-t_black dark:text-t_white`}
            >
              {item}
            </Link>
          )
        })}

        {category === 'brands' && brandNamesArray.map((brand, index) => (
          <Link href={`/${lang}/${gender}/products?gender=${gender}&brand=${brand.toLowerCase()}&shop-by=new+in&sort-by=newfirst&page=1`}
            key={index}
            className={`${albert_500.className} tracking-wider text-[0.8125rem]`}
          >
            {brand}
          </Link>

        ))}
      </div>
    </section>
  )
}

