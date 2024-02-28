import Question from "@/app/components/help/Question"
import Answer from "@/app/components/help/Answer"
import { HELP_ANSWERS, HELP_QUESTIONS } from "@/app/components/data/helpData"

type FAQItem = {
  index: number
}

export default function FAQItem({ index }: FAQItem) {

  return (
    <>
      <Question>{HELP_QUESTIONS[index]}</Question>
      <Answer>{HELP_ANSWERS[index]}</Answer>
    </>
  )
}
