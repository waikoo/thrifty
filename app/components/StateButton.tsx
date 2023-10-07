import { Auth, AuthModes } from '@/types/auth';
import { twMerge as tm } from 'tailwind-merge'

type StateButtonProps = {
  children: React.ReactNode;
  className?: string;
  selected: boolean;
  authValue: AuthModes;
  setSelected: (current: AuthModes) => void
}

export default function StateButton({ children, className, selected, authValue, setSelected }: StateButtonProps) {

  return (
    <button className={tm("bg-content text-bkg block w-full p-2 border-bkg",
      className,
      !selected && "bg-bkg text-content")
    }
      onClick={() => { if (!selected) { return setSelected(authValue) } }}
    >{children}
    </button>
  )
}
