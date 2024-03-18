export type TSavedFilters = {
  name: string
  wantsNotification: boolean
  filterId: string
  filters: {
    [key: string]: string
  },
}
