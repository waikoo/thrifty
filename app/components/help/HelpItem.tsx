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
    <li className={`${selectedStyle} cursor-pointer px-5 py-4 xl:pl-48 text-[0.75rem] font-extrabold`}
      onClick={() => setSelected(index)}
    >
      <span className="whitespace-nowrap">{children}</span>
      {selected === index && <Component className="xl:hidden" />}
    </li>
  )
}

