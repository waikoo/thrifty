import { RiVisaLine } from "react-icons/ri";
import { FaApplePay } from "react-icons/fa";
import IconMasterCard from "@/app/components/cart/icons/IconMasterCard";

export default function CartPaymentMethods() {
  return (
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
  )
}
