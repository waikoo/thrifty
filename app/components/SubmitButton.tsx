import { TMouseOnButton } from '@/state/userState';
import { twMerge as tm } from 'tailwind-merge';
import { Spinner } from '.';

type ButtonProps = {
  children: React.ReactNode | JSX.Element;
  className?: string;
  inverse?: boolean;
  hero?: boolean
  onClick?: (e: TMouseOnButton) => void
}

type SubmitButtonProps = ButtonProps & {
  loading?: boolean
}

const SubmitButton = ({ children, className, inverse, loading, onClick, hero }: SubmitButtonProps) => {

  return (
    <button className={
      tm("bg-content text-bkg block w-full p-4 font-semibold",
        className,
        inverse && "bg-bkg text-content border-content",
        loading && "bg-bkg",
        hero && "hover:bg-bkg hover:text-content h-auto w-full border-[0.05rem] p-0.5 text-[0.85rem] sm:p-1 md:p-2"
      )}

      onClick={onClick}
    > {loading ? <Spinner /> : children?.toString().toUpperCase()}
    </button >
  )
}

export default SubmitButton
