import { create } from 'zustand'
import { DELIVERY } from '@/app/components/data/orderSummary'

type TOrderStore = {
  shippingType: string
  isFreeDelivery: boolean
  setShippingType: (value: string) => void
  setIsFreeDelivery: (value: boolean) => void
}

export const useOrderStore = create<TOrderStore>((set) => ({
  shippingType: 'home',
  isFreeDelivery: false,
  setShippingType: (value) => set({ shippingType: value }),
  setIsFreeDelivery: (value) => set({ isFreeDelivery: value }),
}))

type TOrderSummaryStore = {
  shippingPrice: number
  setShippingPrice: (value: number) => void
  shippingText: string
  setShippingText: (value: string) => void
  totalWithShipping: number
  setTotalWithShipping: (value: number) => void
}

export const useOrderSummaryStore = create<TOrderSummaryStore>((set) => ({
  shippingPrice: DELIVERY.home,
  setShippingPrice: (value) => set({ shippingPrice: value }),
  shippingText: DELIVERY.home.toString(),
  setShippingText: (value) => set({ shippingText: value }),
  totalWithShipping: 0,
  setTotalWithShipping: (value) => set({ totalWithShipping: value }),
}))

