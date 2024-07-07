"use client"
import { useFilterStore } from "@/state/client/filterState";
import WithCloseButton from "@/app/components/navigation/WithCloseButton";
import SavedFiltersList from "@/app/components/products/SavedFiltersList";
import SavedFiltersNotification from "@/app/components/products/SavedFiltersNotification";
import SavedFiltersTitle from "@/app/components/products/SavedFiltersTitle";
import useViewport from "@/app/components/hooks/useViewport";
import { viewport } from "@/app/components/data/universalStyles";
import MiniWithCloseButton from "@/app/components/navigation/MiniWithCloseButton";

export default function SavedFilters() {
  const { setShowSavedFiltersPopup } = useFilterStore()
  const viewportWidth = useViewport()

  return viewportWidth > viewport.xl ? (
    <WithCloseButton
      onClose={() => setShowSavedFiltersPopup(false)}
      padding="p-8"
      className="xl:h-[500px] w-[450px]"
    >
      <SavedFiltersTitle className="mb-3" />

      <SavedFiltersNotification />

      <SavedFiltersList />

    </WithCloseButton>

  ) : (
    <MiniWithCloseButton
      Title={SavedFiltersTitle}
      onClose={() => setShowSavedFiltersPopup(false)}>

      <SavedFiltersNotification />

      <SavedFiltersList />

    </MiniWithCloseButton>
  )
}
