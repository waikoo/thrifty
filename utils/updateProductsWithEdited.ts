import { supabase } from "@/app/supabase";
import { ProductItemType } from "@/types/productItem";

export const updateProductsWithEdited = async () => {
  try {

    const { data, error: selectError } = await supabase
      .from('edited')
      .select('*');

    if (selectError) {
      console.error('Error selecting edited products:', selectError.message);
    }

    if (data) {
      data.forEach(async (editedProduct: ProductItemType) => {
        const { error } = await supabase
          .from('products')
          .update(editedProduct)
          .eq('uuid', editedProduct.uuid)

        if (!error) {
          const { error: deleteError } = await supabase
            .from('edited')
            .delete()
            .match({ uuid: editedProduct.uuid });

          if (deleteError) {
            console.log('Error deleting row:', deleteError.message);
            return;
          }

        } else {
          console.error("Error updating product:", error.message);
        }
      })
    }


  } catch (e: any) {
    console.log('Error updating products')
  }
}
