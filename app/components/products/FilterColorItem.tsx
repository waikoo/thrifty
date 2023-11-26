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

    router.push(`${pathname}?${newParams.toString()}`);
  }

  const colorClasses: { [key: string]: string } = {
    beige: 'bg-beige',
    brown: 'bg-brown',
    white: 'bg-white',
    grey: 'bg-grey',
    blue: 'bg-blue',
    purple: 'bg-purple',
    multicolor: 'bg-multicolor',
    pink: 'bg-pink',
    red: 'bg-red',
    green: 'bg-green',
    yellow: 'bg-yellow',
    orange: 'bg-orange',
    gold: 'bg-gold',
    silver: 'bg-silver',
    black: 'bg-black',
  };

  const bgColorFor = (item: string): string => {
    return colorClasses[item.toLowerCase()] || '';
  };

  return (
    <div className={`flex items-center gap-2 cursor-pointer`}
      onClick={handleOnChange}
      data-color={color.toLowerCase()}
    >
      <div className={`h-8 w-8 ${bgColorFor(color)}`}></div>
      <span>{color}</span>
    </div >
  )
}
