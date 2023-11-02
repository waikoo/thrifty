import { useUIStore, useProductStore } from "@/state"

type ImageEditProps = {
  src: string
  editRef: React.RefObject<HTMLDivElement>
}

export default function ImageEdit({ src, editRef }: ImageEditProps) {
  const { imgUrl, setImgUrl } = useProductStore()
  const { setShowEditOptions } = useUIStore()

  const onClickHandler = (src: string) => {
    imgUrl.forEach((el, i) => {
      if (src === el) {
        setImgUrl(imgUrl.filter((_, index) => index !== i))
      }
    })
  }

  return (
    <div
      className="absolute right-0 top-0"
      onMouseOut={() => setShowEditOptions(false)}
      onClick={() => onClickHandler(src)}
      ref={editRef}
    >
      <button
        className="bg-bkg text-content cursor-pointer justify-self-end px-4 py-2 font-semibold "
      >X</button>
    </div>

  )

}
