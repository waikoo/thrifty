import { ImEnlarge } from "react-icons/im";
import Image from 'next/image'
import { useDraftTable } from "../hooks";
import { useState } from "react";

export default function AdminContent() {
  const draft = useDraftTable()
  const [showPopup, setShowPopup] = useState(new Array(draft.length).fill(false))

  console.table(draft)

  const onMouseOver = (i: number) => {
    setShowPopup(prevState => {
      const newState = [...prevState];
      newState[i] = true;
      return newState;
    });
  }

  const onMouseLeave = (i: number) => {
    setShowPopup(prevState => {
      const newState = [...prevState];
      newState[i] = false;
      return newState;
    });
  }

  return (<>
    {/* <div id="popup-root"></div> */}
    <div className="text-bkg flex h-[500px] w-full gap-2">

      <div className="bg-content relative h-[70vh] w-[50%]">

        <div className="flex h-full w-full flex-wrap gap-[0.5rem] overflow-y-scroll rounded-lg p-6">
          {draft?.filter(el => el.img_url && el.img_url.length > 0).map((el, i) => (
            <div className="w-[19.1%] flex-grow-0 object-cover"
              key={i}
              data-uuid={el.uuid}
              data-created-at={el.created_at}
              data-gender={el.gender}
              data-category={el.category}
              data-price={el.price}
              data-discount={el.discount}
              data-size={el.size}
              data-color={el.color}
              data-brand={el.brand}
              data-condition={el.condition}
              data-material={el.material}
              data-images-length={el.img_url.length}
              onMouseOver={() => onMouseOver(i)}
              onMouseLeave={() => onMouseLeave(i)}
            >
              <Image
                className="block min-w-full"
                src={el.img_url[0]}
                alt={`new-product-${i}`}
                width={100}
                height={100} />
              {showPopup[i] &&
                <section >
                  <div className="flex gap-2">
                    <span>ID</span>
                    <span>{el.uuid}</span>
                  </div>
                </section>
              }
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

