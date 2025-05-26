import { useRouter } from 'next/navigation'
import Image from 'next/image'

import { Gender, Locales } from '@/types/link'
import { ProductItemType } from '@/types/productItem'
import getLinkWithSearchParams from '@/utils/getLinkWithSearchParams'

type SearchSuggestionsProps = {
  suggestions: ProductItemType[],
  setShowSuggestions: React.Dispatch<React.SetStateAction<boolean>>
  completedWord: string
  lang: Locales
  gender: Gender
}

export default function SearchSuggestions({ suggestions, setShowSuggestions, lang, gender }: SearchSuggestionsProps) {
  const router = useRouter()

  const onSearchSuggestionClick = (item: ProductItemType) => {
    setShowSuggestions(false)

    router.push(
      getLinkWithSearchParams(`${item.brand} ${item.type} ${item.gender}`, lang, gender)
    )
  }

  return (
    <div className="text-t_black top-[4.1rem] xl:top-[5.8rem] fixed bg-t_white dark:bg-t_black flex flex-col gap-4 m-4 z-[60]">
      {suggestions.map((item) => (
        <div key={item.uuid}
          onClick={() => onSearchSuggestionClick(item)}
          className="cursor-pointer flex items-center gap-4 hover:bg-gray-100 p-4">
          <Image src={item.img_url[0]} alt="" width={50} height={50} />

          <div>
            <span className="capitalize">{item.brand}</span>
            <span className="ml-2 capitalize">{item.type}</span>
          </div>

          <div className="ml-auto font-bold">€{item.price}</div>
        </div>
      ))}
    </div>
  )
}

