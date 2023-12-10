import { ProductItemType } from "@/types/productItem"
import { useState } from "react"
import Image from 'next/image'

type AdminProductListProps = {
  draft: ProductItemType[]
}

export default function AdminProductList({ draft }: AdminProductListProps) {

  const [showPopup, setShowPopup] = useState(new Array(draft.length).fill(false))

  // console.table(draft)
  console.log('ProductList')

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
  return (
    <div className="flex h-full w-full flex-wrap gap-[0.5rem] overflow-y-scroll rounded-lg p-6">
      {draft?.filter(el => el.img_url && el.img_url.length > 0).map((el, i) => (
        <div className="w-[19.1%] flex-grow-0 object-cover"
          key={i}
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
                <span>{el.created_at}</span>
              </div>
            </section>
          }
        </div>
      ))}
    </div>

  )
}
