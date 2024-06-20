import { albert_900 } from "@/utils/fonts"

type HelpTitleProps = {
  children: React.ReactNode
}

export default function HelpTitle({ children }: HelpTitleProps) {
  return (
    <span className={`text-[24px] sm:text-[45px] xl:text-[35px] ${albert_900.className}`}>{children}</span>
  )
}
