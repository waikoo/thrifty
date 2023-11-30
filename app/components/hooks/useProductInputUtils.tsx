import { useProductStore } from "@/state/productState"

export type FieldName = 'price' | 'discount' | 'size';
export default function useProductInputUtils() {
  const { price, discount, size, setPrice, setDiscount, setSize } = useProductStore()


  const handlers: Record<FieldName, (value: string) => void> = {
    price: (value: string) => setPrice(value.replace(/[^0-9]/g, '')),
    discount: (value: string) => setDiscount(value.replace(/[^0-9]/g, '')),
    size: setSize,
  };

  const getOnChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: FieldName) => {
    const handler = handlers[fieldName];
    if (!handler) {
      throw new Error(`"name" in getOnChange() from ProductInput does not match`);
    }
    handler(e.target.value);
  };

  const values: Record<FieldName, string> = {
    price,
    discount,
    size,
  };

  const getValue = (fieldName: FieldName) => {
    const value = values[fieldName];
    if (value === undefined) {
      throw new Error(`"name" in getValue() from ProductInput does not match`);
    }
    return value;
  };

  return {
    getOnChange,
    getValue,
  }
}
