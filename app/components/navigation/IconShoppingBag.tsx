import React from "react"

type IconShoppingBagProps = {
  theme: string | null
}

const IconShoppingBag = ({ theme }: IconShoppingBagProps) => {
  const currentTheme = theme === "dark" ? "#fff" : "#191A1A"

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={16} fill="none" className="cursor-pointer"
    >
      <path
        fill={currentTheme}
        d="M18.03 0H2.727A1.74 1.74 0 0 0 .987 1.74v12.52A1.739 1.739 0 0 0 2.727 16H18.03a1.739 1.739 0 0 0 1.739-1.74V1.74A1.739 1.739 0 0 0 18.03 0Zm-.347 13.913H3.074V2.087h14.609v11.826ZM5.857 4.522a1.043 1.043 0 0 1 2.087 0 2.435 2.435 0 0 0 4.87 0 1.043 1.043 0 1 1 2.086 0 4.522 4.522 0 1 1-9.043 0Z"
      />
    </svg>
  )
}
export default IconShoppingBag
