import { useUIStore } from "@/state"

export default function useStatusImagesStyles() {
  const { draftLength, editedLength, statusBar } = useUIStore()

  return {
    draftStyle: `${draftLength === 0 ? '' : 'hover:bg-darkgrey '}`,
    editedStyle: `${editedLength === 0 ? '' : 'hover:bg-darkgrey '}`,
    statusStyle: `${statusBar ? 'ring-1 ring-gray-300' : ''}`
  }
}
