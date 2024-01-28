import Image from "next/image"

export default function CartItems() {
  return (
    <section className="flex">
      <div>
        <div className="flex gap-2">
          <input type="checkbox" />
          <span className="underline underline-offset-2">Share</span>
          <span className="underline underline-offset-2">Save</span>
          <span className="underline underline-offset-2">Delete</span>
        </div>

        <div className="grid grid-cols-[auto,auto,1fr,auto,auto,auto]">
          <input className="col-start-1 col-end-2" type="checkbox" />
          <Image className="col-start-2 col-end-3" src="https://picsum.photos/200/300" alt="cart image" width={100} height={100} priority={true} />
          <span className="col-start-3 col-end-4">Stradivarius Jacket</span>
          <span className="col-start-3 col-end-4">XL</span>
          <span className="col-start-3 col-end-4">$99</span>
          <span className="col-start-4 col-end-5">Share</span>
          <span className="col-start-5 col-end-6">Like</span>
          <span className="col-start-6 col-end-7">Delete</span>
          <span className="col-start-5 col-end-7">30 Min.</span>
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
