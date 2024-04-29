import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

import getLangAndGender from "@/utils/getLangAndGender"
import HamburgerGenderItem from "@/app/components/navigation/HamburgerGenderItem"

type HamburgerGenderProps = {
  setSelectedGender: React.Dispatch<React.SetStateAction<string>>
  selectedGender: string
}

export default function HamburgerGender({ selectedGender, setSelectedGender }: HamburgerGenderProps) {
  const { gender } = getLangAndGender(usePathname())
  const genderArr = ['men', 'women', 'kids']

  useEffect(() => {
    setSelectedGender(gender.toUpperCase())
  }, [gender])

  const selectGender = (e: React.MouseEvent<HTMLDivElement>) => {
    const div = e.currentTarget as HTMLDivElement

    if (div.dataset.gender) {
      setSelectedGender(div.dataset.gender.toUpperCase())
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

