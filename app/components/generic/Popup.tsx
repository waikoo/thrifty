type PopUpProps = {
  children: React.ReactNode
  option1: {
    value: string
    function: () => void
  }
  option2: {
    value: string
    function: () => void
  }
}

export default function Popup({ children, option1, option2 }: PopUpProps) {

  return (
    <section className="text-bkg absolute inset-0 z-[60] grid h-screen w-screen place-items-center bg-[rgba(0,0,0,0.5)]">
      <div className="bg-content w-min-content flex flex-col gap-6 p-7 opacity-100">
        <span>{children}</span>

        <div className="text-content flex justify-center gap-2">
          <span
            onClick={option1.function}
            className="bg-bkg hover:text-bkg hover:bg-content hover:border-bkg cursor-pointer px-5 py-1 hover:border-[0.1rem]">
            {option1.value}
          </span>

          <span
            onClick={option2.function}
            className="bg-bkg hover:text-bkg hover:bg-content hover:border-bkg cursor-pointer px-5 py-1 hover:border-[0.1rem]">
            {option2.value}
          </span>
        </div>

      </div>
    </section>
  )
}
