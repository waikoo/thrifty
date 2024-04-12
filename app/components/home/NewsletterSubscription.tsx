import { createTranslation } from "@/i18n/server"
import { Locales } from "@/types/link"

type NewsletterSubscriptionProps = {
  lang: Locales
}

export default async function NewsletterSubscription({ lang }: NewsletterSubscriptionProps) {
  const { t } = await createTranslation(lang, 'home')

  return (
    <section className="bg-content text-bkg grid w-screen place-items-center gap-4 py-[3rem]">
      <h3 className="font-semibold">{t('newsletterSubscription.title')}</h3>

      <form className="flex w-[25%] bg-red-300">
        <input
          type="text"
          placeholder={t('newsletterSubscription.placeholder')}
          className="bg-bkg text-content flex-grow p-2"
        />
        <button className="bg-grey p-2">{t('newsletterSubscription.button')}</button>
      </form>

      <span className="cursor-pointer pt-4 underline underline-offset-2">{t('newsletterSubscription.unsubscribe')}</span>
    </section>
  )
}
