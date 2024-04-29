import { Gender, Locales } from '@/types/link'
import { ProductItemType } from '@/types/productItem'
import getLinkWithSearchParams from '@/utils/getLinkWithSearchParams'
import { useRouter } from 'next/navigation'

type SearchSuggestionsProps = {
  suggestions: ProductItemType[],
  setShowSuggestions: React.Dispatch<React.SetStateAction<boolean>>
  completedWord: string
  lang: Locales
  gender: Gender
}

export default function SearchSuggestions({ suggestions, setShowSuggestions, completedWord, lang, gender }: SearchSuggestionsProps) {
  const router = useRouter()

  return (
    <div className="w-full absolute bg-t_white dark:bg-t_black top-[5rem] flex flex-col gap-4 p-4">
      {suggestions.map((item) => (
        <div key={item.uuid} onClick={() => {
          setShowSuggestions(false)
          router.push(
            getLinkWithSearchParams(`${item.brand} ${item.type} ${item.gender}`, lang, gender)
          )
        }} className="cursor-pointer">
          <span>{completedWord === item.brand ? '' : completedWord}</span>
          <span>{item.brand}</span>
          <span className="ml-2">{item.type}</span>
          <span className="ml-2">{item.gender}</span>
        </div>
      ))}
    </div>
  )
}

