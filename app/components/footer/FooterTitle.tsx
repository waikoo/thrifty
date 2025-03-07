import { albert_800 } from "@/utils/fonts"

type FooterTitleProps = {
  children: React.ReactNode
}

export default function FooterTitle({ children }: FooterTitleProps) {
  return (
    <h3 className={`footerTitles ${albert_800.className} text-t_mustard`}>{children}</h3>
  )
}

