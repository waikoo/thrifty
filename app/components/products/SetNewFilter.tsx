"use client"
import { useState } from "react";

import IconDelete from "@/app/components/cart/icons/IconDelete";
import AnimatedInput from "@/app/components/AnimatedInput";
import FilterItems from "@/app/components/products/FilterItems";

type SetNewFilterProps = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function SetNewFilter({ searchParams }: SetNewFilterProps) {
  const [filterName, setFilterName] = useState<string>("")
  const [filterNotification, setFilterNotification] = useState<boolean>(false)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterName(e.target.value)
  }

  return (
    <section className="text-bkg absolute inset-0 z-[60] grid h-screen w-screen place-items-center bg-[rgba(0,0,0,0.5)]">
      <div className="bg-bkg w-min-content flex flex-col gap-6 p-7 opacity-100">
        <div onClick={() => { }}>
          <IconDelete size={"16"} className="ml-auto cursor-pointer" />
        </div>
        <h1 className="text-content text-center text-[1rem] font-extrabold">SET NEW FILTER</h1>

        <AnimatedInput type="text" id="filterName" placeholder="Filter Name" value={filterName} onChange={handleOnChange} className="border-content border-b-[0.1rem] border-l-0 border-r-0 border-t-0" font="text-[0.8125rem] font-normal" />

        <FilterItems searchParams={searchParams} />

        <label className="flex items-center gap-2">
          <input type="checkbox" checked={filterNotification} onChange={() => setFilterNotification(!filterNotification)} />
          <span className="text-content text-[0.8125rem] font-semibold">I would like to get notifications for this filter</span>
        </label>

        <button className="text-bkg bg-content mx-auto w-min rounded-full px-24 py-3">SAVE</button>
      </div>
    </section>
  )
}
