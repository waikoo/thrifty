import NotificationElement from "@/app/components/settings/NotificationElement";

export default function Notifications() {

  return (
    <section className="">
      <h1 className="text-content mt-8 text-center text-[0.75rem] font-extrabold">NOTIFICATIONS</h1>

      <div className="mt-5 flex flex-col gap-2">

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
