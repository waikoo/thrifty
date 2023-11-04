import { IconPlus, LayoutMenuItem } from ".";
import { IconSearch } from "../navigation/icons";

export default function LayoutMenu() {

  return (
    <div className="flex gap-6">
      <LayoutMenuItem LayoutIcon={IconPlus} text='ADD NEW' />
      <LayoutMenuItem LayoutIcon={IconSearch} text='SEARCH ID' />
    </div>
  )
}
// TODO: add plus icon
