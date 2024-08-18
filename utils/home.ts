import { ProductItemType } from "@/types/productItem"

export const getText = (text: string) => {
  let currentText = text
  if (text.includes('_')) {
    currentText = text.replace('_', ' ')
  }
  return currentText.toUpperCase()
}

export const removeExtension = (filename: string) => {
  return filename.replace(/\.[^/.]+$/, "")
}

export const pluralToSingular = (text: string) => {
  if (text === 'women') return 'woman'
  if (text === 'men') return 'man'
  if (text === 'kids') return 'kid'
}

export const getColor = (state: string, theme: string) => {
  if (theme === 'light') {
    return state === 'new_in' ? 'bg-t_black' : 'bg-[#c2c2c2]'
  } else {
    return state === 'new_in' ? 'bg-t_white' : 'bg-[#c2c2c2]'
  }
}

export const getColor2 = (state: string, theme: string) => {
  if (theme === 'light') {
    return state === 'sale' ? 'bg-t_black' : 'bg-[#c2c2c2]'
  } else {
    return state === 'sale' ? 'bg-t_white' : 'bg-[#c2c2c2]'
  }
}

function isString(value: any): value is string {
  return typeof value === 'string';
}

export const completeWord = (searchTerm: string, data: ProductItemType[], columns: string[]) => {
  for (const entry of data) {
    for (const column of columns) {
      const value = entry[column];
      if (isString(value)) {
        if (searchTerm.toLowerCase().slice(0, 2) === value.toLowerCase().slice(0, 2)) {
          return value;
        }
      }
    }
  }
  return null;
};
