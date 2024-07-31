"use client"
import { useRef } from "react"

import { RxCross2 } from "react-icons/rx"

import { twMerge as tm } from 'tailwind-merge';

import { useThemeStore } from "@/state/themeState"
import useViewport from "@/app/components/hooks/useViewport";
import { borderRadius } from "../data/universalStyles";

type WithCloseButtonProps = {
  onClose: () => void
  children: React.ReactNode
  className?: string
  gap?: string
  padding?: string
  noBorder?: boolean
  isPopUp?: boolean
}

export default function WithCloseButton({ onClose, children, className, gap, noBorder, isPopUp = false, padding = "p-12" }: WithCloseButtonProps) {
  const dialogRef = useRef(null)
  const { theme } = useThemeStore()
  const closeIconColor = theme === 'light' ? "black" : 'white'
  const currentViewport = useViewport()
  const border = noBorder && currentViewport < 640 ? '' : 'border-[0.625rem]'
  const popIt = isPopUp && currentViewport < 1280 ? `h-[80vw] w-[80vw] mx-auto ${borderRadius}` : 'h-screen'

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === dialogRef.current) {
      onClose()
    }
  }

  return (
    <dialog className="fixed inset-0 z-[60] grid h-screen w-full place-items-center bg-black bg-opacity-50"
      onClick={handleOutsideClick}
      ref={dialogRef}
    >
      <div className={tm(`${className} ${gap} ${padding} flex flex-col relative bg-t_white dark:bg-t_black z-[60] ${popIt} sm:h-auto sm:rounded-[2.1875rem] ${border} border-t_mustard`)}>
        <span className="absolute right-3 top-3 cursor-pointer"
          onClick={onClose}>

          <RxCross2 color={closeIconColor}
            size={20} />
        </span>

        {children}
      </div>

    </dialog>
  )
}

