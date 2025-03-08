import { useStatusBarStore } from "@/state/admin/statusBarState"

export default function useStatusImagesStyles() {
  const { draftLength, editedLength, statusBar } = useStatusBarStore()

  return {
    draftStyle: `${draftLength === 0 ? '' : 'hover:bg-darkgrey '}`,
    editedStyle: `${editedLength === 0 ? '' : 'hover:bg-darkgrey '}`,
    statusStyle: `${statusBar ? 'shadow-[inset_0_0_7px_4px_rgba(0,0,0,0.25)] border-[#f2f2f2]' : ''}`
  }
}
