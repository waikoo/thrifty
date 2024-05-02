import { StateButtonProps } from '@/types/auth';
import { albert_500, albert_900 } from '@/utils/fonts';
import { twMerge as tm } from 'tailwind-merge';

export default function StateButton({ children, className, selected, authValue, setSelected }: StateButtonProps) {
  const isSelected = selected && `border-t_black ${albert_900.className}`

  const handleSelected = () => {
    if (!selected) {
      return setSelected(authValue)
    }
  }

  return (
    <button
      className={tm(`bg-t_white text-[0.875rem] text-[#484848] block w-full border-t_mustard border-b-[0.2rem] p-1 ${className} ${isSelected} ${albert_500.className}`)}
      onClick={handleSelected}
    >{children}
    </button>
  )
}
