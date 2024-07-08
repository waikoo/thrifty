import { albert_500 } from "@/utils/fonts";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

type ToastNotificationProps = {
  children: React.ReactNode
}

export default function ToastNotification({ children }: ToastNotificationProps) {

  return (
    <div className={`fixed bottom-20 left-0 right-0 `}>
      <div className={`w-[380px] sm:text-[15px] xl:text-[12px] text-[#567b07] ${albert_500.className} flex items-center gap-3 p-3 bg-[#dafcc9] rounded-full justify-center mx-auto`}>
        <IoMdCheckmark color="#567b07" size={25} />
        {children}
        <RxCross2 color="#567b07" size={25} />
      </div>
    </div>
  )
}

