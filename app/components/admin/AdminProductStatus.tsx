"use client"
import { useUIStore } from "@/state";
import { ProductItemType } from "@/types/productItem";
import { useEffect } from "react";
import { ImEnlarge } from "react-icons/im";
import { TbArrowsMinimize } from "react-icons/tb";

type AdminProductStatusProps = {
  length: number
  children: React.ReactNode
}

export default function AdminProductStatus({ length, children, }: AdminProductStatusProps) {
  const { maximizeNew, setMaximizeNew, maximizeEdited, setMaximizeEdited, onTop, setOnTop } = useUIStore()

  useEffect(() => {
    if (!maximizeNew && !maximizeEdited) {
      setOnTop('')
    }
  }, [maximizeNew, maximizeEdited])

  const onClickHandler = () => {
    const type = typeof children === 'string' ? children.toLowerCase() : ''

    if (type === 'new') {
      if (onTop === 'new') {
        setOnTop('')
        setMaximizeNew(false)
        return
      } else {
        setMaximizeEdited(false)
      }
      setMaximizeNew(!maximizeNew)
      !maximizeNew ? setOnTop(type) : setOnTop('edited')
    } else if (type === 'edited') {
      if (onTop === 'edited') {
        setOnTop('')
        setMaximizeEdited(false)
        return
      } else {
        setMaximizeNew(false)
      }
      setMaximizeEdited(!maximizeEdited)
      if (!maximizeEdited) setOnTop(type)
      !maximizeEdited ? setOnTop(type) : setOnTop('new')
    }
  }

  return (
    <div className="bg-content absolute bottom-2 flex w-full items-center justify-between px-6 py-[0.55rem]">
      <span className="font-bold">{children}: {length}</span>
      <div
        className="cursor-pointer"
        onClick={onClickHandler}
      >
        {!maximizeNew && children === 'NEW' || !maximizeEdited && children === 'EDITED' ?
          <ImEnlarge
          />
          :
          <TbArrowsMinimize size={22} />}
      </div>
    </div>

  )
}
