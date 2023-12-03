import { useUIStore } from "@/state"
import { AddOptionPopUp, Portal } from "."

type AddNewProps = {
  name: string
  handleAddItem?: (value: string) => void
}

export default function AddNew({ name, handleAddItem }: AddNewProps) {
  const { addMaterial, showAddMaterial, addBrand, showAddBrand } = useUIStore()

  const onClickHandler = () => {
    if (name === 'BRAND') {
      showAddBrand(true)
    } else if (name === 'MATERIAL') {
      showAddMaterial(true)
    }
  }

  return (
    <>
      <div className="absolute right-[-7rem] ml-3 flex cursor-pointer items-center gap-2"
        onClick={onClickHandler}
      >
        <div className="h-[50%] self-center">
          <span className="border-bkg bg-content text-bkg self-start border-[0.05rem] p-[0.005rem] px-[0.01rem] text-center text-[1.5rem]">+</span>
        </div>
        <span className="text-grey">Add new</span>

      </div>

      {(name === 'BRAND' && addBrand) || (name === 'MATERIAL' && addMaterial) ? (
        <Portal>
          <AddOptionPopUp {...{ name, handleAddItem }} />
        </Portal>
      ) : null}
    </>
  )
}
