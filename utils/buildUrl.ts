export function buildUrl(
  path: string,
  title: string,
  item: string,
  brands: boolean | undefined) {

  const defaultQueryParams = `&shop-by=new+in&sort-by=newfirst&page=1`;

  const brandLink = buildBrandUrl(path, item, defaultQueryParams)
  const nonBrandLink = buildNonBrandUrl(path, title, item, defaultQueryParams)

  return brands ? brandLink : nonBrandLink
}

const buildBrandUrl = (path: string, item: string, defaultQueryParams: string) => {
  const brandLink = `${path}&brand=${item.toLowerCase()}${defaultQueryParams}`

  return brandLink
}

const buildNonBrandUrl = (path: string, title: string, item: string, defaultQueryParams: string) => {
  const nonBrandLink = `${path}&category=${title.toLowerCase()}&type=${item.toLowerCase()}${defaultQueryParams}`

  return nonBrandLink
}
