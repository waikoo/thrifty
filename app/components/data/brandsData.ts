type Brands = {
  [key: string]: string[];
};

export const brands: Brands = {
  A: ['Adidas', 'Aldo', 'Asics'],
  B: ['Bershka', 'Billabong', 'Birkenstock'],
  C: ['Calvin Klein', 'Casio', 'CAT', 'Champion', 'Clarks', 'Columbia', 'Converse'],
  D: ['Desigual', 'Diesel', 'DKNY', 'Dr.Martens'],
  E: ['Esprit', 'Ellesse'],
  F: ['Fossil', 'Furia'],
  G: ['G-Star RAW', 'Gant', 'GAP', 'Geox', 'Guess'],
  H: ['H&M', 'Hugo Boss'],
  J: ['Jack Wolfskin'],
  L: ['Lacoste', 'LC WAIKIKI', 'Lee Cooper', "Levi's"],
  M: ['Mango', 'Marc Jacobs', "Marc O'Polo", 'Marks & Spencer', 'Massimo Dutti'],
  N: ['New Balance', 'NEXT', 'Nike', 'Nine West'],
  O: ["O'Neill', 'Only"],
  P: ['Pepe Jeans', 'Puma'],
  R: ['Reebok', 'Replay'],
  S: ['s.Oliver', 'Salomon', 'Skechers', 'Steve Madden', 'Stradivarius'],
  T: ['Tamaris', 'The North Face', 'Timberland', 'Tom Tailor', 'Tommy Hilfiger'],
  U: ['United Colors of Benetton'],
  V: ['Vagabond', 'Vans', 'Vero Moda'],
  Z: ['Zara'],
}

// All brands in one array
export const brandNamesArray = Object.values(brands).flat()
