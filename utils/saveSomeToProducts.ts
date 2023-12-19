import { supabase } from "@/app/supabase"

export const saveSomeToProducts = async (selectedItems: string[]) => {

  try {
    for (const uuid of selectedItems) {
      const { data: draftRows, error: draftError } = await supabase
        .from('draft')
        .select('*')
        .match({ uuid: uuid });

      if (draftError) {
        console.log('Error selecting row:', draftError.message);
        return;
      }

      if (draftRows.length === 0) {
        console.log(`Row with UUID ${uuid} not found in draft table`);
        continue;
      }

      const draftRow = draftRows[0];

      const { error: insertError } = await supabase
        .from('products')
        .insert(draftRow);

      if (insertError) {
        console.log('Error inserting row:', insertError.message);
        return;
      }

      const { error: deleteError } = await supabase
        .from('draft')
        .delete()
        .match({ uuid: uuid });

      if (deleteError) {
        console.log('Error deleting row:', deleteError.message);
        return;
      }

      console.log(`Row with UUID ${uuid} moved to products table`);
    }
    console.log('All rows moved successfully');
  } catch (e: any) {
    console.log('Error moving rows:', e.message);
  }
}

