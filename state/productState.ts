import { supabase } from "@/app/supabase"
import { create } from 'zustand'

type CounterState = {
  created?: number,
  edited?: number,
}

type Product = {
  gender: string,
  type: string,
  price: number,
  discount: number,
  size: string,
  color: string,
  brand: string,
  condition: number,
  material: string,
  imgUrl: string[]
}

type State = {
  gender: string,
  type: string,
  price: number,
  discount: number,
  size: string,
  color: string,
  brand: string,
  condition: number,
  material: string,
  imgUrl: string[]
  counter: CounterState
  isDraftPostedSuccessfully: boolean
}

type Action = {
  setGender: (value: string) => void,
  setType: (value: string) => void,
  setPrice: (value: number) => void,
  setDiscount: (value: number) => void,
  setSize: (value: string) => void,
  setColor: (value: string) => void,
  setBrand: (value: string) => void,
  setCondition: (value: number) => void,
  setMaterial: (value: string) => void,
  setImgUrl: (value: string[]) => void,
  setCounter: (value: Partial<CounterState>) => void,
  saveDraft: () => Promise<any>,
  setIsDraftPostedSuccessfully: (value: boolean) => void
  resetProductFields: () => void
}

export const useProductStore = create<State & Action>((set, get) => ({
  gender: '',
  type: '',
  price: 0,
  discount: 0,
  size: '',
  color: '',
  brand: '',
  condition: 0,
  material: '',
  imgUrl: [],
  counter: {
    created: 0,
    edited: 0,
  },
  isDraftPostedSuccessfully: false,
  setGender: (value: string) => set({ gender: value }),
  setType: (value: string) => set({ type: value }),
  setPrice: (value: number) => set({ price: value }),
  setDiscount: (value: number) => set({ discount: value }),
  setSize: (value: string) => set({ size: value }),
  setColor: (value: string) => set({ color: value }),
  setBrand: (value: string) => set({ brand: value }),
  setCondition: (value: number) => set({ condition: value }),
  setMaterial: (value: string) => set({ material: value }),
  setImgUrl: (value: string[]) => set({ imgUrl: value }),
  setCounter: (value) => set(state => ({ counter: { ...state.counter, ...value } })),
  saveDraft: async () => {

    const product: Product = {
      gender: get().gender,
      type: get().type,
      price: get().price,
      discount: get().discount,
      size: get().size,
      color: get().color,
      brand: get().brand,
      condition: get().condition,
      material: get().material,
      imgUrl: get().imgUrl,
    };

    const { data, error } = await supabase.from('draft').insert([product]);

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
      type: '',
      price: 0,
      discount: 0,
      size: '',
      color: '',
      brand: '',
      condition: 0,
      material: '',
      imgUrl: [],
    })
  }
}))
