import { twMerge as tm } from 'tailwind-merge'

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  inverse?: boolean; 
  border?: boolean; 
}

const Button = ({children, className, inverse, border}: ButtonProps) => {
  return (
    <button className={
      tm("bg-content text-bkg block w-full p-2 border-bkg", 
      className, 
      inverse && "bg-bkg text-content border-content",
      border && "border-[0.1rem]"
     )}
    >{children}
    </button>
  )
}

export default Button
