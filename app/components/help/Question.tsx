type QuestionProps = {
  children: React.ReactNode
}

export default function Question({ children }: QuestionProps) {
  return (
    <li className="list-decimal font-black">{children}</li>
  )
}
