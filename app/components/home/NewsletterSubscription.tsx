export default function NewsletterSubscription() {
  return (
    <section className="bg-content text-bkg grid w-screen place-items-center gap-4 py-[3rem]">
      <h3 className="font-semibold">Subscribe to our newsletter</h3>

      <form className="flex">
        <input
          type="text"
          placeholder="Enter your email address"
          className="bg-bkg text-content p-2"
        />
        <button className="bg-grey p-2">Subscribe</button>
      </form>

      <span className="cursor-pointer pt-4 underline underline-offset-2">I would like to unsubscribe</span>
    </section>
  )
}
