export type ProductItemType = {
  uuid: string
  type: string
  category: string
  size: string
  price: number
  material: string
  img_url: string[]
  gender: string
  discount: number
  created_at: string
  condition: string
  color: string
  brand: string
  [key: string]: string | number | string[]
}
