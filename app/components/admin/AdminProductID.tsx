"use client"
import { useState } from "react"

type AdminProductIDProps = {
  type: string
}

export default function AdminProductID({ type }: AdminProductIDProps) {
  const [showFeedback, setShowFeedback] = useState(false)

  const onClickHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
    navigator.clipboard.writeText(e.currentTarget.dataset.uuid as string)
    setShowFeedback(true)
    setTimeout(() => setShowFeedback(false), 1000)
  }

  return (

    <span className="relative col-span-2 mb-2 cursor-pointer text-[0.8125rem] font-semibold"
      data-uuid={type}
      onClick={onClickHandler}
      title="Click to copy ID"
    >
      ID
      <span className="bg-content text-bkg ml-2 justify-self-start p-1">
        {type.length > 20 ? type.substring(0, 20) + '...' : type}
      </span>

      {showFeedback && (
        <span className="bg-bkg text-content absolute bottom-[-0.25rem] left-[-0.25rem] right-[-0.25rem] top-[-0.25rem]">Copied!</span>
      )}
    </span>
  )
}
