export const capitalize = (str: string) => {
  if (str.split(' ').length > 1) {
    return str
      .split(' ')
      .map(word => capitalizeAWord(word))
      .join(' ')
  }
  return capitalizeAWord(str)
}

const capitalizeAWord = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
