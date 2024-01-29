"use client"
import { useEffect, useState } from "react"
import { supabase } from "@/app/supabase"
import { ProductItemType } from "@/types/productItem"
import CartItem from "@/app/components/cart/CartItem"
import IconShare from "@/app/components/cart/icons/IconShare"
import IconDelete from "@/app/components/cart/icons/IconDelete"
import IconHeart from "./icons/IconHeart"

export default function CartItems() {
  const [uuids, setUuids] = useState<string[]>([])
  const [products, setProducts] = useState<ProductItemType[]>([])

  useEffect(() => {
    const getProducts = async (uuid: string[]) => {
      let { data: products, error } = await supabase
        .from('products')
        .select('*')
        .in('uuid', uuid)
      return products
    }

    const uuidArr = localStorage.getItem('cart')
    if (uuidArr) {
      const uuids = JSON.parse(uuidArr)
      setUuids(uuids)

      getProducts(uuids).then((products => {
        if (products!!) {
          setProducts(products)
        }
      }))
    }
  }, [])
  console.log(products)

  return (
    <section className="flex justify-between gap-32">
      <div className="flex flex-col gap-8">
        <div className="mt-[40px] flex items-center gap-2">
          <input type="checkbox" />
          <div className="flex items-center gap-2 underline underline-offset-2">
            <IconShare />
            <span>Share</span>
          </div>
          <div className="flex items-center gap-2 underline underline-offset-2">
            <IconHeart />
            <span> Save </span>
          </div>
          <div className="flex items-center gap-2 underline underline-offset-2">
            <IconDelete />
            <span> Delete </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {products.map((product) => (
            <CartItem key={product.uuid} product={product} />))}
        </div>
      </div>


      <div>
        <h1 className="my-10 text-center text-[0.875rem] font-semibold">ORDER SUMMARY</h1>

        <div className="border-faded grid grid-cols-2 gap-3 border-[0.1rem] p-4">
          <span className="text-[0.75rem] font-medium">Left until free home delivery</span>
          <span className="justify-self-end text-[0.75rem] font-normal">$11</span>
          <span className="text-[0.75rem] font-medium">3 items</span>
          <span className="justify-self-end text-[0.75rem] font-normal">$297</span>
          <span className="text-[0.75rem] font-medium">Shipping</span>
          <span className="justify-self-end text-[0.75rem] font-normal">$10</span>
          <select className="text-bkg bg-faded col-span-full text-[0.75rem] font-medium" name="shipping" id="shipping">
            <option selected value="home" className="">Home Delivery 2-3 Days</option>
            <option value="store" className="">Collect from store </option>
          </select>
          <span className="my-4 text-[0.875rem] font-semibold">TOTAL COST</span>
          <span className="justify-self-end text-[0.875rem] font-semibold">$307</span>
          <button className="bg-content text-bkg col-span-full p-3 text-[0.875rem] font-semibold">CHECKOUT</button>
        </div>

        <div className="mt-3 flex flex-col gap-2 p-4">
          <p className="text-[0.6875rem] font-semibold">ACCEPTED PAYMENT METHODS:</p>
          <div className="flex gap-2">
            <span>VISA</span>
            <span>MASTERCARD</span>
            <span>APPLE PAY</span>
            <span>Cash on delivery</span>
          </div>
        </div>
      </div>
    </section>
  )
}
