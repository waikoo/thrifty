import { ProductItemType } from "@/types/productItem";
import { useState } from "react";

export default function useSummaryPopup(draft: ProductItemType[]) {
  const [showPopup, setShowPopup] = useState(new Array(draft.length).fill(false))

  const onMouseHandler = (i: number, boolean: boolean) => {
    setShowPopup(prevState => {

      const newState = [...prevState];
      newState[i] = boolean;
      return newState;
    });
  }

  return {
    showPopup,
    onMouseHandler
  }
}
