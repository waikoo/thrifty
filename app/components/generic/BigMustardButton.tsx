type BigMustardButtonProps = {
  children: React.ReactNode
  className?: string
}

export default function BigMustardButton({ children, className }: BigMustardButtonProps) {

  return (
    <button className={`${className} bg-t_mustard hover:bg-[#C9CC2C] border-none cursor-pointer rounded-full h-auto w-auto`}>
      {children}
    </button>
  )
}

