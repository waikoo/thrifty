import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { getOptions } from './settings'

const initI18next = async (locale: string, ns: string[] | string | undefined) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)))
    .init(getOptions(locale, ns))
  return i18nInstance
}

type Toptions = {
  keyPrefix?: string
}

export async function useTranslation(locale: string, ns: Array<string> | string | undefined = undefined, options: Toptions = {}) {
  const i18nextInstance = await initI18next(locale, ns)
  return {
    t: i18nextInstance.getFixedT(locale, Array.isArray(ns) ? ns[0] : ns, options.keyPrefix),
    i18n: i18nextInstance
  }
}