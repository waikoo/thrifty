"use client"
import { useState } from "react";

export default function useProductState(initialArray: string[]) {
  const [productArray, setProductArray] = useState(initialArray);

  const addItem = (newItem: string) => {
    setProductArray((prevProductArray) => [newItem, ...prevProductArray]);
  };

  return { productArray, addItem };
}
