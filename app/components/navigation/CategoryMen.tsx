import CategoryGroup from "./CategoryGroup";

export default function CategoryMen() {

  return (
    <>
      <CategoryGroup
        title="CLOTHING"
        items={['Coats', 'Jackets', 'Tops', 'T-Shirts', 'Sweaters', 'Jeans', 'Pants']}
      />

      <CategoryGroup
        title="SHOES"
        items={['Trainers', 'Boots', 'Elegant', 'Sandals', 'Slippers']}
      />

      <CategoryGroup
        title="ACCESSORIES"
        items={['Bags', 'Sunglasses', 'Watches', 'Hats', 'Belts']}
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
