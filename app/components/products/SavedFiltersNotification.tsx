"use client"
import { albert_500 } from "@/utils/fonts";
import Toggle from "@/app/components/Toggle";

export default function SavedFiltersNotification() {

  return (
    <div className="flex items-center gap-4 rounded-full bg-[#f2f2f2] p-5 sm:p-10 xl:p-5 text-t_black xl:w-full sm:mx-auto sm:mt-4">
      <Toggle
        type="filters"
        thumbColor="peer-checked:after:bg-t_black after:bg-t_white"
        toggleBgColor="bg-[#c2c2c2] peer-checked:bg-t_mustard"
        thumbBorder="peer-checked:after:border-gray-500"
        toggleBorder="border-[0.1rem] border-gray-500"
      />
      <p className={`w-[90%] text-[13px] sm:text-[17px] xl:text-[14px] ${albert_500.className}`}>
        Get notified about any changes regarding your saved filters
      </p>
    </div>

  )
}

