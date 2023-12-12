"use client"
import { useProductStore } from "@/state/productState";

type ImageButtonProps = {
  inputRef: React.RefObject<HTMLInputElement>
}

export default function ImageButton({ inputRef }: ImageButtonProps) {
  const { img_url, setImgUrl } = useProductStore()

  const handleNewImage = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.value && setImgUrl([...img_url, inputRef.current.value]);
      inputRef.current.value = '';
    }
  };

  return (
    <button
      className={"border-content text-content col-span-2 border-[0.1rem] p-[0.5rem] text-[0.8125rem] font-semibold"}
      onClick={handleNewImage}>
      Upload
    </button>
  )
}
