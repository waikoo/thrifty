import { StateButtonProps } from '@/types/auth';
import { twMerge as tm } from 'tailwind-merge';

export default function StateButton({ children, className, selected, authValue, setSelected }: StateButtonProps) {

  return (
    <button className={tm("bg-content text-bkg block w-full p-2 border-bkg",
      className,
      !selected && "bg-bkg text-content border-[0.1rem] border-content")
    }
      onClick={() => { if (!selected) { return setSelected(authValue) } }}
    >{children}
    </button>
  )
}
