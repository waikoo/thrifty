import { supabase } from "@/app/supabase"

export const saveDraftToProducts = async () => {
  try {
    const { data, error: selectError } = await supabase.from(`draft`).select('*')

    if (selectError) {
      throw selectError
    }

    if (data && data.length > 0) {
      const { error: insertError } = await supabase.from('products').insert(data)

      if (insertError) {
        throw insertError
      }
      const { error: deleteError } = await supabase.from('draft').delete().not("uuid", "is", null)

      if (deleteError) {
        throw deleteError
      }
      console.log('Data moved successfully & draft deleted')
    } else {
      console.log('No data found in draft')
    }
  } catch (e: any) {
    console.log('Error moving data: ' + e.message)
  }
}

