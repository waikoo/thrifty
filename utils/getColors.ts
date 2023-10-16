import { supabase } from '@/app/supabase'
import { Category, TColor } from '@/types/home'
import { cache } from 'react'

export const getColors = cache(async (category: Category['category']) => {
  let { data: colors, error } = await supabase
    .from('colors')
    .select()
    .eq('gender', category)

  return colors as TColor[] | null
})
