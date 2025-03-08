import { AddOptionPopUp, IconPlus } from "@/app/components/admin"
import { useProductStore } from "@/state/admin/uploadNewProductToDb"
import Portal from "@/app/components/generic/Portal"

type AddNewProps = {
  name: string
}

export default function AddNew({ name }: AddNewProps) {
  const { addMaterial, showAddMaterial, addBrand, showAddBrand } = useProductStore()

  const onClickHandler = () => {
    if (name === 'BRAND') {
      showAddBrand(true)
    } else if (name === 'MATERIAL') {
      showAddMaterial(true)
    }
  }

  return (
    <>
      <div className="absolute right-[-2rem] ml-3 flex cursor-pointer items-center gap-2"
        onClick={onClickHandler}
      >
        <div className="bg-[#e3e3e3] grid h-[1.3rem] w-[1.3rem] place-items-center self-center">
          <IconPlus color="black" />
        </div>
      </div>

      {(name === 'BRAND' && addBrand) || (name === 'MATERIAL' && addMaterial) ? (
        <Portal>
          <AddOptionPopUp {...{ name }} />
        </Portal>
      ) : null}
    </>
  )
}
