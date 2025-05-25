"use client"
import { useRef } from "react";

import { useProductStore } from "@/state/admin/uploadNewProductToDb";
import { addItemToName } from "@/actions/actions";

type AddOptionPopUpProps = {
  name: string
}

export default function AddOptionPopUp({ name }: AddOptionPopUpProps) {
  const inputRef = useRef<null | HTMLInputElement>(null)
  const { addMaterial, showAddMaterial, addBrand, showAddBrand } = useProductStore()

  const closePopupWithX = () => {
    closePopup()
  }

  const closePopup = () => {
    if (name === 'BRAND') {
      showAddBrand(!addBrand)
    } else if (name === 'MATERIAL') {
      showAddMaterial(!addMaterial)
    }
  }

  const addItem = async () => {
    if (inputRef.current) {
      try {
        console.log(inputRef.current.value)
        await addItemToName(name, inputRef.current.value)
      } catch (err) {
        console.log(err)
        alert('Something went wrong')
      } finally {
        inputRef.current.value = ''
      }
    }
  }

  const submitNewItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addItem()
    closePopup()
  }

  function onKeyDownHandler(e: React.KeyboardEvent): void {
    if (e.key === 'Enter') {
      addItem()
      closePopup()
    }
  }

  return (
    <div
      className="absolute inset-0 z-[60] grid h-screen w-screen place-items-center bg-[rgba(0,0,0,0.1)] shadow"
    >
      <div className="bg-white text-t_admin_black w-[400px] flex flex-col items-center justify-center p-6"
      >

        <div className="w-full text-right" onClick={closePopupWithX}>
          <span className="cursor-pointer">X</span>
        </div>

        <label htmlFor="add-option" className="text-bold grid place-items-center gap-6">
          Add new {name.toLowerCase()}:
        </label>
        <input
          ref={inputRef}
          type="text"
          className="mt-4 bg-[#f2f2f2] text-content border-t_admin_black w-[100%] border-[0.1rem] p-[0.5rem]"
          name="add-option"
          id="add-option"
          spellCheck="false"
          onKeyDown={onKeyDownHandler} />

        <button
          onClick={submitNewItem}
          className="text-white bg-t_admin_black mt-6 block px-10 py-3 font-semibold tracking-wider"
        >
          SAVE
        </button>
      </div>
    </div>
  )
}
