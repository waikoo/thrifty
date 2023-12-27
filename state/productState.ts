import { useUserSession } from "@/app/components/hooks"
import { supabase } from "@/app/supabase"
import { ProductItemType } from "@/types/productItem"
import { queryByUUID } from "@/utils/serverQueryByUUID"
import { create } from 'zustand'

type CounterState = {
  created?: number,
  edited?: number,
}

type Product = {
  uuid?: string | undefined,
  gender: string,
  category: string,
  type: string,
  price: string,
  discount: string | number,
  size: string,
  color: string,
  brand: string,
  condition: string,
  material: string,
  img_url: string[]
}

type State = {
  gender: string,
  category: string,
  type: string,
  price: string,
  discount: string | number,
  size: string,
  color: string,
  brand: string,
  condition: string,
  material: string,
  img_url: string[]
  counter: CounterState
  isDraftPostedSuccessfully: boolean
}

type Action = {
  setGender: (value: string) => void,
  setCategory: (value: string) => void,
  setType: (value: string) => void,
  setPrice: (value: string) => void,
  initPrice: (value: string) => void,
  setDiscount: (value: string) => void,
  initDiscount: (value: string) => void,
  setSize: (value: string) => void,
  initSize: (value: string) => void,
  setColor: (value: string) => void,
  setBrand: (value: string) => void,
  setCondition: (value: string) => void,
  setMaterial: (value: string) => void,
  setImgUrl: (value: string[]) => void,
  setCounter: (value: Partial<CounterState>) => void,
  getValues: (uuid?: string) => Product,
  handleManageSave: (uuid?: queryByUUID | ProductItemType[]) => Promise<any>,
  addToEdited: (uuid: string) => Promise<any>,
  addToDraft: () => Promise<any>,
  updateDraft: (uuid: string) => Promise<any>,
  updateEdited: (uuid: string) => Promise<any>,
  setIsDraftPostedSuccessfully: (value: boolean) => void
  resetProductFields: () => void
}

export const useProductStore = create<State & Action>((set, get) => ({
  gender: '',
  category: '',
  type: '',
  price: '',
  discount: '',
  size: '',
  color: '',
  brand: '',
  condition: '',
  material: '',
  img_url: [],
  counter: {
    created: 0,
    edited: 0,
  },
  isDraftPostedSuccessfully: false,
  setGender: (value: string) => set({ gender: value }),
  setCategory: (value: string) => set({ category: value }),
  setType: (value: string) => set({ type: value }),
  setPrice: (value: string) => set({ price: value }),
  initPrice: (value: string) => set({ price: value }),
  setDiscount: (value: string) => set({ discount: value }),
  initDiscount: (value: string) => set({ discount: value }),
  setSize: (value: string) => set({ size: value }),
  initSize: (value: string) => set({ size: value }),
  setColor: (value: string) => set({ color: value }),
  setBrand: (value: string) => set({ brand: value }),
  setCondition: (value: string) => set({ condition: value }),
  setMaterial: (value: string) => set({ material: value }),
  setImgUrl: (value: string[]) => set({ img_url: value }),
  setCounter: (value) => set(state => ({ counter: { ...state.counter, ...value } })),
  getValues: (uuid?: string) => {
    const product: Product = {
      gender: get().gender,
      category: get().category,
      type: get().type,
      price: get().price,
      discount: get().discount || 0,
      size: get().size,
      color: get().color,
      brand: get().brand,
      condition: get().condition,
      material: get().material,
      img_url: get().img_url
    }

    if (uuid) {
      product.uuid = uuid
    }
    return product
  },
  handleManageSave: async (arg?: queryByUUID | ProductItemType[]) => {
    if (Array.isArray(arg)) {
      await get().addToDraft()
    } else {
      if (arg?.tableOfOrigin === 'draft') await get().updateDraft(arg.value[0].uuid)
      if (arg?.tableOfOrigin === 'edited') {
        await get().updateEdited(arg.value[0].uuid)
        return
      }
      if (arg?.tableOfOrigin === 'products') await get().addToEdited(arg.value[0].uuid)
    }
  },
  addToEdited: async (uuid: string) => {
    const { data: editedData, error: editedError } = await supabase
      .from('edited')
      .insert([get().getValues(uuid)])
      .select()

    if (editedError) console.log(editedError.message)

    if (editedData && !editedError) {
      get().resetProductFields()
    }
  },
  addToDraft: async () => {
    const { data, error } = await supabase.from('draft').insert([get().getValues()]);
    if (error) console.log(error.message)

    if (!data && !error) {
      get().setIsDraftPostedSuccessfully(true)
      get().resetProductFields()
      get().setCounter({ created: get().counter.created ? get().counter.created! + 1 : 1 })
    }
  },
  updateDraft: async (uuid: string) => {
    if (typeof uuid !== 'string') {
      throw new Error("UUID must be a string")
    }

    if (!get().getValues(uuid).uuid) {
      console.error('Cannot update draft without UUID')
      return
    }

    try {
      const { data: updateData, error: updateError } = await supabase
        .from('draft')
        .update(get().getValues(uuid))
        .eq('uuid', uuid)
        .select()

      if (updateError) {
        console.error(updateError.message)
      } else {
        get().resetProductFields()
        console.log(updateData)
      }
    } catch (error) {
      console.error(error)
    }
  },
  updateEdited: async (uuid: string) => {
    try {
      const { data: updateData, error: updateError } = await supabase
        .from('edited')
        .update(get().getValues(uuid))
        .eq('uuid', uuid)
        .select()

      if (updateError) {
        console.error(updateError.message)
      } else {
        get().resetProductFields()
        console.log(updateData)
      }
    } catch (error) {
      console.error(error)
    }
  },
  setIsDraftPostedSuccessfully: (value: boolean) => set({ isDraftPostedSuccessfully: value }),
  resetProductFields: () => {
    set({
      gender: '',
      category: '',
      type: '',
      price: '',
      discount: '',
      size: '',
      color: '',
      brand: '',
      condition: '',
      material: '',
      img_url: [],
    })
  }
}))
