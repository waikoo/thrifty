import { create } from 'zustand'

type TCheckoutStore = {
  isContactOpen: boolean
  setIsContactOpen: (value: boolean) => void
  isShippingOpen: boolean
  setIsShippingOpen: (value: boolean) => void
  isPaymentOpen: boolean
  setIsPaymentOpen: (value: boolean) => void
  firstName: string
  setFirstName: (value: string) => void
  lastName: string
  setLastName: (value: string) => void
  phone: string
  setPhone: (value: string) => void
  email: string
  setEmail: (value: string) => void
  address: string
  setAddress: (value: string) => void
  city: string
  setCity: (value: string) => void
  country: string
  setCountry: (value: string) => void
  zipcode: string
  setZipcode: (value: string) => void
  paymentType: string
  setPaymentType: (value: string) => void
  isCartOpen: boolean
  setIsCartOpen: (value: boolean) => void
  isContactHidden: boolean
  setIsContactHidden: (value: boolean) => void
  isShippingHidden: boolean
  setIsShippingHidden: (value: boolean) => void
  isPaymentHidden: boolean
  setIsPaymentHidden: (value: boolean) => void
  isContactErrorFree: boolean
  setIsContactErrorFree: (value: boolean) => void
  isShippingErrorFree: boolean
  setIsShippingErrorFree: (value: boolean) => void
  isPaymentErrorFree: boolean
  setIsPaymentErrorFree: (value: boolean) => void
  edit: string
  setEdit: (value: string) => void
}

export const useCheckoutStore = create<TCheckoutStore>((set) => ({
  isContactOpen: true,
  setIsContactOpen: (value) => set({ isContactOpen: value }),
  isShippingOpen: true,
  setIsShippingOpen: (value) => set({ isShippingOpen: value }),
  isPaymentOpen: true,
  setIsPaymentOpen: (value) => set({ isPaymentOpen: value }),
  firstName: '',
  setFirstName: (value) => set({ firstName: value }),
  lastName: '',
  setLastName: (value) => set({ lastName: value }),
  phone: '',
  setPhone: (value) => set({ phone: value }),
  email: '',
  setEmail: (value) => set({ email: value }),
  address: '',
  setAddress: (value) => set({ address: value }),
  city: '',
  setCity: (value) => set({ city: value }),
  country: '',
  setCountry: (value) => set({ country: value }),
  zipcode: '',
  setZipcode: (value) => set({ zipcode: value }),
  paymentType: 'cash',
  setPaymentType: (value) => set({ paymentType: value }),
  isCartOpen: false,
  setIsCartOpen: (value) => set({ isCartOpen: value }),
  isContactHidden: false,
  setIsContactHidden: (value) => set({ isContactHidden: value }),
  isShippingHidden: true,
  setIsShippingHidden: (value) => set({ isShippingHidden: value }),
  isPaymentHidden: true,
  setIsPaymentHidden: (value) => set({ isPaymentHidden: value }),
  isContactErrorFree: true,
  setIsContactErrorFree: (value) => set({ isContactErrorFree: value }),
  isShippingErrorFree: true,
  setIsShippingErrorFree: (value) => set({ isShippingErrorFree: value }),
  isPaymentErrorFree: false,
  setIsPaymentErrorFree: (value) => set({ isPaymentErrorFree: value }),
  edit: '',
  setEdit: (value) => set({ edit: value }),
}))
