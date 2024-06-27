interface FilterType {
  men: { [key: string]: string[] };
  women: { [key: string]: string[] };
  kids: { [key: string]: string[] };
  all: { [key: string]: string[] };
  [key: string]: { [key: string]: string[] };
}

interface TFilter {
  // gender: ["Men", "Women", "Kids"];
  gender: string[]
  shopBy: string[];
  category: string[]
  // category: ["Clothing", "Shoes", "Accessories"];
  type: FilterType;
  size: string[];
  color: string[];
  condition: [5, 4, 3];
  material: string[];
  dateAdded: ["Today", "Last 3 days", "This Week"];
}

export const filter: TFilter = {
  gender: ["Men", "Women", "Kids"],
  shopBy: ["New In", "Promos"],
  category: ["Clothing", "Shoes", "Accessories"],
  type: {
    men: {
      all: ["Coats", "Jackets", "Tops", "T-Shirts", "Sweaters", "Jeans", "Pants", "Boots", "Elegant", "Sandals", "Slippers", "Bags", "Sunglasses", "Watches", "Hats", "Belts", "Sneakers", "Joggers", "Hoodies", "Tops"],
      clothing: ["Coats", "Jackets", "Tops", "T-Shirts", "Sweaters", "Jeans", "Pants"],
      shoes: ["Boots", "Elegant", "Sandals", "Slippers", "Sneakers"],
      accessories: ["Hats", "Sunglasses", "Watches", "Belts", "Bags"],
    },
    women: {
      all: ["Jackets", "Coats", "Dresses", "Tops", "T-Shirts", "Jeans", "Pants", "Skirts", "Dresses", "Boots", "Heels", "Flats", "Sandals", "Slippers", "Bags", "Sunglasses", "Jewellery", "Watches", "Hats", "Belts", "Sneakers", "Joggers", "Hoodies"],
      accessories: ["Hats", "Jewellery", "Sunglasses", "Watches", "Belts", "Bags"],
      shoes: ["Sneakers", "Boots", "Heels", "Flats", "Sandals", "Slippers"],
      clothing: ["Coats", "Dresses", "Tops", "T-Shirts", "Sweaters", "Jeans", "Pants", "Skirts", "Hoodies"],
    },
    kids: {
      all: ["Coats", "Jackets", "Tops", "T-Shirts", "Sweaters", "Jeans", "Pants", "Skirts", "Dresses", "Boots", "Flats", "Sandals", "Slippers", "Sneakers", "Joggers", "Hoodies", "Tops"],
      clothing: ["Coats", "Jackets", "Tops", "T-Shirts", "Sweaters", "Jeans", "Pants", "Skirts", "Dresses"],
      shoes: ["Boots", "Flats", "Sandals", "Slippers", "Sneakers"],
    },
    all: {
      all: ["Jackets", "Coats", "Dresses", "Tops", "T-Shirts", "Sweaters", "Jeans", "Pants", "Elegant", "Skirts", "Dresses", "Bags", "Boots", "Heels", "Flats", "Sandals", "Slippers", "Sneakers", "Joggers", "Hoodies", "Tops", "Sunglasses", "Watches", "Hats", "Belts", "Jewellery"]
    }
  },
  size: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "35.5", "36", "36.5", "37", "37.5", "38", "38.5", "39", "39.5", "40", "40.5", "41", "41.5", "42", "42.5", "43", "43.5", "44", "44.5", "45", "45.5", "46",],
  color: ["Black", "White", "Beige", "Brown", "Grey", "Blue", "Purple", "Multicolor", "Pink", "Red", "Green", "Yellow", "Orange", "Gold", "Silver"],
  condition: [5, 4, 3],
  material: ["Cotton", "Denim", "Wool", "Satin", "Leather", "Synthetic", "Lace"],
  dateAdded: ["Today", "Last 3 days", "This Week"],
}
