"use client"
import { useRef } from "react"

import GenderImage from "@/app/components/navigation/GenderImage"
import women_01 from "@/public/nav/women_01.jpg"
import women_02 from "@/public/nav/women_02.jpg"
import GenderMember from "@/app/components/navigation/GenderMember"
import { useGenderStore } from "@/state/client/genderState"

export default function GenderMenu() {
  const { gender: hoveredGender, setShowGenderMenu } = useGenderStore()
  const divRef = useRef<HTMLDivElement | null>(null)

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === divRef.current) { // makes popup disappear on the bottom
      setShowGenderMenu(false)
    }
  }

  return (
    <section className="absolute inset-0 top-10 h-screen bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="border-darkgrey absolute inset-x-0 left-[-15rem] z-50 w-screen border-t-[0.05rem]"></div>
      <div
        className="bg-bkg min-w-screen absolute inset-x-0 z-40 mx-auto flex gap-32 overflow-y-hidden px-12 py-12"
        onMouseLeave={(e) => handleMouseLeave(e as React.MouseEvent<HTMLDivElement, MouseEvent>)}
        onMouseEnter={() => setShowGenderMenu(true)}
        ref={divRef}
      >

        {hoveredGender && <GenderMember hoveredGender={hoveredGender} />}

        <div className="my-auto flex flex-col gap-10">
          <GenderImage img={women_01}>NEW IN</GenderImage>
          <GenderImage img={women_02}>PROMOS</GenderImage>
        </div>
      </div >
    </section>
  )
}