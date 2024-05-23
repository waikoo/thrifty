import NotificationElement from "@/app/components/settings/NotificationElement";
import { albert_500, albert_800 } from "@/utils/fonts";

export default function Notifications() {

  return (
    <section className="mx-auto w-full xl:w-[450px]">
      <h1 className={`text-content mt-6 text-center text-[13px] sm:text-[17px] xl:text-[15px] ${albert_800.className}`}>NOTIFICATIONS</h1>

      <div className={`mt-5 flex flex-col bg-[#f2f2f2] rounded-[40px] text-[13px] sm:text-[17px] xl:text-[14px] xl:w-[450px] py-6 ${albert_500.className}`}>

        <NotificationElement type="newsletter">
          Subscribe to our newsletter and be the first to know about new arrivals and exclusive offers
        </NotificationElement>

        <NotificationElement type="notifications">
          Turn on notifications for instant updates on your favourite items
        </NotificationElement>

        <NotificationElement type="filters">
          Get notified about any changes regarding your saved filters
        </NotificationElement>
      </div>
    </section>
  )
}
