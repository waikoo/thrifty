import { twMerge as tm } from 'tailwind-merge'

type MenuItemProps = {
  className?: string;
  color: string;
  onClick?: () => void;
  children: React.ReactNode;
  Img: React.ComponentType<{ color: string }>
}

export default function MenuItem({ children, className, onClick, Img, color }: MenuItemProps) {
  return (
    <div className="flex items-center">
      <Img color={color} />
      <li className={tm("p-5 whitespace-no-wrap w-max", className)} onClick={onClick}>
        {children}
      </li>
    </div>
  )
}
