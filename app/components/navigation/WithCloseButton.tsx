"use client"
import { useThemeStore } from "@/state/themeState"
import { useRef } from "react"
import { RxCross2 } from "react-icons/rx"
import { twMerge as tm } from 'tailwind-merge';

type WithCloseButtonProps = {
  onClose: () => void
  children: React.ReactNode
  className?: string
  gap: string
}

export default function WithCloseButton({ onClose, children, className, gap }: WithCloseButtonProps) {
  const dialogRef = useRef(null)
  const { theme } = useThemeStore()
  const closeIconColor = theme === 'light' ? "black" : 'white'

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === dialogRef.current) {
      onClose()
    }
  }

  return (
    <dialog className="fixed inset-0 z-[60] grid sm:h-screen w-full sm:place-items-center bg-black bg-opacity-50"
      onClick={handleOutsideClick}
      ref={dialogRef}
    >
      <div className={tm(`${className} ${gap} flex flex-col justify-center relative bg-t_white dark:bg-t_black z-[60] h-screen sm:h-auto sm:rounded-[2.1875rem] border-[0.625rem] border-t_mustard p-12 `)}>
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

