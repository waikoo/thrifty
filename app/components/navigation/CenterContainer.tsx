import { useUIStore } from "@/state";
import { RecoverPassword, SignInOrUp } from ".";

export default function CenterContainer() {
  const showRecovery = useUIStore((state) => state.showRecovery)
  const { setShowSignIn } = useUIStore()

  return (
    <dialog className="fixed inset-0 z-40 grid h-screen w-full place-items-center bg-black bg-opacity-50"
      onClick={() => setShowSignIn(false)}
    >
      <section className="bg-bkg relative p-8">

        {showRecovery ? <RecoverPassword /> : <SignInOrUp />}

      </section>

    </dialog>
  )
}
