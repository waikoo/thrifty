import CategoryGroup from "@/app/components/navigation/CategoryGroup";
import { filter } from "@/app/components/data/filterArrays";
import { brandNamesArray } from "@/app/components/data/brandsData";
import { Gender } from "@/types/link";

type CategoryMemberProps = {
  hoveredGender: Gender | null
}
export default function CategoryMember({ hoveredGender }: CategoryMemberProps) {

  return (
    <div className="z-50 flex justify-between gap-20">
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

    </div>
  )
}

