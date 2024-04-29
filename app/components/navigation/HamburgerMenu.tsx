import { albert_600 } from "@/utils/fonts";
import IconAccount from "./icons/IconAccount";
import { RxCross2 } from "react-icons/rx";
import { useNavigationStore } from "@/state/client/navigationState";

export default function HamburgerMenu() {
  const { setShowHamburgerMenu } = useNavigationStore()

  return (
    <section className="absolute inset-0 z-[60] bg-t_white dark:bg-t_black">
      <div className="p-4">

        <div className="grid grid-cols-2 w-full">
          <div className="flex gap-2 items-center">
            <IconAccount width="15%" />
            <span className={`${albert_600.className} text-[0.75rem]`}>Sign In</span>
          </div>
          <div
            onClick={() => setShowHamburgerMenu(false)}
            className="justify-self-end" >
            <RxCross2 />
          </div>
        </div>

        <div className="grid grid-cols-3 w-full p-2 justify-items-center mt-2">
          <span>MEN</span>
          <span>WOMEN</span>
          <span>KIDS</span>
        </div>

      </div>
    </section>
  )
}

