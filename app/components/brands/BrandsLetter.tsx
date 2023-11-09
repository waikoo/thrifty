type BrandsLetterProps = {
  children: string
  brandsArray: string[]
}

export default function BrandsLetter({ children, brandsArray }: BrandsLetterProps) {

  return (
    <section className="flex items-baseline gap-6">
      <div
        id={children}
        className="text-grey scroll-smooth text-[2.188rem] font-bold"
      >
        {children}
      </div>

      {brandsArray.map((brand) => <span key={`${brand}`} className="text-content cursor-pointer text-[1rem] font-normal">{brand}</span>)}
    </section>
  )
}
