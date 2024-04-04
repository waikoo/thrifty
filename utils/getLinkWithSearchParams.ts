import { filter } from "@/app/components/data/filterArrays";
import { brandNamesArray } from "@/app/components/data/brandsData";
import { capitalize } from "@/utils/capitalize";

interface Filters {
  gender: string[],
  color: string[],
  brand: string[],
  category: string[],
  material: string[],
  type: string[]
  [key: string]: string[]
}

const parseSearchTerms = (searchTerm: string) => {
  const queryArr = searchTerm.toString().split(" ");

  const filters: Filters = {
    gender: [],
    color: [],
    brand: [],
    category: [],
    material: [],
    type: []
  };

  if (brandNamesArray.includes(capitalize(searchTerm))) filters.brand.push(searchTerm);

  queryArr.forEach(term => {
    if (filter.gender.includes(capitalize(term))) filters.gender.push(term);
    if (filter.color.includes(capitalize(term))) filters.color.push(term);
    if (brandNamesArray.includes(capitalize(term))) filters.brand.push(term);
    if (filter.category.includes(capitalize(term))) filters.category.push(term);
    if (filter.material.includes(capitalize(term))) filters.material.push(term);
    if (filter.type.all.all.includes(capitalize(term))) filters.type.push(term);
  });

  return filters;
};

const buildSearchParams = (filters: Filters, lang: string, gender: string) => {
  const queryParams = new URLSearchParams()

  Object.entries(filters).forEach(([key, values]) => {
    values.forEach((value) => queryParams.append(key, value))
  })
  queryParams.append('page', '1')
  const baseUrl = `/${lang}/${gender}/products`

  return `${baseUrl}?${queryParams.toString()}`

};

export default function getLinkWithSearchParams(searchTerm: string, lang: string, gender: string): string {
  if (searchTerm) {
    const filters = parseSearchTerms(searchTerm);
    console.log(filters)
    const searchParams = buildSearchParams(filters, lang, gender);
    return searchParams;
  }
  throw new Error('No search term passed')
}

