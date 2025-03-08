"use client"
import { useEffect } from "react";

import { ImEnlarge } from "react-icons/im";
import { TbArrowsMinimize } from "react-icons/tb";

import { useNewAndEditedPositionStore } from "@/state/admin/newAndEditedPositionState";
import { albert_600 } from "@/utils/fonts";

type AdminProductStatusProps = {
  length: number
  children: React.ReactNode
}

export default function AdminProductStatus({ length, children, }: AdminProductStatusProps) {
  const { maximizeNew, setMaximizeNew, maximizeEdited, setMaximizeEdited, onTop, setOnTop } = useNewAndEditedPositionStore()

  useEffect(() => {
    if (!maximizeNew && !maximizeEdited) {
      setOnTop('')
    }
  }, [maximizeNew, maximizeEdited, setOnTop])

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
    <div className="absolute bg-white text-t_admin_black bottom-2 flex w-full items-center justify-between px-6 py-[0.55rem]">
      <span className={`text-[13px] ${albert_600.className}`}>{children}: {length}</span>
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
