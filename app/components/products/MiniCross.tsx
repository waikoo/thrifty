import { RxCross2 } from "react-icons/rx";

type MiniCrossProps = {
  onClose: () => void
}

export default function MiniCross({ onClose }: MiniCrossProps) {

  return (
    <div className="grid place-items-center ml-8 bg-t_black h-10 w-10 rounded-full">
      <RxCross2
        color="white"
        size={20}
        onClick={onClose}
      />
    </div>
  )
}

