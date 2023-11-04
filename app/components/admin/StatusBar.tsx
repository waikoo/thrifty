'use client'
import { useUIStore } from "@/state/uiState"
import { useProductStore } from "@/state/productState"
import { twMerge as tm } from 'tailwind-merge'

type StatusBarProps = {
  children: React.ReactNode
}

export default function StatusBar({ children }: StatusBarProps) {
  const { created, edited } = useProductStore((state) => state.counter)
  const { raiseStatusBar, statusBar } = useUIStore()
  let height = !statusBar ? 'h-0' : 'h-[48vh]'

  return (
    <div className={tm(`bg-content ${height} text-bkg fixed bottom-0 left-0 right-0 grid w-screen text-[1.2rem] font-bold`)}
      onMouseEnter={() => raiseStatusBar(true)}
      onMouseLeave={() => raiseStatusBar(false)}
    >
      {children}

      <div className="bg-content fixed bottom-0 left-0 right-0 grid w-screen grid-cols-[auto_auto_1fr] gap-8 p-6 ">
        <span>CREATED: {created} </span>
        <span className="justify-self-start">EDITED: {edited} </span>

        <button className="bg-bkg text-content cursor-pointer justify-self-end px-24 py-4 font-semibold tracking-wider">PUBLISH CHANGES</button>
      </div>
    </div >
  )
}
