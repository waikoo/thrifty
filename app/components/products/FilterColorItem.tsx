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
    Beige: 'bg-beige',
    Brown: 'bg-brown',
    White: 'bg-white',
    Grey: 'bg-grey',
    Blue: 'bg-blue',
    Purple: 'bg-purple',
    Multicolor: 'bg-multicolor',
    Pink: 'bg-pink',
    Red: 'bg-red',
    Green: 'bg-green',
    Yellow: 'bg-yellow',
    Orange: 'bg-orange',
    Gold: 'bg-gold',
    Silver: 'bg-silver',
    Black: 'bg-black',
  };

  return (
    <div className={`flex items-center gap-2 cursor-pointer`}
      onClick={handleOnChange}
      data-color={color.toLowerCase()}
    >
      {color === 'Multicolor' ? (
        <div className="flex h-8 w-9 flex-wrap gap-0">
          {Array(9).fill(' ').map((_, i) => {
            const colors = Object.values(colorClasses)
            const randomColor = colors[Math.floor(Math.random() * colors.length)]
            return (
              <div
                key={`multicolor-${i}`}
                className={`h-2 w-2 ${randomColor}`}
              ></div>
            )
          })}
        </div>
      ) : (
        <div className={`h-8 w-8 ${colorClasses[color]}`}></div>
      )}
      <span>{color}</span>
    </div >
  )
}
