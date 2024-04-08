import { create } from 'zustand'
import { supabase } from '@/app/supabase'

type TProfile = {
  currentEmail: string
  setCurrentEmail: (value: string) => void
  newEmail: string
  setNewEmail: (value: string) => void
  password: string
  setPassword: (value: string) => void
  currentPassword: string
  setCurrentPassword: (value: string) => void
  newPassword: string
  setNewPassword: (value: string) => void
  updateEmail: () => void
  updatePassword: () => void
}

export const useProfile = create<TProfile>((set, get) => ({
  currentEmail: '',
  setCurrentEmail: (value) => set({ currentEmail: value }),
  newEmail: '',
  setNewEmail: (value) => set({ newEmail: value }),
  password: '',
  setPassword: (value) => set({ password: value }),
  currentPassword: '',
  setCurrentPassword: (value) => set({ currentPassword: value }),
  newPassword: '',
  setNewPassword: (value) => set({ newPassword: value }),
  updateEmail: async () => {
    const { data, error } = await supabase.auth.updateUser({
      email: get().newEmail,
    })
    if (error) console.error(error)
  },
  updatePassword: async () => {
    const { data, error } = await supabase.auth.updateUser({
      password: get().newPassword
    })
    if (error) console.error(error)
  }
}))
