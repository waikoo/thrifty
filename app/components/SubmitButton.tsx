import { TMouseOnButton } from '@/state/userState';
import { twMerge as tm } from 'tailwind-merge'

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  inverse?: boolean;
  onClick: (e: TMouseOnButton) => void
}

const SubmitButton = ({ children, className, inverse, onClick }: ButtonProps) => {

  return (
    <button className={
      tm("bg-content text-bkg block w-full p-2",
        className,
        inverse && "bg-bkg text-content border-content",
      )}

      onClick={onClick}
    > {children?.toString().toUpperCase()}
    </button >
  )
}

export default SubmitButton
