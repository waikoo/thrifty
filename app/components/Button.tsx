import { TMouseOnButton } from '@/state/userState';
import { twMerge as tm } from 'tailwind-merge'

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  inverse?: boolean;
  border?: boolean;
  selected?: boolean;
  submit?: boolean;
  onClick: (e: TMouseOnButton) => void
  // signUp?: (e: TMouseOnButton) => void
  // signIn?: (e: TMouseOnButton) => void
}

const Button = ({ children, className, inverse, border, selected, submit, onClick }: ButtonProps) => {
  console.log(onClick)
  return (
    <button className={
      tm("bg-content text-bkg block w-full p-2 border-bkg",
        className,
        inverse && "bg-bkg text-content border-content",
        border && "border-[0.1rem]",
        selected && "bg-content text-bkg",
        !selected && "bg-bkg text-content"
      )}

      onClick={onClick}
    > {children}
    </button >
  )
}

export default Button
