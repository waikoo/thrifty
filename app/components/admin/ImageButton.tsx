"use client"
import { useEffect } from "react";

import { useProductStore } from "@/state/admin/uploadNewProductToDb";
import { albert_700 } from "@/utils/fonts";

type ImageButtonProps = {
  inputRef: React.RefObject<HTMLInputElement>
  setShowValidityError: (value: boolean) => void
}

export default function ImageButton(props: ImageButtonProps) {
  const { inputRef, setShowValidityError } = props
  const { img_url, setImgUrl, setShowImgError, setHasNoImage } = useProductStore()

  useEffect(() => {
  }, [setShowValidityError])

  const handleNewImage = () => {
    if (inputRef.current?.value === '') {
      setShowImgError(true)
      return
    }
    setShowImgError(false)

    if (!inputRef.current?.checkValidity()) {
      setShowValidityError(true)
      return
    }
    setShowValidityError(false)

    if (inputRef && inputRef.current) {
      setHasNoImage(false)
      setShowValidityError(false)
      inputRef.current.value && setImgUrl([...img_url, inputRef.current.value]);
      inputRef.current.value = '';
      return
    }
  };

  return (
    <button
      className={`rounded-[5px] bg-[#1b1b1b] border-[1px] border-[#3e3e3e] focus:ring-yellow text-[#f2f2f2] col-span-2 border-[0.1rem] text-[13px] ${albert_700.className} focus:outline-none focus:ring-[0.15rem] tracking-wider`}
      onClick={handleNewImage}>
      UPLOAD
    </button>
  )
}
