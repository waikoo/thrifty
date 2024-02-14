export const getSvgColor = (theme: 'light' | 'dark', invert = false) => {
  if (invert) {
    return theme === 'dark' ? '#191A1A' : '#fff'
  }
  return theme === 'dark' ? '#fff' : '#191A1A'
}
