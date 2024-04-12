import CategoryGroup from "@/app/components/navigation/CategoryGroup";
import { filter } from "@/app/components/data/filterArrays";
import { brandNamesArray } from "@/app/components/data/brandsData";
import { Category } from "@/types/home"

type CategoryMemberProps = {
  hoveredGender: Category['category'] | null
}
export default function CategoryMember({ hoveredGender }: CategoryMemberProps) {

  return (
    <>
      <CategoryGroup
        title="CLOTHING"
        hoveredGender={hoveredGender}
        items={hoveredGender ? filter.type[hoveredGender].clothing : ['']}
      />

      <CategoryGroup
        title="SHOES"
        hoveredGender={hoveredGender}
        items={hoveredGender ? filter.type[hoveredGender].shoes : ['']}
      />

      {hoveredGender !== 'kids' && (
        <CategoryGroup
          title="ACCESSORIES"
          hoveredGender={hoveredGender}
          items={hoveredGender ? filter.type[hoveredGender].accessories : ['']}
        />
      )
      }

      <CategoryGroup
        title="BRANDS"
        hoveredGender={hoveredGender}
        items={brandNamesArray.slice(0, 8)}
        brands
      />

    </>
  )
}

