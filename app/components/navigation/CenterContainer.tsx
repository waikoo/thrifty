import { useUIStore } from "@/state";
import { RecoverPassword } from ".";
import { SignInOrUp } from "..";

export default function CenterContainer() {
  const showRecovery = useUIStore((state) => state.showRecovery)

  return (
    <dialog className="fixed inset-0 z-40 grid w-full place-items-center bg-transparent">

      <div className="border-content bg-bkg grid min-h-[25rem] w-[25%] min-w-[15rem] place-items-center border-[0.1rem]">

        <section className="bg-bkg relative p-8">

          {showRecovery ? <RecoverPassword /> : <SignInOrUp />}

        </section>

      </div>
    </dialog>
  )
}
