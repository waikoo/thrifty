export function lowerCaseSpaceToDash(category: string) {
  if (!category.includes(' ')) {
    return category.toLowerCase()
  }
  return category.replace(' ', '-').toLowerCase();
}
