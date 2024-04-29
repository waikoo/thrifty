"use client"
import { useState } from "react";

import { Gender, Locales } from "@/types/link"
import Portal from "../generic/Portal";
import HamburgerDropdownCategory from "./HamburgerDropdownCategory";

type HamburgerDropdownCategoriesProps = {
  selectedGender: Gender | ''
  lang: Locales
  gender: Gender
}

export default function HamburgerDropdownCategories({ selectedGender, lang, gender }: HamburgerDropdownCategoriesProps) {
  const [category, setCategory] = useState('')

  return (
    <>
      <div className="bg-t_mustard flex flex-col gap-3">
        <span className="tracking-wide" onClick={() => setCategory('clothing')}>CLOTHING</span>
        <span className="tracking-wide" onClick={() => setCategory('shoes')}>SHOES</span>
        {selectedGender !== 'kids' && (
          <span className="tracking-wide" onClick={() => setCategory('accessories')}>ACCESSORIES</span>
        )}
        <span className="tracking-wide" onClick={() => setCategory('brands')}>BRANDS</span>
      </div>

      <Portal>
        {category === 'clothing' && (
          <HamburgerDropdownCategory
            category={'clothing'}
            selectedGender={selectedGender}
            gender={gender}
            lang={lang}
            setCategory={setCategory}
          />
        )}

        {category === 'shoes' && (
          <HamburgerDropdownCategory
            category={'shoes'}
            selectedGender={selectedGender}
            gender={gender}
            lang={lang}
            setCategory={setCategory}
          />
        )}

        {selectedGender !== 'kids' && category === 'accessories' && (
          <HamburgerDropdownCategory
            category={'accessories'}
            selectedGender={selectedGender}
            gender={gender}
            lang={lang}
            setCategory={setCategory}
          />
        )}

        {category === 'brands' && (
          <HamburgerDropdownCategory
            category={'brands'}
            selectedGender={selectedGender}
            gender={gender}
            lang={lang}
            setCategory={setCategory}
          />
        )}

      </Portal>
    </>
  )
}

