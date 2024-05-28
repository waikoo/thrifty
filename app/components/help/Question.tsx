type QuestionProps = {
  children: React.ReactNode
  index: number
}

export default function Question({ children, index }: QuestionProps) {

  return (
    <summary className="font-black text-t_black dark:text-t_white">{index + 1}. {children}</summary>
  )
}
