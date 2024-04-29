import { useEffect } from "react"

import HamburgerGenderItem from "@/app/components/navigation/HamburgerGenderItem"
import { Gender } from "@/types/link"

type HamburgerGenderProps = {
  setSelectedGender: React.Dispatch<React.SetStateAction<Gender | ''>>
  selectedGender: string
  pathnameGender: Gender
}

export default function HamburgerGender({ selectedGender, setSelectedGender, pathnameGender }: HamburgerGenderProps) {
  const genderArr: Gender[] = ['men', 'women', 'kids']

  useEffect(() => {
    setSelectedGender(pathnameGender)
  }, [pathnameGender])

  const selectGender = (e: React.MouseEvent<HTMLDivElement>) => {
    const div = e.currentTarget as HTMLDivElement

    if (div.dataset.gender) {
      setSelectedGender(div.dataset.gender as Gender)
    }
  }

  return (
    <div className="grid grid-cols-3 w-full p-2 justify-items-center mt-2 text-[0.75rem]">

      {genderArr.map(gender => (
        <HamburgerGenderItem
          key={`hamburger-${gender}`}
          selected={selectedGender}
          onClick={selectGender}
          gender={gender}
        />
      ))}

    </div>
  )
}

