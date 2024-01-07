import { brandNamesArray } from "@/app/components/data/brandsData";
import { filter } from "@/app/components/data/filterArrays";
import { getPaginationBounds } from "@/utils/getPaginationBounds";

export async function fetchProductsByFilters(
  supabase: any,
  searchParams: { [key: string]: string | string[] | undefined }
) {
  const byGenderParams = searchParams.gender?.toString().split(",");
  const byCategoryParams = searchParams.category?.toString().split(",");
  const byTypeParams = searchParams.type?.toString().split(",");
  const byMaterialParams = searchParams.material?.toString().split(",");
  const bySizeParams = searchParams.size?.toString().split(",");
  const byColorParams = searchParams.color?.toString().split(",");
  const byBrandParams = searchParams.brand?.toString().split(",");

  let itemsPerPage = 20;
  const { lowerBound, upperBound } = getPaginationBounds(Number(searchParams.page), itemsPerPage);

  let query = supabase
    .from("products")
    .select("*")
    .in("gender", byGenderParams || filter.gender.map(fil => fil.toLowerCase()))
    .in("category", byCategoryParams || filter.category.map(fil => fil.toLowerCase()))
    .in("type", byTypeParams || filter.type.all.map(fil => fil.toLowerCase()))
    .in("material", byMaterialParams || filter.material.map(fil => fil.toLowerCase()))
    .in("size", bySizeParams || filter.size.map(fil => fil.toLowerCase()))
    .in("color", byColorParams || filter.color.map(fil => fil.toLowerCase()))
    .in("brand", byBrandParams || brandNamesArray.map(fil => fil.toLowerCase()))
    .range(lowerBound, upperBound);

  if (searchParams["shop-by"] === "new in") {
    query = query.order("created_at", { ascending: false });
  }

  if (searchParams["shop-by"] === "promos") {
    query = query.gt("discount", 0);
  }

  return await query;
}
