import { ImEnlarge } from "react-icons/im";
import { useDraftTable } from "../hooks";
import { AdminProductList, AdminProductStatus } from ".";

export default function AdminContent() {
  const draft = useDraftTable()

  return (<>
    {/* <div id="popup-root"></div> */}
    <div className="text-bkg flex h-[500px] w-full gap-2">

      <div className="bg-content relative h-[70vh] w-[50%]">
        <AdminProductList draft={draft} />
        <AdminProductStatus draft={draft}>NEW</AdminProductStatus>
      </div>

      <div className="bg-content relative h-[70vh] w-[50%]">
        <AdminProductStatus>EDITED</AdminProductStatus>
      </div>

    </div>
  </>)

}

