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
    return state === 'new_in' ? 'bg-t_black' : 'bg-gray-300'
  } else {
    return state === 'new_in' ? 'bg-t_white' : 'bg-gray-300'
  }
}

export const getColor2 = (state: string, theme: string) => {
  if (theme === 'light') {
    return state === 'sale' ? 'bg-t_black' : 'bg-gray-300'
  } else {
    return state === 'sale' ? 'bg-t_white' : 'bg-gray-300'
  }
}
