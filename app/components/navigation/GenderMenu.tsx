"use client"
import { useRef } from "react"

import GenderImage from "@/app/components/navigation/GenderImage"
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
    <section className="fixed inset-0 top-[7.9rem] bg-black bg-opacity-50 backdrop-blur-sm z-50 mx-auto">
      <div className="border-darkgrey inset-x-0 left-[-15rem] z-50 w-screen border-t-[0.05rem]"></div>
      <div
        className={`bg-t_white dark:bg-t_black max-w-screen inset-x-0 z-40 mx-auto overflow-y-hidden px-12 py-12 w-full`}
        onMouseLeave={(e) => handleMouseLeave(e as React.MouseEvent<HTMLDivElement, MouseEvent>)}
        onMouseEnter={() => setShowGenderMenu(true)}
        ref={divRef}
      >

        <div className="grid justify-content-center grid-cols-[auto_auto_auto_250px_330px] max-w-[1200px] mx-auto">
          {hoveredGender && <GenderMember hoveredGender={hoveredGender} />}

          <div className="my-auto flex flex-col gap-10 col-start-5 col-end-6 self-start">
            <GenderImage
              src={`/images/gender_hover/${hoveredGender}1.jpg`}
              className="col-start-5 col-end-6 row-start-1 w-full">
              NEW IN
            </GenderImage>

            <GenderImage
              src={`/images/gender_hover/${hoveredGender}2.jpg`}
              className="col-start-5 col-end-6 row-start-2 w-full">
              SALE
            </GenderImage>
          </div>
        </div>
      </div >
    </section>
  )
}
