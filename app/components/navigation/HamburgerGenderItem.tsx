import { albert_900 } from "@/utils/fonts"

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
        selected === upGender
          ? <span className={`${albert_900.className}`}>{upGender}</span>
          : <span>{upGender}</span>
      }
    </div>
  )
}

