import { supabase } from "@/app/supabase"
import { create } from 'zustand'


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
  setImgUrl: (value: string[]) => void
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


  // saveDraft: async (column, value) => {
  //
  //   const { data, error } = await supabase
  //     .from('draft')
  //     .insert([
  //       { column: 'someValue', other_column: 'otherValue' },
  //     ])
  //     .select()
  //
  // }
}))
