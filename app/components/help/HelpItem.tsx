import { albert_800 } from "@/utils/fonts"

type HelpItemProps = {
  children: React.ReactNode
  index: number
  Component: React.ComponentType<{ className?: string }>
  selected: number
  setSelected: React.Dispatch<React.SetStateAction<number>>
}

export default function HelpItem({ children, index, Component, selected, setSelected }: HelpItemProps) {
  const selectedStyle = selected === index ? 'bg-t_white text-text-t_black' : ''

  return (
    <li className={`${selectedStyle} cursor-pointer px-5 py-4 xl:pl-48 text-[0.75rem] border-b-[0.1rem] border-t_white`}
      onClick={() => setSelected(index)}
    >
      <span className={`whitespace-nowrap ${albert_800.className} text-[13px] sm:text-[17px] xl:text-[13px]`}>{children}</span>
      {selected === index && <Component className="xl:hidden" />}
    </li>
  )
}

