import HelpTitle from "@/app/components/help/HelpTitle"
import FAQItem from "./FAQItem"
import { HELP_QUESTIONS } from "@/app/components/data/helpData"
import { albert_900 } from "@/utils/fonts"

type FAQProps = {
  children: React.ReactNode
  className?: string
}

export default function FAQ({ children, className }: FAQProps) {

  return (
    <div className={`${className} p-[48px] text-left`}>
      <HelpTitle>{children}</HelpTitle>

      <span className={`${albert_900.className} text-[24px] sm:text-[45px]`}>FREQUENTLY ASKED QUESTIONS</span>

      <ol className={`max-w-3xl`}>

        {HELP_QUESTIONS.map((_, index) => {
          return <FAQItem key={`faq-${index}`} index={index} />
        })}

      </ol>
    </div>
  )
}
