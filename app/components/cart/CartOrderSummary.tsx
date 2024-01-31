import { RiVisaLine } from "react-icons/ri";
import { FaApplePay } from "react-icons/fa";
import IconMasterCard from "./icons/IconMasterCard";

export default function CartOrderSummary() {
  return (
    <div className="max-w-[320px]">
      <h1 className="my-10 text-center text-[0.875rem] font-semibold">ORDER SUMMARY</h1>

      <div className="border-faded grid grid-cols-2 gap-3 border-[0.1rem] p-6">
        <span className="text-nowrap text-[0.75rem] font-medium">Left until free home delivery</span>
        <span className="justify-self-end text-[0.75rem] font-normal">$11</span>
        <span className="text-[0.75rem] font-medium">3 items</span>
        <span className="justify-self-end text-[0.75rem] font-normal">$297</span>
        <span className="text-[0.75rem] font-medium">Shipping</span>
        <span className="justify-self-end text-[0.75rem] font-normal">$10</span>
        <select className="text-bkg bg-faded col-span-full text-[0.75rem] font-medium" name="shipping" id="shipping">
          <option defaultValue value="home" className="">Home Delivery 2-3 Days</option>
          <option value="store" className="">Collect from store </option>
        </select>
        <span className="my-4 text-[0.875rem] font-semibold">TOTAL COST</span>
        <span className="self-center justify-self-end text-[0.875rem] font-semibold">$307</span>
        <button className="bg-content text-bkg col-span-full p-3 text-[0.875rem] font-semibold">CHECKOUT</button>
      </div>

      <div className="mt-3 flex flex-col gap-2 p-4">
        <p className="text-[0.6875rem] font-semibold">ACCEPTED PAYMENT METHODS:</p>
        <div className="flex items-center gap-2">
          <RiVisaLine size="2.6rem" color="#254AA5" />
          <IconMasterCard />
          <FaApplePay size="2.6rem" />
          <div className="border-content text-bkg grid place-items-center text-center text-[0.5rem] font-semibold">
            <span className="bg-content m-0 w-10 border-[0.1rem] p-0"> Cash on delivery </span>
          </div>
        </div>
      </div>
    </div>
  )
}
