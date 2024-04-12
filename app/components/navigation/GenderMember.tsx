import GenderGroup from "@/app/components/navigation/GenderGroup";
import { filter } from "@/app/components/data/filterArrays";
import { brandNamesArray } from "@/app/components/data/brandsData";
import { Gender } from "@/types/link";

type GenderMemberProps = {
  hoveredGender: Gender | null
}
export default function GenderMember({ hoveredGender }: GenderMemberProps) {

  return (
    <div className="z-50 flex justify-between gap-20">
      <GenderGroup
        title="CLOTHING"
        hoveredGender={hoveredGender}
        items={hoveredGender ? filter.type[hoveredGender].clothing : ['']}
      />

      <GenderGroup
        title="SHOES"
        hoveredGender={hoveredGender}
        items={hoveredGender ? filter.type[hoveredGender].shoes : ['']}
      />

      {hoveredGender !== 'kids' && (
        <GenderGroup
          title="ACCESSORIES"
          hoveredGender={hoveredGender}
          items={hoveredGender ? filter.type[hoveredGender].accessories : ['']}
        />
      )
      }

      <GenderGroup
        title="BRANDS"
        hoveredGender={hoveredGender}
        items={brandNamesArray.slice(0, 8)}
        brands
      />

    </div>
  )
}

