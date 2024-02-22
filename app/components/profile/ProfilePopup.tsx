import { IoCloseOutline } from "react-icons/io5";

import AnimatedInput from "@/app/components/AnimatedInput";
import { useRef } from "react";

type ProfilePopupProps = {
  children: React.ReactNode
  setShowPopup: (popup: boolean) => void
  inputSettings: {
    type: string,
    id: string,
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  }[]
}

export default function ProfilePopup({ children, setShowPopup, inputSettings }: ProfilePopupProps) {
  const outerRef = useRef(null)

  const closePopup = (e: React.MouseEvent) => {
    if (e.target === outerRef.current) {
      setShowPopup(false)
    }
  }

  return (
    <div className="text-bkg absolute inset-0 z-[60] grid h-screen w-screen place-items-center bg-[rgba(0,0,0,0.5)]" onClick={closePopup} ref={outerRef}>
      <div className=" bg-content relative flex w-[300px] flex-col gap-6 p-7 opacity-100">
        <h2 className="text-center text-[1rem] font-extrabold">CHANGE {children}</h2>
        <IoCloseOutline color='black' size={25} className="absolute right-1 top-1 cursor-pointer" onClick={() => setShowPopup(false)} />

        {inputSettings.map((setting) => <AnimatedInput key={setting.id} {...setting} />)}

        <button className="bg-bkg text-content mt-10 rounded-full py-3 text-[0.8125rem] font-semibold">SAVE</button>
      </div>
    </div>
  )
}
