import { useProductStore } from "@/state/admin/uploadNewProductToDb"

type PopUpProps = {
  function: () => void
  prompt: string
  options: {
    option1: string
    option2: string
  }
}

export default function ImageDeletionPopUp({ function: deleteImage, prompt, options: { option1, option2 } }: PopUpProps) {
  const { setShowEditOptions, showPopUp } = useProductStore()
  const closePopUp = () => showPopUp(false)

  return (
    <section
      className="text-bkg absolute inset-0 z-[60] grid h-screen w-screen place-items-center bg-[rgba(0,0,0,0.5)] shadow"
      onMouseOver={() => setShowEditOptions(true)}
    >
      <div className="bg-content w-min-content p-7 opacity-100">
        <span className="whitespace-nowrap">{prompt}</span>

        <div className="mt-5 flex justify-center ">

          <button
            className="bg-bkg text-content border-bkg border-[0.05rem] px-5 py-1"
            onClick={deleteImage}
          >
            {option1}</button>
          <button
            className="px-5 py-1"
            onClick={closePopUp}
          >{option2}</button>

        </div>
      </div>
    </section>
  )
}
