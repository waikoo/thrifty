import { albert_500, albert_600 } from "@/utils/fonts";
import { FilterNotFoundImg } from "@/app/components/products";

export default function FilterNotFound() {
  return (
    <section className="mx-auto my-10 flex flex-col items-center gap-4 xl:gap-6">
      <div className="max-w-[75%] sm:max-w-[50%] xl:max-w-[25%] xl:w-auto">
        <FilterNotFoundImg />
      </div>

      <div className="w-[80%] mx-auto">
        <p className={`text-center text-t_black text-[1rem] sm:text-[21px] xl:text-[17px] ${albert_600.className}`}>No Results Found</p>
        <p className={`mt-4 text-center text-[13px] sm:text-[17px] xl:text-[14px] text-wrap max-w-[60%] xl:max-w-[320px] mx-auto ${albert_500.className}`}>Hmm, we can't seem to find anything that matches your search.</p>
      </div>
    </section>
  )
}
