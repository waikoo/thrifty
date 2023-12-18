import { supabase } from "@/app/supabase"
import { useDraftStore, useUIStore } from "@/state"

export default function SelectProducts() {
  const { toggleSelected, setToggleSelected } = useUIStore()
  const { selectedItems } = useDraftStore()

  const deleteSelected = async () => {
    selectedItems.forEach(async (uuid) => {
      const { data, error } = await supabase
        .from('draft')
        .delete()
        .match({ uuid: uuid });

      if (error) {
        console.log('Error deleting row:', error.message);
      } else {
        console.log('Row deleted successfully:', data);
      }
      console.log('All rows deleted successfully');
    });
  }

  return (
    <div className="flex items-baseline gap-4 text-[0.8125rem] font-semibold">
      <span
        className="text-bold text-content w-content cursor-pointer underline underline-offset-4"
        onClick={() => setToggleSelected(!toggleSelected)}
      >
        {!toggleSelected ? 'SELECT' : 'CANCEL'}
      </span>

      {toggleSelected && (
        <span
          className="text-bkg bg-content cursor-pointer p-1"
          onClick={deleteSelected}
        >
          DELETE SELECTED
        </span>
      )}
    </div>
  )
}
