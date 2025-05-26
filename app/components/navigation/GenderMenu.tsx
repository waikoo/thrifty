"use client"
import { useEffect, useRef, useState } from "react"

import GenderImage from "@/app/components/navigation/GenderImage"
import GenderMember from "@/app/components/navigation/GenderMember"
import { useGenderStore } from "@/state/client/genderState"
import { Gender, Locales } from "@/types/link"

type GenderMenuProps = {
  lang: Locales
}

export default function GenderMenu({ lang }: GenderMenuProps) {
  const { gender: hoveredGender, setShowGenderMenu } = useGenderStore()
  const divRef = useRef<HTMLDivElement | null>(null)
  const modalRef = useRef<HTMLDivElement | null>(null)
  const [y, setY] = useState(window.scrollY)

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === divRef.current) { // makes popup disappear on the bottom
      setShowGenderMenu(false)
    }
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowGenderMenu(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [setShowGenderMenu])

  useEffect(() => {
    window.addEventListener('scroll', () => setY(window.scrollY))
    const handleOnScroll = () => {
      if (modalRef.current) {
        if (window.scrollY > 0) {
          modalRef.current.style.top = '3.9rem'
        } else if (window.scrollY === 0) {
          modalRef.current.style.top = '7.9rem'
        }
      }
    }
    handleOnScroll() // needs to run once on mount
    window.addEventListener('scroll', handleOnScroll)
  }, [y])

  return (
    <section className="fixed inset-0 top-[7.9rem] bg-black bg-opacity-50 backdrop-blur-sm z-50 mx-auto" ref={modalRef}>
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
              className="col-start-5 col-end-6 row-start-1 w-full"
              href={`/${lang}/${hoveredGender}/products/?gender=${hoveredGender}&shop-by=new+in&sort-by=newfirst&page=1`}
            >
              NEW IN
            </GenderImage>

            <GenderImage
              src={`/images/gender_hover/${hoveredGender}2.jpg`}
              className="col-start-5 col-end-6 row-start-2 w-full"
              href={`/${lang}/${hoveredGender}/products/?gender=${hoveredGender}&shop-by=promos&sort-by=newfirst&page=1`}>
              SALE
            </GenderImage>
          </div>
        </div>
      </div >
    </section>
  )
}
