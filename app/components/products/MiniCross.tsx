import { RxCross2 } from "react-icons/rx";
import useViewport from "../hooks/useViewport";

type MiniCrossProps = {
  onClose: () => void
}

export default function MiniCross({ onClose }: MiniCrossProps) {
  const currentViewport = useViewport()
  const iconSize = currentViewport < 640 ? 15 : 20

  return (
    <div className="grid place-items-center ml-8 bg-t_black h-[30px] w-[30px] sm:h-10 sm:w-10 rounded-full">
      <RxCross2
        color="white"
        size={iconSize}
        onClick={onClose}
      />
    </div>
  )
}

