import { useUIStore } from "@/state"

type PopUpProps = {
  function: () => void
  prompt: string
  options: {
    option1: string
    option2: string
  }
  showPopUp: (value: boolean) => void
}

export default function PopUp({ function: deleteImage, prompt, options: { option1, option2 }, showPopUp }: PopUpProps) {
  const { setShowEditOptions } = useUIStore()

  const closePopUp = () => showPopUp(false)

  return (
    <section
      className="bg-content text-bkg absolute inset-0 z-[60] grid h-screen w-screen place-items-center"
      onMouseOver={() => setShowEditOptions(true)}
    >
      <div className="w-[20rem] p-5">
        <span className="">{prompt}</span>
        <div className="block">
          <button
            className="border-bkg border-[0.05rem] px-5 py-1"
            onClick={deleteImage}
          >
            {option1}</button>
          <button
            className="border-bkg border-[0.05rem] px-5 py-1"
            onClick={closePopUp}
          >{option2}</button>
        </div>
      </div>
    </section>
  )
}
