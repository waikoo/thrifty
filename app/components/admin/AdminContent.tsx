import { ImEnlarge } from "react-icons/im";
import { useDraftTable } from "../hooks";
import { AdminProductList } from ".";

export default function AdminContent() {
  const draft = useDraftTable()

  return (<>
    {/* <div id="popup-root"></div> */}
    <div className="text-bkg flex h-[500px] w-full gap-2">

      <div className="bg-content relative h-[70vh] w-[50%]">

        <AdminProductList draft={draft} />

        <div className="absolute bottom-2 flex w-full justify-between px-6">
          <span className="font-bold">NEW: {draft.length}</span>
          <ImEnlarge />
        </div>

      </div>

      <div className="bg-content relative h-[70vh] w-[50%]">

        <div className="align-center absolute bottom-2 flex w-full justify-between px-3">
          <span className="font-bold">EDITED: 0</span>
          <ImEnlarge />
        </div>

      </div>

    </div>
  </>)

}

