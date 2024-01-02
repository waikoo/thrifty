export const filter = {
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
      all: ["Jackets", "Coats", "Dresses", "Tops", "T-Shirts", "Jeans", "Pants", "Skirts", "Dresses", "Boots", "Heels", "Flats", "Sandals", "Slippers", "Bags", "Sunglasses", "Jewellery", "Watches", "Hats", "Belts", "Sneakers", "Joggers", "Hoodies", "Tops"],
      accessories: ["Hats", "Jewellery", "Sunglasses", "Watches", "Belts", "Bags"],
      shoes: ["Sneakers", "Boots", "Heels", "Flats", "Sandals", "Slippers"],
      clothing: ["Coats", "Dresses", "Tops", "T-Shirts", "Sweaters", "Jeans", "Pants", "Skirts", "Hoodies", "Tops"],
    },
    kids: {
      all: ["Coats", "Jackets", "Tops", "T-Shirts", "Sweaters", "Jeans", "Pants", "Skirts", "Dresses", "Boots", "Flats", "Sandals", "Slippers", "Sneakers", "Joggers", "Hoodies", "Tops"],
      clothing: ["Coats", "Jackets", "Tops", "T-Shirts", "Sweaters", "Jeans", "Pants", "Skirts", "Dresses"],
      shoes: ["Boots", "Flats", "Sandals", "Slippers", "Sneakers"],
    },
    all: ["Jackets", "Coats", "Dresses", "Tops", "T-Shirts", "Sweaters", "Jeans", "Pants", "Elegant", "Skirts", "Dresses", "Bags", "Boots", "Heels", "Flats", "Sandals", "Slippers", "Sneakers", "Joggers", "Hoodies", "Tops", "Sunglasses", "Watches", "Hats", "Belts", "Jewellery"]
  },
  size: ["35", "35.5", "36", "36.5", "37", "37.5", "38", "38.5", "39", "39.5", "40", "40.5", "41", "41.5", "42", "42.5", "43", "43.5", "44", "44.5", "46", "XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"],
  color: ["Black", "White", "Beige", "Brown", "Grey", "Blue", "Purple", "Multicolor", "Pink", "Red", "Green", "Yellow", "Orange", "Gold", "Silver"],
  condition: [5, 4, 3],
  material: ["Cotton", "Denim", "Wool", "Satin", "Leather", "Synthetic", "Lace"],
  dateAdded: ["Today", "Last 3 days", "This Week"],
}
