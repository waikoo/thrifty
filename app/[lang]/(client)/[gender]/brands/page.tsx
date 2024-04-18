import { BrandsLetter, BrandsTopBar } from "@/app/components/brands";
import { brands } from "@/app/components/data";
import { generateAlphabet } from "@/utils/generateAlphabet";

export default function Page() {
  let alphabet = [...generateAlphabet()];

  return (
    <main>
      <BrandsTopBar {... { alphabet }} />

      <section className="mx-auto max-w-[40rem]">
        {alphabet.map((letter) => (
          brands[letter] ? (
            <BrandsLetter brandsArray={brands[letter]} key={letter}>{letter}</BrandsLetter>
          ) : null
        ))}
      </section>
    </main>
  )
}
