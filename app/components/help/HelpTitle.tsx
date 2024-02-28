type HelpTitleProps = {
  children: React.ReactNode
}

export default function HelpTitle({ children }: HelpTitleProps) {
  return (
    <div className="text-[3.125rem] font-semibold">{children}</div>
  )
}
