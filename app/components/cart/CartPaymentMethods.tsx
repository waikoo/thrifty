import { Inter } from 'next/font/google';

import { RiVisaLine } from "react-icons/ri";
import { FaApplePay } from "react-icons/fa";

import IconMasterCard from "@/app/components/cart/icons/IconMasterCard";
import { albert } from "@/utils/fonts";

type CartPaymentMethodsProps = {
  className?: string
  isBlockHidden: boolean
}

const inter = Inter({ subsets: ['latin'], display: 'swap', weight: '600' })

export default function CartPaymentMethods({ className, isBlockHidden }: CartPaymentMethodsProps) {
  const textStyle = isBlockHidden ? 'text-t_black/50 dark:text-t_white/50' : 'text-t_black dark:text-t_white'

  return (
    <div className={`mt-3 flex flex-col gap-2 p-4 ${className}`}>
      <p className={`${textStyle} text-[11px] sm:text-[15px] xl:text-[12px] ${albert.className} tracking-widest whitespace-nowrap`}>
        ACCEPTED PAYMENT METHODS:
      </p>

      <div className="flex items-center gap-2">
        <RiVisaLine size="2.6rem" color="#254AA5" className="opacity-50" />
        <IconMasterCard className="opacity-50" />
        <FaApplePay size="2.6rem" className="opacity-50" />

        <div className={`${textStyle} grid place-items-center text-center text-[7px] sm:text[12px] xl:text-[8px] ${inter.className}`}>
          <span className="bg-t_white dark:t_black m-0 w-10 border-[#d8d8d8] border-[0.1rem] p-0">
            Cash on delivery
          </span>
        </div>
      </div>
    </div>
  )
}
