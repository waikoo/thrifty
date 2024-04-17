export const getText = (text: string) => {
  let currentText = text
  if (text.includes('_')) {
    currentText = text.replace('_', ' ')
  }
  return currentText.toUpperCase()
}
