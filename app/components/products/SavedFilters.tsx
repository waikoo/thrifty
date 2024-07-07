"use client"
import { useFilterStore } from "@/state/client/filterState";
import WithCloseButton from "@/app/components/navigation/WithCloseButton";
import SavedFiltersList from "@/app/components/products/SavedFiltersList";
import SavedFiltersNotification from "@/app/components/products/SavedFiltersNotification";
import SavedFiltersTitle from "@/app/components/products/SavedFiltersTitle";

export default function SavedFilters() {
  const { setShowSavedFiltersPopup } = useFilterStore()

  return (
    <WithCloseButton
      onClose={() => setShowSavedFiltersPopup(false)}
      padding="p-8"
    >
      <SavedFiltersTitle />

      <SavedFiltersNotification />

      <SavedFiltersList />

    </WithCloseButton>
  )
}
