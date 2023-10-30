"use client"

import { useProductStore } from "@/state/productState";

type ImageButtonProps = {
  inputRef: React.RefObject<HTMLInputElement>
  // images: string[]
  // setImages: (images: string[]) => void
}

export default function ImageButton({ inputRef }: ImageButtonProps) {
  // export default function ImageButton({ inputRef, images, setImages }: ImageButtonProps) {
  const { imgUrl, setImgUrl } = useProductStore()

  const handleNewImage = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.value && setImgUrl([...imgUrl, inputRef.current.value]);
      inputRef.current.value = '';
    }
  };

  return (
    <button
      className={`adminBorder p-[0.5rem]`}
      onClick={handleNewImage}>
      Upload
    </button>
  )
}
