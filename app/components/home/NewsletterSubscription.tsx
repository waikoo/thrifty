import { createTranslation } from "@/i18n/server"
import { Locales } from "@/types/link"

type NewsletterSubscriptionProps = {
  lang: Locales
}

export default async function NewsletterSubscription({ lang }: NewsletterSubscriptionProps) {
  const { t } = await createTranslation(lang, 'home')

  return (
    <section className="bg-gradient-to-b from-t_mustard text-bkg grid w-screen place-items-center gap-4 py-[3rem] text-[2rem]">
      <h3 className="font-allenoire max-w-[300px] text-center">{t('newsletterSubscription.title').toLowerCase()}</h3>

      <form className="flex w-[35%] flex-col gap-6">
        <input
          type="text"
          placeholder={t('newsletterSubscription.placeholder')}
          className="bg-bkg text-content flex-grow p-2 border-0 bg-transparent border-b-[0.12rem] border-t_black focus:outline-0"
          spellCheck="false"
        />
        <button className="bg-t_black text-t_white text-[12px] rounded-full p-2">{t('newsletterSubscription.button')}</button>
      </form>

      <span className="cursor-pointer pt-4 underline underline-offset-2">{t('newsletterSubscription.unsubscribe')}</span>
    </section>
  )
}
