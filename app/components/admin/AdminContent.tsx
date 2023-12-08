import { ImEnlarge } from "react-icons/im";
import Image from 'next/image'
import { useDraftTable } from "../hooks";

export default function AdminContent() {
  const draft = useDraftTable()

  return (<>
    {/* <div id="popup-root"></div> */}
    <div className="text-bkg flex h-[500px] w-full gap-2">

      <div className="bg-content relative h-[70vh] w-[50%]">


        <div className="flex h-full w-full flex-wrap gap-[0.5rem] overflow-y-scroll rounded-lg p-6">
          {draft?.filter(el => el.img_url && el.img_url.length > 0).map((el, i) => (
            <div className="w-[19.1%] flex-grow-0 object-cover"
              key={i}
            >
              <Image
                className="block min-w-full"
                src={el.img_url[0]}
                alt={`new-product-${i}`}
                width={100}
                height={100} />
            </div>
          ))}
        </div>


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

