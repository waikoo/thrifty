export default function updateLocalStorage(productUuid: string, favorites: string[]) {
  if (!localStorage.getItem('favorites')?.includes(productUuid)) {
    localStorage.setItem('favorites', JSON.stringify([...favorites, productUuid]))
  } else {
    localStorage.setItem('favorites', JSON.stringify(favorites.filter(uuid => uuid !== productUuid)))
  }
}
