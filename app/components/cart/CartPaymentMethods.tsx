import { Inter } from 'next/font/google';

import { RiVisaLine } from "react-icons/ri";
import { FaApplePay } from "react-icons/fa";

import IconMasterCard from "@/app/components/cart/icons/IconMasterCard";
import { albert } from "@/utils/fonts";

type CartPaymentMethodsProps = {
  className?: string
}

const inter = Inter({ subsets: ['latin'], display: 'swap', weight: '600' })

export default function CartPaymentMethods({ className }: CartPaymentMethodsProps) {

  return (
    <div className={`mt-3 flex flex-col gap-2 p-4 ${className}`}>
      <p className={`text-[12px] ${albert.className} tracking-widest`}>
        ACCEPTED PAYMENT METHODS:
      </p>

      <div className="flex items-center gap-2">
        <RiVisaLine size="2.6rem" color="#254AA5" />
        <IconMasterCard />
        <FaApplePay size="2.6rem" />

        <div className={`text-t_black dark:t_white grid place-items-center text-center text-[8px] ${inter.className}`}>
          <span className="bg-t_white dark:t_black m-0 w-10 border-[#d8d8d8] border-[0.1rem] p-0">
            Cash on delivery
          </span>
        </div>
      </div>
    </div>
  )
}
