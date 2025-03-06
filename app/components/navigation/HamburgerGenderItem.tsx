import { albert_500, albert_700 } from "@/utils/fonts"

type HamburgerGenderItemProps = {
  selected: string
  gender: string
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

export default function HamburgerGenderItem({ selected, gender, onClick }: HamburgerGenderItemProps) {
  const upGender = gender.toUpperCase()

  return (
    <div data-gender={gender} onClick={onClick}>
      {
        selected === gender
          ? <span className={`${albert_700.className} dark:text-t_white text-t_black`}>{upGender}</span>
          : <span className={`${albert_500.className} text-[#616161]`}>{upGender}</span>
      }
    </div>
  )
}

