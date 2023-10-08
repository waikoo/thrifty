type ErrorProps = {
  children: React.ReactNode
}

export default function Error({ children }: ErrorProps) {
  return (
    <div>
      <h1 className="text-red-500">{children}</h1>
    </div>
  )
}
