import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

type ToastNotificationProps = {
  children: React.ReactNode
}

export default function ToastNotification({ children }: ToastNotificationProps) {

  return (
    <div className={`fixed bottom-20 left-0 right-0 `}>
      <div className="w-[380px] flex items-center gap-3 p-3 bg-[#dafcc9] rounded-full justify-center mx-auto">
        <IoMdCheckmark />
        {children}
        <RxCross2 />
      </div>
    </div>
  )
}

