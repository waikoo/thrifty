"use client"
import { useState } from "react"

import AboutUs from "@/app/components/help/AboutUs"
import Contact from "@/app/components/help/Contact"
import FAQ from "@/app/components/help/FAQ"
import Returns from "@/app/components/help/Returns"
import ShippingAndDelivery from "@/app/components/help/ShippingAndDelivery"
import { HELP_TITLES } from "@/app/components/data/helpData"

export default function Page() {
  const [selected, setSelected] = useState(0)

  return (
    <div className="flex">

      <aside className="bg-faded min-h-screen">
        <ul className="*:text-nowrap mt-5 py-20 text-right">

          {HELP_TITLES.map((text, index) => {
            return <li className={`${selected === index ? 'bg-bkg text-content' : ''} cursor-pointer px-5 py-4 pl-48 text-[0.75rem] font-extrabold`}
              onClick={() => setSelected(index)}>
              {text}
            </li>
          })}

        </ul>
      </aside>

      <div className="text-content bg-bkg p-16">
        {selected === 0 && <AboutUs>{HELP_TITLES[0]}</AboutUs>}
        {selected === 1 && <ShippingAndDelivery>{HELP_TITLES[1]}</ShippingAndDelivery>}
        {selected === 2 && <Returns>{HELP_TITLES[2]}</Returns>}
        {selected === 3 && <FAQ>{HELP_TITLES[3]}</FAQ>}
        {selected === 4 && <Contact>{HELP_TITLES[4]}</Contact>}
      </div>
    </div>
  )
}
