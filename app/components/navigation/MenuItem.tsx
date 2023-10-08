import { twMerge as tm } from 'tailwind-merge'
import { Spinner } from '..';

type MenuItemProps = {
  className?: string;
  color: string;
  onClick?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
  children: React.ReactNode;
  loading?: boolean;
  Img: React.ComponentType<{ color: string }>
}

export default function MenuItem({ children, className, onClick, Img, color, loading }: MenuItemProps) {
  return (
    <div className="flex items-center">
      <Img color={color} />
      <li className={tm(
        "p-5 whitespace-no-wrap w-max",
        className,
        loading && "bg-bkg"
      )} onClick={onClick}>
        {loading ? <Spinner /> : children}
      </li>
    </div>
  )
}
