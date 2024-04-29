import { useRef } from "react";

import SearchBar from "@/app/components/navigation/SearchBar";
import { useNavigationStore } from "@/state/client/navigationState";

export default function MobileSearch() {
  const { setShowMobileSearch } = useNavigationStore()
  const sectionRef = useRef(null)

  const handleClickOut = (e: React.MouseEvent) => {
    if (e.target === sectionRef.current) {
      setShowMobileSearch(false)
    }
  }

  return (
    <section
      className="text-bkg absolute inset-0 z-[60] grid h-screen w-screen bg-[rgba(0,0,0,0.5)] shadow"
      ref={sectionRef}
      onClick={handleClickOut}
    >
      <div className="relative bg-t_white dark:bg-t_black w-min-content p-7 opacity-100 sm:top-[6.8rem]">
        <SearchBar />
      </div>
    </section>
  )
}

