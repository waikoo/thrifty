'use client'
import { twMerge as tm } from 'tailwind-merge'

import { PublishChanges } from "@/app/components/admin"
import { useStatusBarStore } from "@/state/admin/statusBarState"
import useRealtime from "@/app/components/hooks/useRealtime"

type StatusBarProps = {
  children: React.ReactNode
}

export default function StatusBar({ children }: StatusBarProps) {
  const { raiseStatusBar, statusBar } = useStatusBarStore()
  let height = !statusBar ? 'h-0' : 'h-[48vh]'
  const realDraftLength = useRealtime('draft').length
  const realEditedLength = useRealtime('edited').length

  return (
    <div className={tm(`bg-content ${height} text-bkg fixed bottom-0 left-0 right-0 grid w-screen font-bold`)}
      onMouseEnter={() => raiseStatusBar(true)}
      onMouseLeave={() => raiseStatusBar(false)}
    >
      {children}

      <div className="bg-content fixed bottom-0 left-0 right-0 w-screen p-6 ">
        <div className={`mx-auto grid max-w-[1700px] ${!statusBar ? 'grid-cols-[auto_auto_1fr]' : 'grid-cols-[48%_auto_1fr]'} items-baseline gap-8`}>
          <span>NEW: {realDraftLength} </span>
          <span className="justify-self-start">EDITED: {realEditedLength} </span>

          <PublishChanges className="border-bkg border-2" />
        </div>
      </div>
    </div>
  )
}
