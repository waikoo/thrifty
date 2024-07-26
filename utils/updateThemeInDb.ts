import { supabase } from '@/app/supabase'
import { getUserId } from '@/utils/getUserId'

export const updateThemeInDb = async (localTheme: 'dark' | 'light') => {
  const userId = await getUserId()

  if (userId) {
    await supabase
      .from('clients')
      .update({ wants_dark: localTheme === 'dark' })
      .eq('client_id', userId);
  }
}
