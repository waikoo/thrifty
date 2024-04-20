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
