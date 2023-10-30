type AddNewProps = {
  setShowAdd: (showAdd: boolean) => void
  showAdd: boolean
}

export default function AddNew({ setShowAdd, showAdd }: AddNewProps) {
  return (
    <div className="absolute right-[-7rem] ml-3 flex cursor-pointer items-center gap-2"
      onClick={() => setShowAdd(!showAdd)}
    >
      <div className="h-[50%] self-center">
        <span className="border-bkg bg-content text-bkg self-start border-[0.05rem] p-[0.005rem] px-[0.01rem] text-center text-[1.5rem]">+</span>
      </div>
      <span className="text-grey">Add new</span>
    </div>

  )
}
