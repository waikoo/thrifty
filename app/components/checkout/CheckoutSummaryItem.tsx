"use client"
import CheckMark from "@/app/components/checkout/CheckMark";
import { borderRadius } from "@/app/components/data/universalStyles";
import { capitalize } from "@/utils/capitalize";
import { albert_500, albert_800 } from "@/utils/fonts";

type CheckoutSummaryItemsProps = {
  title: 'CONTACT' | 'SHIPPING' | 'PAYMENT'
  content: string[]
}

export default function CheckoutSummaryItem({ title, content }: CheckoutSummaryItemsProps) {

  return (
    <section className={`${borderRadius} bg-white text-t_black w-[90vw] xl:w-[35rem] relative flex flex-col gap-4 p-8`}>
      <h2 className={`text-t_black text-[13px] sm:text-[17px] xl:text-[15px] ${albert_800.className}`}>
        {title}
      </h2>

      <div>
        {content.map((item) => {
          const textContent = item === 'cash' ? capitalize(item) : item;
          return (
            <p key={item} className={`text-[13px] sm:text-[16px] xl:text-[0.8125rem] ${albert_500.className}`}>{textContent}</p>
          )
        })}
      </div>

      <span className={`absolute bottom-6 right-6 cursor-pointer text-[12px] sm:text[16px] xl:text-[12px] ${albert_800.className}`}>
        EDIT
      </span>

      <div className="bg-t_white absolute -top-[1.10rem] left-0 right-0 mx-auto flex h-[2.3rem] w-[2.3rem] justify-center rounded-full">
        <CheckMark />
      </div>
    </section>
  )
}
