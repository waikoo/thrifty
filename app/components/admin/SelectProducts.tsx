import { supabase } from "@/app/supabase"
import { useDraftStore, useUIStore } from "@/state"

export default function SelectProducts() {
  const { toggleSelected, setToggleSelected } = useUIStore()
  const { selectedItems } = useDraftStore()
  const { draftLength } = useUIStore()
  const mainStyle = draftLength > 0 ? 'text-content cursor-pointer' : 'text-grey cursor-not-allowed'

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

  const selectHandler = () => {
    if (draftLength === 0) return

    setToggleSelected(!toggleSelected)
  }

  return (
    <div className="flex items-baseline gap-4 text-[0.8125rem] font-semibold">
      <span
        className={`text-bold w-content underline underline-offset-4 ${mainStyle}`}
        onClick={selectHandler}
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
