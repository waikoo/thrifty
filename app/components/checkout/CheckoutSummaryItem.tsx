"use client"
import CheckMark from "@/app/components/checkout/CheckMark";
import { borderRadius } from "@/app/components/data/universalStyles";
import { capitalize } from "@/utils/capitalize";

type CheckoutSummaryItemsProps = {
  title: 'CONTACT' | 'SHIPPING' | 'PAYMENT'
  content: string[]
}

export default function CheckoutSummaryItem({ title, content }: CheckoutSummaryItemsProps) {

  return (
    <section className={`${borderRadius} bg-bkg text-content relative mt-10 flex w-[250px] flex-col gap-8 p-8`}>
      <h2 className="text-content mx-auto text-[1rem] font-bold">{title}</h2>

      <div className="*:font-normal *:text-[0.75rem]">
        {content.map((item) => (
          <p key={item} className="text-content text-[0.8125rem] font-extrabold">{item === 'cash' ? capitalize(item) : item}</p>
        ))}
      </div>

      <span className="text-content absolute bottom-6 right-6 cursor-pointer text-[0.6875rem] font-extrabold">EDIT</span>

      <div className="bg-faded absolute -top-[1.10rem] left-0 right-0 mx-auto flex h-[2.3rem] w-[2.3rem] justify-center rounded-full">
        <CheckMark />
      </div>
    </section>
  )
}
