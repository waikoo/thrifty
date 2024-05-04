import { albert_500, albert_900 } from "@/utils/fonts"

type BrandsTopBarProps = {
  alphabet: string[]
}

export default function BrandsTopBar({ alphabet }: BrandsTopBarProps) {

  return (
    <section className="mt-5 bg-t_mustard text-t_black relative flex w-screen justify-center gap-6 py-2 text-[1rem]">

      <span className={`absolute text-[1.125rem] left-[5.5rem] ${albert_900.className}`}>
        BRANDS
      </span>

      <ul className={`flex gap-7 ${albert_500.className}`}>
        {alphabet.map((letter) => (
          <li
            key={letter}
            className="cursor-pointer"
          >
            <a href={`#${letter}`}> {letter} </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
