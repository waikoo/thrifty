import { albert_800 } from "@/utils/fonts"

type QuestionProps = {
  children: React.ReactNode
}

export default function Question({ children }: QuestionProps) {

  return (
    <summary className={`text-t_black dark:text-t_white text-[13px] sm:text-[19px] xl:text-[15px] ${albert_800.className}`}>{children}</summary>
  )
}
