import { FilterNotFoundImg } from ".";

export default function FilterNotFound() {
  return (
    <section className="mx-auto mt-10 flex w-[320px] flex-col items-center gap-6">
      <FilterNotFoundImg />
      <span className="text-content text-[1rem]">No Results Found</span>
      <p className="text-center text-[0.813rem]">Hmm, we can't seem to find anything that matches your search.</p>
    </section>
  )
}
