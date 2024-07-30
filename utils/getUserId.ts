import { supabase } from '@/app/supabase'

export const getUserId = async () => {
  const { data: { user }, error } = await supabase.auth.getUser()
  if (error) {
    console.log(error)
  }
  return user?.id
}
