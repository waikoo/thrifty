"use client"
import Toggle from "@/app/components/Toggle"
import { useEffect, useRef } from "react"

type NotificationElementProps = {
  children: React.ReactNode
  type: string
}

export default function NotificationElement({ children, type }: NotificationElementProps) {

  return (
    <div className="bg-faded w-50 flex items-center gap-10 rounded-full p-[1.15rem] px-12 text-black">
      <Toggle type={type} />
      <p className="w-56 text-[0.8125rem] font-medium">{children}</p>
    </div>
  )
}
