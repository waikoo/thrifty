"use client"
import { useEffect } from "react";

import { useProductStore } from "@/state/admin/uploadNewProductToDb";

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
      setShowValidityError(false)
      setShowImgError(true)
      return
    } else {
      setShowImgError(false)
      if (!inputRef.current?.checkValidity()) {
        setShowValidityError(true)
        return
      } else {
        setShowValidityError(false)
        setShowImgError(false)
        if (img_url.length === 0) {
          setShowValidityError(true)
          return
        } else {
          setShowValidityError(false)
        }
      }
    }

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
      className={"focus:ring-yellow border-content text-content col-span-2 border-[0.1rem] p-[0.5rem] text-[0.8125rem] font-semibold focus:outline-none focus:ring-[0.15rem]"}
      onClick={handleNewImage}>
      Upload
    </button>
  )
}
