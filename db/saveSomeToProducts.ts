import { supabase } from "@/app/supabase"

export const saveSomeToProducts = async (fromTable: string, selectedItems: string[]) => {

  try {
    for (const uuid of selectedItems) {
      const { data: rows, error: selectError } = await supabase
        .from(fromTable)
        .select('*')
        .match({ uuid: uuid });

      if (selectError) {
        console.log('Error selecting row:', selectError.message);
        return;
      }

      if (rows.length === 0) {
        console.log(`Row with UUID ${uuid} not found in draft table`);
        continue;
      }

      const selectedRow = rows[0];

      const { error: insertError } = await supabase
        .from('products')
        .insert(selectedRow);

      if (insertError) {
        console.log('Error inserting row:', insertError.message);
        return;
      }

      const { error: deleteError } = await supabase
        .from(fromTable)
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

