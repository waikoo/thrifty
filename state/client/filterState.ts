import { TSavedFilters } from "@/types/filters"
import { supabase } from '@/app/supabase'
import { create } from 'zustand'

type FilterStore = {
  showSavedFiltersPopup: boolean,
  setShowSavedFiltersPopup: (value: boolean) => void
  showNewFilterPopup: boolean,
  setShowNewFilterPopup: (value: boolean) => void
  currentFilters: {
    [key: string]: string
  },
  setCurrentFilters: (value: {}) => void
  removeFilter: (objectKey: string, objectValue: string) => void
  saveFilterToDb: (filter: {}, client_id: string, client_email: string) => void
  changeNotification: (filterName: string, client_id: string) => void
  deleteFilter: (filterName: string, client_id: string) => void
  setEditingFilterId: (value: string) => void
  editingFilterId: string
  updateFilterInDb: (filter: TSavedFilters, client_id: string) => void
  getFilterFromDb: (client_id: string, filterId: string) => Promise<TSavedFilters>
  hideFilters: boolean
  setHideFilters: (value: boolean | (boolean)) => void
  showMiniFilters: boolean
  setShowMiniFilters: (value: boolean) => void
}

export const useFilterStore = create<FilterStore>((set, get) => ({
  showSavedFiltersPopup: false,
  setShowSavedFiltersPopup: (value) => set({ showSavedFiltersPopup: value }),
  showNewFilterPopup: false,
  setShowNewFilterPopup: (value) => set({ showNewFilterPopup: value }),
  currentFilters: {},
  setCurrentFilters: (value) => set({ currentFilters: value }),
  removeFilter: (objectKey, objectValue) => {
    const newFilters = { ...get().currentFilters }

    if (!(newFilters[objectKey]).includes(',')) { // if only one entry present, remove key
      delete newFilters[objectKey]
    } else if (newFilters[objectKey].split(',').length > 1) { // if more entries present, delete only value
      newFilters[objectKey] = newFilters[objectKey].split(',').filter((val) => val !== objectValue.toLowerCase()).join(',')
    }
    set({ currentFilters: newFilters })
  },
  saveFilterToDb: async (filter, client_id, client_email) => {
    const { data, error } = await supabase
      .from('clients')
      .select('saved_filters')
      .eq('client_id', client_id)

    if (error) console.error(error)
    const savedFiltersInDb = data?.[0].saved_filters
    console.log(savedFiltersInDb)

    if (savedFiltersInDb === null) { // update 1st time
      const { data: insertData, error: insertError } = await supabase
        .from('clients')
        .update({ saved_filters: [filter] })
        .eq('client_id', client_id)
        .eq('email', client_email)

      if (insertError) console.error(insertError);
      else console.log('inserted successfully')
    } else { // update existing filters

      savedFiltersInDb.push(filter)

      const { data: updateData, error: updateError } = await supabase
        .from('clients')
        .update({ saved_filters: savedFiltersInDb })
        .eq('client_id', client_id)
        .eq('email', client_email)
      if (updateError) console.error(updateError);
      else console.log('updated successfully')
    }
  },
  changeNotification: async (filterId, client_id) => {
    const { data, error } = await supabase
      .from('clients')
      .select('saved_filters')
      .eq('client_id', client_id)

    if (error) console.error(error)
    const savedFiltersInDb = data?.[0].saved_filters

    if (savedFiltersInDb) {
      const index = savedFiltersInDb.findIndex((filter: TSavedFilters) => filter.filterId === filterId)
      savedFiltersInDb[index].wantsNotification = !savedFiltersInDb[index].wantsNotification

      const { data: updateData, error: updateError } = await supabase
        .from('clients')
        .update({ saved_filters: savedFiltersInDb })
        .eq('client_id', client_id)
      if (updateError) console.error(updateError);
      else console.log('notification setting updated successfully')
    }
  },
  deleteFilter: async (filterId, client_id) => {
    const { data, error } = await supabase
      .from('clients')
      .select('saved_filters')
      .eq('client_id', client_id)

    if (error) console.error(error)
    const savedFiltersInDb = data?.[0].saved_filters

    if (savedFiltersInDb) {
      const index = savedFiltersInDb.findIndex((filter: TSavedFilters) => filter.filterId === filterId)
      const updatedFilters = savedFiltersInDb.toSpliced(index, 1)

      const { data: updateData, error: updateError } = await supabase
        .from('clients')
        .update({ saved_filters: updatedFilters })
        .eq('client_id', client_id)
      if (updateError) console.error(updateError);
      else console.log('filter deletion successful')
    }
  },
  editingFilterId: '',
  setEditingFilterId: (value) => set({ editingFilterId: value }),
  updateFilterInDb: async (matchedFilter, client_id) => {
    const { data, error } = await supabase
      .from('clients')
      .select('saved_filters')
      .eq('client_id', client_id)
    if (error) console.error(error)

    const savedFiltersInDb = data?.[0].saved_filters // get filters from db

    const updatedFilters = savedFiltersInDb.map((filter: TSavedFilters) => {
      if (filter.filterId === matchedFilter.filterId) {
        return { ...filter, ...matchedFilter }; // spread matchedFilter over old values
      }
      return filter;
    });

    const { data: updateData, error: updateError } = await supabase
      .from('clients')
      .update({ saved_filters: updatedFilters }) // update filters in db
      .eq('client_id', client_id)
    if (updateError) console.error(updateError);
    else console.log('filter modified successfully')
  },
  getFilterFromDb: async (client_id, filterId) => {
    const { data, error } = await supabase
      .from('clients')
      .select('saved_filters')
      .eq('client_id', client_id)

    if (error) console.error(error)

    const savedFiltersInDb = data?.[0].saved_filters

    if (savedFiltersInDb) {
      const matchedFilter = savedFiltersInDb.find((filter: TSavedFilters) => filter.filterId === filterId)
      return matchedFilter
    } else {
      throw new Error('No filter found')
    }
  },
  hideFilters: false,
  setHideFilters: (value) => set({ hideFilters: value }),
  showMiniFilters: false,
  setShowMiniFilters: (value: boolean) => set({ showMiniFilters: value }),
}))

type TFilterTitleState = {
  allFilters: string[],
  expandedFilters: string[]
  areAllExpanded: boolean
  setAllFilters: (componentId: string) => void
  setExpandedFilter: (componentId: string) => void
  unsetExpandedFilter: (componentId: string) => void
  expandAllFilters: () => void
  collapseAllFilters: () => void
}

export const useFilterTitleStore = create<TFilterTitleState>((set) => ({
  allFilters: ['CATEGORY', 'SHOP BY', 'PRODUCT TYPE', 'COLOR', 'BRAND', 'CONDITION', 'MATERIAL', 'SIZE', 'DATE ADDED'],
  expandedFilters: [],
  areAllExpanded: false,
  setAllFilters: (componentId) => set((state) => ({
    allFilters: [...state.allFilters, componentId],
  })),
  setExpandedFilter: (componentId) => set((state) => {
    const expandedFilters = [...state.expandedFilters, componentId]
    const areAllExpanded = state.allFilters.every(id => expandedFilters.includes(id))
    return {
      expandedFilters,
      areAllExpanded
    }
  }),
  unsetExpandedFilter: (componentId) => set((state) => {
    const expandedFilters = state.expandedFilters.filter(id => id !== componentId)
    const areAllExpanded = state.allFilters.every(id => expandedFilters.includes(id))
    return {
      expandedFilters,
      areAllExpanded
    }
  }),
  expandAllFilters: () => set((state) => ({
    expandedFilters: state.allFilters,
    areAllExpanded: true
  })),
  collapseAllFilters: () => set({
    expandedFilters: [],
    areAllExpanded: false
  }),
}));
