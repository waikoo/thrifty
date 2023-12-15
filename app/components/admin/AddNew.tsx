import { useUIStore } from "@/state"
import { AddOptionPopUp, Portal } from "."
import { FaPlus } from "react-icons/fa6";

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
        <div className="bg-content grid h-[1.3rem] w-[1.3rem] place-items-center self-center">
          <FaPlus color="bkg" />
        </div>

        <span className="text-content font-bold">Add new</span>

      </div>

      {(name === 'BRAND' && addBrand) || (name === 'MATERIAL' && addMaterial) ? (
        <Portal>
          <AddOptionPopUp {...{ name, handleAddItem }} />
        </Portal>
      ) : null}
    </>
  )
}
