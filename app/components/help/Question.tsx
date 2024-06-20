type QuestionProps = {
  children: React.ReactNode
}

export default function Question({ children }: QuestionProps) {

  return (
    <summary className="font-black text-t_black dark:text-t_white">{children}</summary>
  )
}
