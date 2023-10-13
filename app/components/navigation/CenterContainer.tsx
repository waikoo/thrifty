import { useUIStore } from "@/state";
import { RecoverPassword } from ".";
import { SignInOrUp } from "..";

export default function CenterContainer() {
  const showRecovery = useUIStore((state) => state.showRecovery)

  return (
    <dialog className="bg-transparent fixed inset-0 grid place-items-center w-full">
      <div className="grid place-items-center border-[0.1rem] border-content min-w-[15rem] w-[25%] min-h-[25rem] bg-bkg">

        <section className="p-8 bg-bkg relative">
          {showRecovery ? <RecoverPassword /> : <SignInOrUp />}
        </section>

      </div>
    </dialog>
  )
}
