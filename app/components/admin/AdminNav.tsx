"use client"
import { useState } from "react"

import { LayoutAddNew, Products } from "."
import useSignOut from "../hooks/useSignOut"
import { IconAccount } from "../navigation/icons"
import { useRouter } from "next/navigation"

type AdminNavProps = {
  params: { [key: string]: string | string[] | undefined }
}

export default function AdminNav({ params }: AdminNavProps) {
  const { signOutHook } = useSignOut()
  const [showSignOut, setShowSignOut] = useState(false)
  const router = useRouter()

  const signOut = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    signOutHook(e)
    router.push('/')
  }

  return (
    <nav className="flex w-full items-center gap-2 pt-12">
      <LayoutAddNew params={params} />

      <Products params={params} />

      <div className="ml-auto flex items-center gap-2 relative"
        onClick={() => setShowSignOut(!showSignOut)}>
        <IconAccount isAdmin={true} />
        <span className="cursor-pointer">ADMIN</span>

        {showSignOut && (
          <div className="absolute top-10 bg-white hover:bg-t_admin_black hover:text-white text-t_admin_black p-3 z-10">
            <div
              className="cursor-pointer gap-2"
              onClick={signOut}
            >
              <span className="whitespace-nowrap right-10 font-bold">Sign out</span>
            </div>
          </div>
        )}
      </div>

    </nav>

  )
}

