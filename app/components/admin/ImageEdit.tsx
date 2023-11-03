"use client"
import { useUIStore, useProductStore } from "@/state"
import { PopUp, Portal } from "."

type ImageEditProps = {
  src: string
}

export default function ImageEdit({ src }: ImageEditProps) {
  const { imgUrl, setImgUrl } = useProductStore()
  const { setShowEditOptions, popUp, showPopUp } = useUIStore()
  console.log('popUp: ', popUp)

  const onClickHandler = () => {
    console.log('clicked')
    showPopUp(true)
    console.log(popUp)
  }

  const deleteImage = () => {
    imgUrl.forEach((el, i) => {
      if (src === el) {
        setImgUrl(imgUrl.filter((_, index) => index !== i))
      }
    })
  }

  // useEffect(() => {
  //   console.log(popUp)
  //   //   if (popUp) {
  //   //
  //   //   }
  // }, [popUp])
  return (
    <>
      <div
        className="absolute right-0 top-0"
        onMouseEnter={() => setShowEditOptions(true)}
        onClick={onClickHandler}
      >
        <button
          className="bg-bkg text-content cursor-pointer justify-self-end px-4 py-2 font-semibold "
        > X </button>
      </div>
      {/* {popUp && <span>test</span>} */}
      {popUp && (
        <Portal>
          <PopUp
            function={deleteImage}
            prompt="Are you sure you want to delete this image?"
            options={{ option1: 'Yes', option2: 'No' }}
          />
        </Portal>)
      }

    </>
  )
}
