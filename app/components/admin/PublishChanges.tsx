"use client"
import { supabase } from "@/app/supabase"
import { useDraftStore } from "@/state"
import { useRouter } from "next/navigation"
import { twMerge as tm } from "tailwind-merge"

type PublishChangesProps = {
  className?: string
  publishSome?: boolean
}

export default function PublishChanges({ className, publishSome }: PublishChangesProps) {
  const { selectedItems } = useDraftStore()
  const router = useRouter()

  const onClick = async () => {
    if (!publishSome) await saveDraftToProducts()
    else await saveSomeToProducts()
  }

  const saveSomeToProducts = async () => {

    try {
      // Loop through the UUIDs and move the matching rows to the products table
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
      router.refresh()
    } catch (e: any) {
      console.log('Error moving rows:', e.message);
    }
  }

  const saveDraftToProducts = async () => {
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

  return (
    <button className={tm(`bg-bkg whitespace-nowrap text-content cursor-pointer justify-self-end px-12 py-3 font-semibold tracking-wider hover:bg-content hover:text-bkg ${className}`)}
      onClick={onClick}
    >
      PUBLISH CHANGES
    </button>
  )
}
function saveSomeToProducts() {
  throw new Error("Function not implemented.")
}

