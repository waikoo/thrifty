import CategoryGroup from "@/app/components/navigation/CategoryGroup";
import { filter } from "@/app/components/data/filterArrays";
import { brandNamesArray } from "@/app/components/data/brandsData";

type CategoryMemberProps = {
  hoveredCategory: string | null
}
export default function CategoryMember({ hoveredCategory }: CategoryMemberProps) {

  return (
    <>
      <CategoryGroup
        title="CLOTHING"
        items={hoveredCategory ? filter.type[hoveredCategory].clothing : ['']}
      />

      <CategoryGroup
        title="SHOES"
        items={hoveredCategory ? filter.type[hoveredCategory].shoes : ['']}
      />

      {hoveredCategory !== 'kids' && (
        <CategoryGroup
          title="ACCESSORIES"
          items={hoveredCategory ? filter.type[hoveredCategory].accessories : ['']}
        />
      )
      }

      <CategoryGroup
        title="BRANDS"
        items={brandNamesArray.slice(0, 8)}
        brands
      />

    </>
  )
}

