import Link from 'next/link'

import { Gender, Locales } from '@/types/link'
import { albert, albert_500, rock_salt } from '@/utils/fonts'
import FilterHomeCard from './FilterHomeCard'

type FilterHomeProps = {
  gender: Gender
  lang: Locales
}

export default function FilterHome({ gender, lang }: FilterHomeProps) {

  return (
    <section className={`relative bg-[url('/images/filters/water.jpg')] py-16 object-cover object-top h-[300vw] sm:h-[80vw] xl:h-[61vw] w-full bg-fixed bg-no-repeat ${rock_salt.className}`}>

      <div className="absolute top-0 left-0 right-0 w-full bg-gradient-to-b from-t_white dark:from-t_black h-[18rem]"></div>
      <div className="flex flex-col sm:flex-row sm:gap-[1rem] sm:w-[90%] sm:mx-auto">

        <FilterHomeCard src={`/images/filters/${gender}1.jpg`} alt={`a ${gender}`} className="gap-[2rem]">
          <p className="text-center">SET YOUR <span className="block">FILTERS</span></p>
          <p className="text-center">SAVE YOUR <span className="block">FILTERS</span></p>
          <p className="text-center">RECEIVE <span className="block">NOTIFICATIONS</span></p>
        </FilterHomeCard>

        <FilterHomeCard src={`/images/filters/${gender}2.jpg`} alt={`a ${gender}`} className="top-[1.3rem] gap-0">
          <p className="text-[1.4375rem] text-center">CUSTOMIZE <span className={`${albert.className} block text-[0.75rem]`}>YOUR SEARCHES</span></p>
          <p className="mt-2 text-[1.4375rem] text-center">SHOP FASTER<span className={`${albert.className} block text-[0.75rem]`}>THAN EVER BEFORE</span></p>

          <Link href={`/${lang}/${gender}/products?gender=${gender}&sort-by=newfirst&page=1`}
            className={`${albert_500.className} py-[0.5rem] px-[1.5rem] bg-t_black text-t_white rounded-full text-[0.8125rem] mt-[8rem] cursor-pointer`}
          >
            GO TO FILTERS
          </Link>
        </FilterHomeCard>

      </div>
    </section>
  )
}

