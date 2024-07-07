"use client"
import { useFilterStore } from "@/state/client/filterState";
import WithCloseButton from "@/app/components/navigation/WithCloseButton";
import { albert_800 } from "@/utils/fonts";
import SavedFiltersList from "@/app/components/products/SavedFiltersList";
import SavedFiltersNotification from "@/app/components/products/SavedFiltersNotification";

export default function SavedFilters() {
  const { setShowSavedFiltersPopup } = useFilterStore()

  return (
    <WithCloseButton onClose={() => setShowSavedFiltersPopup(false)}
      padding="p-8"
    >
      <h1 className={`mb-3 text-t_black text-center text-[14px] ${albert_800.className}`}>
        SAVED FILTERS
      </h1>

      <SavedFiltersNotification />

      <SavedFiltersList />

    </WithCloseButton>
  )
}
