import { BrandsLetter, BrandsTopBar } from "@/app/components/brands";
import { brands } from "@/app/components/data";
import { generateAlphabet } from "@/utils/generateAlphabet";

export default function Page() {
  let alphabet = [...generateAlphabet()];

  return (
    <>
      <BrandsTopBar {... { alphabet }} />

      <section>
        {alphabet.map((letter) => (
          brands[letter] ? (
            <BrandsLetter brandsArray={brands[letter]}>{letter}</BrandsLetter>
          ) : null
        ))}
      </section>
    </>
  )
}
