export const capitalize = (str: string) => {
  if (str.split(' ').length > 1) {
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }
  return str.charAt(0).toUpperCase() + str.slice(1)
}
