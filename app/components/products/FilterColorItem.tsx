import { albert_500 } from "@/utils/fonts"
import { lowerCaseSpaceToDash } from "@/utils/lowerCaseSpaceToDash"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

type FilterColorItemProps = {
  color: string
  type: string
}

export default function FilterColorItem({ color, type }: FilterColorItemProps) {

  const pathname = usePathname()
  const searchParamos = useSearchParams()
  const router = useRouter()
  const lowercaseColor = color.toLowerCase()

  const handleOnChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const newParams = new URLSearchParams(searchParamos);
    const value = (e.currentTarget as HTMLDivElement).dataset.color!;
    const queryParamCategory = lowerCaseSpaceToDash(type)

    if (!newParams.has(queryParamCategory)) {
      newParams.append(queryParamCategory, value);
    } else {
      const existingValues = newParams.get(queryParamCategory)?.split(',') || [];
      if (existingValues.includes(value)) {
        const newValues = existingValues.filter(val => val !== value);
        newValues.length > 0
          ? newParams.set(queryParamCategory, newValues.join(','))
          : newParams.delete(queryParamCategory);
      } else {
        existingValues.push(value);
        newParams.set(queryParamCategory, existingValues.join(','));
      }
    }

    router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
  }

  const colorClasses: { [key: string]: string } = {
    Beige: 'bg-yellow-100 border-gray-300 border-[0.1rem]',
    Brown: 'bg-orange-700',
    White: 'bg-white border-gray-300 border-[0.1rem]',
    Grey: 'bg-gray-400',
    Blue: 'bg-blue-500',
    Purple: 'bg-purple-400',
    Multicolor: 'bg-gradient-to-b from-[#ff00b8] from-6% via-[#135db5] via-46% to-[#c6ff4d]',
    Pink: 'bg-pink-300',
    Red: 'bg-red-500',
    Green: 'bg-green-500',
    Yellow: 'bg-yellow-300',
    Orange: 'bg-orange-500',
    Gold: 'bg-yellow-400',
    Silver: 'bg-gray-200',
    Black: 'bg-black',
  };

  const colorOnClick =
    searchParamos.get('color') === lowercaseColor || searchParamos.get('color')?.split(',').includes(lowercaseColor)
      ? 'bg-t_mustard'
      : 'bg-t_white'

  return (
    <div className={`flex items-center gap-2 cursor-pointer ${albert_500.className} text-[14px] text-t_black hover:bg-[#e3e3e3] hover:text-t_black focus:bg-t_mustard rounded-full p-[0.35rem] ${colorOnClick}`}
      onClick={handleOnChange}
      data-color={lowercaseColor}
    >
      <div className={`h-8 w-8 rounded-full ${colorClasses[color]}`}></div>
      <span>{color}</span>
    </div >
  )
}
