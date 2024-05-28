"use client"
import { useEffect, useState } from "react"

import AboutUs from "@/app/components/help/AboutUs"
import Contact from "@/app/components/help/Contact"
import FAQ from "@/app/components/help/FAQ"
import Returns from "@/app/components/help/Returns"
import Delivery from "@/app/components/help/Delivery"
import { HELP_TITLES } from "@/app/components/data/helpData"
import HelpItem from "@/app/components/help/HelpItem"

type PageType = {
  searchParams: {
    [key: string]: string
  }
}

export default function Page({ searchParams }: PageType) {
  const [selected, setSelected] = useState(searchParams.section ? Number(searchParams.section) : 0)

  useEffect(() => {
    if (searchParams?.section) {
      setSelected(Number(searchParams?.section)) // if there is an index in the URL, set it
      return
    }
    setSelected(0) // otherwise use About section as default
  }, [searchParams?.section])

  return (
    <div className="xl:flex xl:min-h-dvh">

      <aside className="bg-t_mustard">
        <ul className="mt-5 py-20 text-center xl:text-right">

          {HELP_TITLES.map(({ name, component }, index) => {
            return (
              <HelpItem
                key={index + name}
                index={index}
                Component={component}
                selected={selected}
                setSelected={setSelected}
              >{name}</HelpItem>
            )
          })}

        </ul>
      </aside>

      <div className="hidden xl:block text-content bg-t_white w-full">
        {selected === 0 && <AboutUs />}
        {selected === 1 && <Delivery />}
        {selected === 2 && <FAQ>{HELP_TITLES[2].name}</FAQ>}
        {selected === 3 && <Contact>{HELP_TITLES[3].name}</Contact>}
      </div>
    </div>
  )
}
