"use client"
type IconAccount = {
  width?: string
  isAdmin?: boolean
}

const IconAccount = ({ width, isAdmin }: IconAccount) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 18}
      height={width ? "100%" : 19}
      viewBox="0 0 18 17"
      fill='none'
      className="cursor-pointer"
    >
      <path
        stroke={isAdmin ? 'white' : 'black'}
        strokeWidth={2}
        d="M1 17c0-3.132 3.52-5.668 7.853-5.668 4.332 0 7.861 2.536 7.861 5.668M8.853 8.203a3.601 3.601 0 100-7.203 3.601 3.601 0 000 7.203z"
      />
    </svg>
  )
}

export default IconAccount

