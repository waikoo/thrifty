import { twMerge as tm } from 'tailwind-merge';

import { TMouseOnButton } from '@/state/client/userState';
import { Spinner } from '@/app/components/generic';

type ButtonProps = {
  children: React.ReactNode | JSX.Element;
  className?: string;
  inverse?: boolean;
  onClick?: (e: TMouseOnButton) => void
}

type SubmitButtonProps = ButtonProps & {
  loading?: boolean
}

const SubmitButton = ({ children, className, inverse, loading, onClick }: SubmitButtonProps) => {

  return (
    <button className={
      tm("bg-content text-bkg block w-full p-3 sm:p-2 rounded-full mt-4",
        className,
        inverse && "bg-bkg text-content border-content",
        loading && "bg-bkg"
      )}

      onClick={onClick}
      data-testid="account-submit"
    > {loading ? <Spinner /> : children?.toString().toUpperCase()}
    </button >
  )
}

export default SubmitButton
