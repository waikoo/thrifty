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
  }[],
  update: () => void
}

export default function ProfilePopup({ children, setShowPopup, inputSettings, update }: ProfilePopupProps) {
  const outerRef = useRef(null)

  const closePopup = (e: React.MouseEvent) => {
    if (e.target === outerRef.current) {
      setShowPopup(false)
    }
  }

  const submit = () => {
    update()
    setShowPopup(false)
  }

  return (
    <div className="absolute inset-0 z-[60] grid h-screen w-screen place-items-center bg-[rgba(0,0,0,0.5)]" onClick={closePopup} ref={outerRef}>
      <div className="text-t_black bg-t_white relative rounded-none flex justify-center w-screen h-screen sm:h-auto xl:w-[350px] sm:w-[400px] flex-col gap-6 p-8 py-12 opacity-100 border-[0.5rem] border-t_mustard sm:rounded-[2.1875rem]">
        <IoCloseOutline color='black' size={25} className="absolute right-3 top-3 cursor-pointer" onClick={() => setShowPopup(false)} />

        <h2 className="text-center text-[17px] sm:text-[21px] xl:text-[18px] font-extrabold mb-5">CHANGE {children}</h2>

        {inputSettings.map((setting) => (
          <AnimatedInput
            key={setting.id}
            font="text-[#9d9d9d] text-[13px] sm:text-[17px] xl:text-[14px]"
            className="text-[13px] sm:text-[17px] xl:text-[14px]" {...setting} />
        ))}

        <button className="bg-t_black text-t_white mt-5 rounded-full py-3 text-[0.8125rem] font-semibold" onClick={submit}>SAVE</button>
      </div>
    </div>
  )
}
