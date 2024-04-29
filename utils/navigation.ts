export const getLocalPartOfEmail = (email: string) => {
  return email.split('@')[0]
}
