/* eslint-disable @next/next/no-img-element */
type FilterHomeCardProps = {
  children: React.ReactNode
  src: string
  alt: string
  className?: string
}

export default function FilterHomeCard({ children, src, alt, className }: FilterHomeCardProps) {
  return (
    <div className="relative w-[80%] mx-auto xl:h-[45rem] xl:w-[45rem] ">
      <img src={src}
        alt={alt}
        className="inset-0 rounded-[2rem] mt-8 cardShadow object-cover mx-auto xl:w-[45rem] xl:h-[45rem] block"
      />
      <div className={`${className} absolute flex flex-col text-[1.25rem] inset-0 justify-center items-center z-10 drop-shadow-lg text-shadow-fil text-t_white dark:text-t_black dark:shadow-t_white shadow-t_black`}>
        {children}
      </div>
    </div>
  )
}

