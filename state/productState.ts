import { supabase } from "@/app/supabase"
import { ProductItemType } from "@/types/productItem"
import { create } from 'zustand'

type CounterState = {
  created?: number,
  edited?: number,
}

type Product = {
  uuid?: string,
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
  saveDraft: (uuidMatch: ProductItemType[]) => Promise<any>,
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
  saveDraft: async (uuidMatch: ProductItemType[]) => {

    const product: Product = {
      uuid: uuidMatch[0].uuid,
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
      img_url: get().img_url,
    };


    console.warn(product.price)
    if (uuidMatch[0].uuid) {
      const { data: updateData, error: updateError } = await supabase
        .from('draft')
        .update(product)
        .eq('uuid', uuidMatch[0].uuid)
        .select()

      console.log(updateError)
      if (!updateError) {
        get().resetProductFields()
        console.log('-------Data Updated----------')
        console.log(updateData)
        return
      }

      if (updateError) {
        console.log('updateErrorMessage: ------------------------------------------')
        console.log(updateError.message)
        return
      } else {
        console.log('updatedData: ------------------------------------------')
        console.log(updateData)
        return
      }
    }

    const { data, error } = await supabase.from('draft').insert([product]);

    if (error) console.log(error)

    if (!data && !error) {
      get().setIsDraftPostedSuccessfully(true)
      get().resetProductFields()
      get().setCounter({ created: get().counter.created ? get().counter.created! + 1 : 1 })
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
