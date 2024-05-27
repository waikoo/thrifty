import HelpTitle from "@/app/components/help/HelpTitle"
import FAQItem from "./FAQItem"
import { HELP_QUESTIONS } from "@/app/components/data/helpData"

type FAQProps = {
  children: React.ReactNode
  className?: string
}

export default function FAQ({ children, className }: FAQProps) {

  return (
    <div className={`${className}`}>
      <HelpTitle>{children}</HelpTitle>

      <ol className={`max-w-3xl text-[0.8125rem]`}>

        {HELP_QUESTIONS.map((_, index) => {
          return <FAQItem key={`faq-${index}`} index={index} />
        })}

      </ol>
    </div>
  )
}
