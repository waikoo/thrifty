"use client"
import { useUIStore, useProductStore } from "@/state"
import { ImageDeletionPopUp, Portal } from "."

type ImageEditProps = {
  src: string
}

export default function ImageEdit({ src }: ImageEditProps) {
  const { img_url, setImgUrl } = useProductStore()
  const { setShowEditOptions, popUp, showPopUp } = useUIStore()

  const onClickHandler = () => {
    showPopUp(true)
  }

  const deleteImage = () => {
    img_url.forEach((el, i) => {
      if (src === el) {
        setImgUrl(img_url.filter((_, index) => index !== i))
      }
    })
  }

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

      {popUp && (
        <Portal>
          <ImageDeletionPopUp
            function={deleteImage}
            prompt="Are you sure you want to delete this image?"
            options={{ option1: 'Yes', option2: 'No' }}
          />
        </Portal>)
      }

    </>
  )
}
