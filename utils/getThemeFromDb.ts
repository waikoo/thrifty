import { supabase } from '@/app/supabase'
import { getUserId } from '@/utils/getUserId'

export const getThemeFromDb = async (): Promise<'dark' | 'light' | null> => {
  const userId = await getUserId()

  if (userId) {
    const { data, error } = await supabase
      .from('clients')
      .select('wants_dark')
      .eq('client_id', userId);
    if (error) console.log(error)
    if (data) {
      return data[0].wants_dark
    }
  }
  return null

}
