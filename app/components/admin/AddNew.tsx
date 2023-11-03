import { useUIStore } from "@/state"
import { AddOptionPopUp, Portal } from "."

type AddNewProps = {
  name: string
  handleAddItem?: (value: string) => void
}

export default function AddNew({ name, handleAddItem }: AddNewProps) {
  const { addOption, showAddOption } = useUIStore()

  return (
    <div className="absolute right-[-7rem] ml-3 flex cursor-pointer items-center gap-2"
      onClick={() => showAddOption(!addOption)}
    >
      <div className="h-[50%] self-center">
        <span className="border-bkg bg-content text-bkg self-start border-[0.05rem] p-[0.005rem] px-[0.01rem] text-center text-[1.5rem]">+</span>
      </div>
      <span className="text-grey">Add new</span>

      {addOption ? (
        <Portal>
          <AddOptionPopUp {...{ name, handleAddItem }} />
        </Portal>
      ) : null}

    </div>

  )
}
