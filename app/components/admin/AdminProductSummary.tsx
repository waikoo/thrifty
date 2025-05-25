import { ProductItemType } from "@/types/productItem"
import { AdminProductID, AdminProductItem } from "."

type AdminProductSummaryProps = {
  el: ProductItemType
}

export default function AdminProductSummary({ el }: AdminProductSummaryProps) {
  return (
    <section className="bg-[#191A1A] border-content shadow-custom absolute z-10 w-auto whitespace-nowrap rounded-md border-[0.1875rem] p-[1.125rem]">
      <div className="z-10 grid grid-cols-2 gap-1 rounded-md text-center">

        <AdminProductID type={el.uuid} />

        <AdminProductItem type={el.gender}>GENDER</AdminProductItem>
        <AdminProductItem type={el.category}>CATEGORY</AdminProductItem>
        <AdminProductItem type={el.type}>PRODUCT TYPE</AdminProductItem>
        <AdminProductItem type={el.price}>PRICE</AdminProductItem>
        <AdminProductItem type={el.discount}>DISCOUNT</AdminProductItem>
        <AdminProductItem type={el.size}>SIZE</AdminProductItem>
        <AdminProductItem type={el.color}>COLOR</AdminProductItem>
        <AdminProductItem type={el.brand}>BRAND</AdminProductItem>
        <AdminProductItem type={el.condition}>CONDITION</AdminProductItem>
        <AdminProductItem type={el.material}>MATERIAL</AdminProductItem>
        <AdminProductItem type={el.created_at}>DATE ADDED</AdminProductItem>

        <span className="col-span-2 w-full text-center text-[0.75rem] font-medium">
          {el.img_url.length} Image{el.img_url.length > 1 ? 's' : ''}
        </span>
      </div>
    </section>

  )
}
