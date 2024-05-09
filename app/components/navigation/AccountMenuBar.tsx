import AccountMenuBarItem from "@/app/components/navigation/AccountMenuBarItem"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/components/ui/carousel"

export default function AccountMenuBar() {
  const accountMenuBarItems = ['profile', 'addresses', 'orders', 'returns', 'settings', 'help']

  return (
    <section className="*:text-t_black bg-t_mustard w-screen justify-center gap-16">
      <div className="">

        <Carousel>
          <CarouselContent className="sm:grid sm:grid-cols-6 sm:justify-items-center sm:max-w-[700px] sm:mx-auto">

            {accountMenuBarItems.map((item) => (
              <CarouselItem key={item} className="basis-1/3 flex justify-center">
                <AccountMenuBarItem>{item.toUpperCase()}</AccountMenuBarItem>
              </CarouselItem>
            ))}

          </CarouselContent>
        </Carousel>

      </div>
    </section>
  )
}
