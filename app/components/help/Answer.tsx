type AnswerProps = {
  children: React.ReactNode
}

export default function Answer({ children }: AnswerProps) {
  return (
    <>
      <ul>
        <li className="ml-5 list-disc font-semibold">{children}</li>
      </ul>
      <br />
    </>
  )
}

