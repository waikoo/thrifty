"use client"
import { useRef } from "react";

import { useProductStore } from "@/state/admin/uploadNewProductToDb";

type AddOptionPopUpProps = {
  name: string
  handleAddItem?: (value: string) => void
}

export default function AddOptionPopUp({ name, handleAddItem }: AddOptionPopUpProps) {
  const inputRef = useRef<null | HTMLInputElement>(null)
  const { addMaterial, showAddMaterial, addBrand, showAddBrand } = useProductStore()
  const outerDiv = useRef<null | HTMLDivElement>(null)
  const buttonRef = useRef<null | HTMLButtonElement>(null)
  const xDiv = useRef<null | HTMLDivElement>(null)

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.localName === 'div') {
      closePopup(e)
    }
  }

  const closePopup = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    if ([outerDiv.current, buttonRef.current, xDiv.current].some(el => el === e.currentTarget)) {
      if (name === 'BRAND') {
        showAddBrand(!addBrand)
      } else if (name === 'MATERIAL') {
        showAddMaterial(!addMaterial)
      }
    }
  }

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    inputRef.current?.value && handleAddItem!(inputRef.current.value);
    inputRef.current!.value = ''

    closePopup(e)
  }

  return (
    <div
      className="text-bkg absolute inset-0 z-[60] grid h-screen w-screen place-items-center bg-[rgba(0,0,0,0.1)] shadow"
    >
      <div className="bg-content text-bkg w-min-content flex flex-col items-center justify-center p-3"
      >

        <div className="w-full text-right" onClick={onClickHandler} ref={xDiv}>
          <span className="cursor-pointer">X</span>
        </div>

        <label htmlFor="add-option" className="text-bold grid place-items-center gap-6">
          Add new {name.toLowerCase()}:
        </label>
        <input ref={inputRef} type="text" className="text-content border-bkg w-[80%] border-[0.1rem] p-[0.5rem]" name="add-option" id="add-option" />

        <button
          onClick={onClick}
          className="text-content bg-bkg mt-6 block px-10 py-3"
          ref={buttonRef}
        >
          SAVE
        </button>
      </div>
    </div>
  )
}
