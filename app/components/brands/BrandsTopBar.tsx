import { generateAlphabet } from "@/utils/generateAlphabet";

type BrandsTopBarProps = {
  alphabet: string[]
}

export default function BrandsTopBar({ alphabet }: BrandsTopBarProps) {
  // let alphabet = [...generateAlphabet()];

  return (
    <section className="bg-content text-bkg relative flex w-screen justify-center gap-6 py-1 text-[1.125rem]">

      <span className="absolute left-[5.5rem] font-bold">
        BRANDS
      </span>

      <ul className="flex gap-3">
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
