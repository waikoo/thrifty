import { TMouseOnButton } from '@/state/userState';
import { twMerge as tm } from 'tailwind-merge';
import { Spinner } from '.';

type ButtonProps = {
  children: React.ReactNode | JSX.Element;
  className?: string;
  inverse?: boolean;
  onClick: (e: TMouseOnButton) => void
}

type SubmitButtonProps = ButtonProps & {
  loading?: boolean
}

const SubmitButton = ({ children, className, inverse, loading, onClick }: SubmitButtonProps) => {

  return (
    <button className={
      tm("bg-content text-bkg block w-full p-2",
        className,
        inverse && "bg-bkg text-content border-content",
        loading && "bg-bkg"
      )}

      onClick={onClick}
    > {loading ? <Spinner /> : children?.toString().toUpperCase()}
    </button >
  )
}

export default SubmitButton
