import { useEffect } from "react"

import HamburgerGenderItem from "@/app/components/navigation/HamburgerGenderItem"
import { Gender } from "@/types/link"

type HamburgerGenderProps = {
  setSelectedGender: React.Dispatch<React.SetStateAction<string>>
  selectedGender: string
  gender: Gender
}

export default function HamburgerGender({ selectedGender, setSelectedGender, gender }: HamburgerGenderProps) {
  const genderArr = ['men', 'women', 'kids']

  useEffect(() => {
    setSelectedGender(gender)
  }, [gender])

  const selectGender = (e: React.MouseEvent<HTMLDivElement>) => {
    const div = e.currentTarget as HTMLDivElement

    if (div.dataset.gender) {
      setSelectedGender(div.dataset.gender)
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

