import { BrandsLetter, BrandsTopBar } from "@/app/components/brands";
import { brands } from "@/app/components/data";
import { Gender, Locales } from "@/types/link";
import { generateAlphabet } from "@/utils/generateAlphabet";

type PageProps = {
  params: {
    lang: Locales
    gender: Gender
  }
}

export default function Page({ params: { lang, gender } }: PageProps) {
  let alphabet = [...generateAlphabet()];

  return (
    <main className="overflow-hidden">
      <BrandsTopBar {... { alphabet }} />

      <section className="mt-16 mx-auto max-w-[60rem] flex flex-col gap-4">
        {alphabet.map((letter) => (
          brands[letter] ? (
            <BrandsLetter brandsArray={brands[letter]}
              key={`brands-${letter}`}
              lang={lang}
              gender={gender}
            >
              {letter}
            </BrandsLetter>
          ) : null
        ))}
      </section>

      <div className="bg-t_mustard w-screen h-[3rem] mt-16"></div>
    </main>
  )
}
