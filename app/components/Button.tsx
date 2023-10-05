import { twMerge as tm } from 'tailwind-merge'

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  inverse?: boolean;
  border?: boolean;
  selected?: boolean;
  setSelected?: (newState: 'login' | 'signup') => void
  signUp?: () => void
}

const Button = ({ children, className, inverse, border, selected, setSelected, signUp }: ButtonProps) => {
  const newState: 'login' | 'signup' = ((children as string).replace(' ', '').toLowerCase() as 'login' | 'signup')
  const signInOrLoginHandler = () => {

    if (selected || !setSelected) return
    setSelected(newState)
  }

  const signUpHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (signUp) {
      try {
        signUp()
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <button className={
      tm("bg-content text-bkg block w-full p-2 border-bkg",
        className,
        inverse && "bg-bkg text-content border-content",
        border && "border-[0.1rem]",
        selected && "bg-content text-bkg",
        !selected && "bg-bkg text-content"
      )}
      onClick={selected || setSelected ? signInOrLoginHandler : (e) => signUpHandler(e)}
    >{children}
    </button>
  )
}

export default Button
