import CategoryGroup from "./CategoryGroup"

export default function CategoryWomen() {
  return (
    <>
      <CategoryGroup
        title="CLOTHING"
        items={['Coats', 'Jackets', 'Tops', 'T-Shirts', 'Sweaters', 'Jeans', 'Pants', 'Skirts', 'Dresses']}
      />
      <CategoryGroup
        title="SHOES"
        items={['Trainers', 'Boots', 'Heels', 'Flats', 'Sandals', 'Slippers']}
      />

      <CategoryGroup
        title="ACCESSORIES"
        items={['Bags', 'Sunglasses', 'Jewellery', 'Watches', 'Hats', 'Belts']}
      />

      <CategoryGroup
        title="SPORT"
        items={['Trainers', 'Joggers', 'Hoodies', 'Tops']}
      />

      <CategoryGroup
        title="BRANDS"
        items={['Adidas', 'Bershka', 'Converse', 'Esprit', 'Guess', 'H&M', 'New Balance', 'Nike']}
        brands
      />

    </>
  )
}
