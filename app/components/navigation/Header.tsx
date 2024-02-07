import { BackToTop, Banner, Category, NavBar } from "@/app/components/navigation";

export default function Header() {

  return (
    <>
      <Banner />
      <section className="bg-bkg text-content mx-auto flex flex-col items-center px-20 lg:max-w-[1500px]">
        <NavBar />
        <Category />

        <BackToTop />
      </section>
    </>
  )
}
