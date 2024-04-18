
import { create } from 'zustand'

import { HeroState } from '@/types/home'

export type State = {
  heroState: HeroState
}

type Action = {
  setHeroState: (state: HeroState) => void
}

export const useHomeStore = create<State & Action>(set => ({
  heroState: 'new_in',
  setHeroState: (state) => set(() => ({ heroState: state })),
}))
