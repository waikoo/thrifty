import { albert } from "@/utils/fonts"

type AnswerProps = {
  children: React.ReactNode
}

export default function Answer({ children }: AnswerProps) {

  return (
    <p className={`ml-5 mt-3 list-disc text-[13px] sm:text-[17px] xl:text-[14px] ${albert.className}`}>{children}</p>
  )
}

