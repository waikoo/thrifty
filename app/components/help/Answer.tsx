type AnswerProps = {
  children: React.ReactNode
}

export default function Answer({ children }: AnswerProps) {

  return (
    <p className="ml-5 list-disc font-semibold">{children}</p>
  )
}

