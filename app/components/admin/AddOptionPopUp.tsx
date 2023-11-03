"use client"
import { useUIStore } from "@/state";
import { useRef } from "react";

type AddOptionPopUpProps = {
  name: string
  handleAddItem?: (value: string) => void
}

export default function AddOptionPopUp({ name, handleAddItem }: AddOptionPopUpProps) {
  const inputRef = useRef<null | HTMLInputElement>(null)
  const { addOption, showAddOption } = useUIStore()
  console.log(name)

  return (
    <div
      className="text-bkg absolute inset-0 z-[60] grid h-screen w-screen place-items-center bg-[rgba(0,0,0,0.1)] shadow">
      <div className="bg-content text-bkg w-min-content flex flex-col items-center justify-center p-3">

        <div className="w-full text-right" onClick={() => showAddOption(false)}>
          <span className="cursor-pointer">X</span>
        </div>

        <label htmlFor="add-option" className="text-bold grid place-items-center gap-6">
          Add new {name.toLowerCase()}:
        </label>
        <input ref={inputRef} type="text" className="text-bkg border-bkg w-[80%] border-[0.1rem] p-[0.5rem]" name="add-option" id="add-option" />

        <button
          onClick={(e) => {
            e.preventDefault();
            inputRef.current?.value && handleAddItem!(inputRef.current.value);
            inputRef.current!.value = ''
            showAddOption(false)
          }}
          className="text-content bg-bkg mt-6 block px-10 py-3">
          SAVE
        </button>
      </div>
    </div>
  )
}
