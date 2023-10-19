import CategoryGroup from "./CategoryGroup";

export default function CategoryKids() {

  return (
    <>
      <CategoryGroup
        title="CLOTHING"
        items={['Coats', 'Jackets', 'Tops', 'T-Shirts', 'Sweaters', 'Jeans', 'Pants']}
      />

      <CategoryGroup
        title="SHOES"
        items={['Trainers', 'Boots', 'Flats', 'Sandals', 'Slippers']}
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
