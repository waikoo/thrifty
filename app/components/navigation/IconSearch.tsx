import React from "react"

type IconSearchProps = {
  theme: string | null
}

const IconSearch = ({ theme }: IconSearchProps) => {
  const currentTheme = theme === "dark" ? "#fff" : "#191A1A"

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" className="self-end">
      <path
        stroke={currentTheme}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="m16 16-3.378-3.378m0 0a6.221 6.221 0 1 0-8.798-8.799 6.221 6.221 0 0 0 8.798 8.8Z"
      />
    </svg>
  )
}

export default IconSearch
