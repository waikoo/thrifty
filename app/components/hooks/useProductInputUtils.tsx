import { useProductStore } from "@/state/productState"

export default function useProductInputUtils() {
  const { price, discount, size, setPrice, setDiscount, setSize } = useProductStore()

  const getOnChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    switch (fieldName) {
      case 'price': setPrice(+e.target.value);
        break;
      case 'discount': setDiscount(+e.target.value);
        break;
      case 'size': setSize(e.target.value);
        break;
      default:
        throw new Error('"name" in getOnChange() from ProductInput does not match')
    }
  };

  const getValue = (fieldName: string) => {
    switch (fieldName) {
      case 'price': return price;
      case 'discount': return discount;
      case 'size': return size;
      default:
        throw new Error('"name" in getValue() from ProductInput does not match')
    }
  };

  const getType = (fieldName: string) => {
    switch (fieldName) {
      case 'price': return 'number';
      case 'discount': return 'number';
      case 'size': return 'text';
      default:
        throw new Error('"name" in getType() from ProductInput does not match')
    }
  }

  return {
    getOnChange,
    getValue,
    getType
  }
}
