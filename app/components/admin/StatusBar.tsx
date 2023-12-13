'use client'
import { useUIStore } from "@/state/uiState"
import { twMerge as tm } from 'tailwind-merge'
import { useDraftTable } from "../hooks"
import { PublishChanges } from "."

type StatusBarProps = {
  children: React.ReactNode
}

export default function StatusBar({ children }: StatusBarProps) {
  const { raiseStatusBar, statusBar, isSaved, setIsSaved } = useUIStore()
  const draft = useDraftTable()

  let height = !statusBar ? 'h-0' : 'h-[48vh]'

  return (
    <div className={tm(`bg-content ${height} text-bkg fixed bottom-0 left-0 right-0 grid w-screen text-[1.2rem] font-bold`)}
      onMouseEnter={() => raiseStatusBar(true)}
      onMouseLeave={() => raiseStatusBar(false)}
    >
      {children}

      <div className="bg-content fixed bottom-0 left-0 right-0 w-screen p-6 ">
        <div className="mx-auto grid max-w-[1700px] grid-cols-[auto_auto_1fr] gap-8 ">
          <span>NEW: {draft.length} </span>
          <span className="justify-self-start">EDITED: 0 </span>

          <PublishChanges className="border-bkg border-2" />
        </div>
      </div>
    </div >
  )
}
