import { useUIStore } from "@/state";
import { ProductItemType } from "@/types/productItem";
import { ImEnlarge } from "react-icons/im";
import { TbArrowsMinimize } from "react-icons/tb";

type AdminProductStatusProps = {
  length: number
  children: React.ReactNode
}

export default function AdminProductStatus({ length, children, }: AdminProductStatusProps) {
  const { maximizeNew, setMaximizeNew, maximizeEdited, setMaximizeEdited } = useUIStore()

  const onClickHandler = () => {
    const type = typeof children === 'string' ? children.toLowerCase() : ''

    if (type === 'new') {
      setMaximizeNew(!maximizeNew)
    } else if (type === 'edited') {
      setMaximizeEdited(!maximizeEdited)
    }
  }

  return (
    <div className="bg-content absolute bottom-2 flex w-full items-center justify-between px-6 py-[0.55rem]">
      <span className="font-bold">{children}: {length}</span>
      <div
        className="cursor-pointer"
        onClick={onClickHandler}
      >
        {!maximizeNew && children === 'NEW' || !maximizeEdited && children === 'EDITED' ?
          <ImEnlarge
          />
          :
          <TbArrowsMinimize size={22} />}
      </div>
    </div>

  )
}
