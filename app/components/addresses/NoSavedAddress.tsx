import { albert } from "@/utils/fonts";

export default function NoSavedAddress() {

  return (
    <div className="mt-20 text-center">
      <span className={`text-silver text-[0.875rem] ${albert.className} text-[#555555]`}>You currently have no saved addresses.</span>
    </div>
  )
}
