import { supabase } from "@/app/supabase"
import { create } from 'zustand'

type CounterState = {
  created?: number,
  edited?: number,
}

type Product = {
  gender: string,
  category: string,
  type: string,
  price: string,
  discount: string,
  size: string,
  color: string,
  brand: string,
  condition: string,
  material: string,
  imgUrl: string[]
}

type State = {
  gender: string,
  category: string,
  type: string,
  price: string,
  discount: string,
  size: string,
  color: string,
  brand: string,
  condition: string,
  material: string,
  imgUrl: string[]
  counter: CounterState
  isDraftPostedSuccessfully: boolean
}

type Action = {
  setGender: (value: string) => void,
  setCategory: (value: string) => void,
  setType: (value: string) => void,
  setPrice: (value: string) => void,
  setDiscount: (value: string) => void,
  setSize: (value: string) => void,
  setColor: (value: string) => void,
  setBrand: (value: string) => void,
  setCondition: (value: string) => void,
  setMaterial: (value: string) => void,
  setImgUrl: (value: string[]) => void,
  setCounter: (value: Partial<CounterState>) => void,
  saveDraft: () => Promise<any>,
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
  imgUrl: [],
  counter: {
    created: 0,
    edited: 0,
  },
  isDraftPostedSuccessfully: false,
  setGender: (value: string) => set({ gender: value }),
  setCategory: (value: string) => set({ category: value }),
  setType: (value: string) => set({ type: value }),
  setPrice: (value: string) => set({ price: value }),
  setDiscount: (value: string) => set({ discount: value }),
  setSize: (value: string) => set({ size: value }),
  setColor: (value: string) => set({ color: value }),
  setBrand: (value: string) => set({ brand: value }),
  setCondition: (value: string) => set({ condition: value }),
  setMaterial: (value: string) => set({ material: value }),
  setImgUrl: (value: string[]) => set({ imgUrl: value }),
  setCounter: (value) => set(state => ({ counter: { ...state.counter, ...value } })),
  saveDraft: async () => {

    const product: Product = {
      gender: get().gender,
      category: get().category,
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
      imgUrl: [],
    })
  }
}))
