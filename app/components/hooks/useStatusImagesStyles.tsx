import { useStatusBarStore } from "@/state/admin/statusBarState"

export default function useStatusImagesStyles() {
  const { draftLength, editedLength, statusBar } = useStatusBarStore()

  return {
    draftStyle: `${draftLength === 0 ? '' : 'hover:bg-darkgrey '}`,
    editedStyle: `${editedLength === 0 ? '' : 'hover:bg-darkgrey '}`,
    statusStyle: `${statusBar ? 'ring-1 ring-gray-300' : ''}`
  }
}
