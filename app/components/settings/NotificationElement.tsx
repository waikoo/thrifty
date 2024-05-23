import Toggle from "@/app/components/Toggle"
import { albert_500 } from "@/utils/fonts"

type NotificationElementProps = {
  children: React.ReactNode
  type: string
}

export default function NotificationElement({ children, type }: NotificationElementProps) {

  return (
    <div className="bg-faded w-50 flex items-center gap-10 rounded-full py-2 px-12 text-black">
      <Toggle type={type}
        toggleBgColor="bg-gray-300"
        toggleBorder={""}
        thumbColor="peer-checked:after:bg-black"
        thumbColorUnchecked="after:bg-white"
        checkedBgColor="peer-checked:bg-[#d2d62e]" />

      <p className={`${albert_500.className} xl:text-[14px]`}>
        {children}
      </p>
    </div>
  )
}
