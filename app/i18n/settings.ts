export const fallbackLocale = 'en';
export const locales = [fallbackLocale, 'de']
export const cookieName = 'i18next'
export const defaultNamespace = 'translation'

export function getOptions(lng = fallbackLocale, namespace: string | string[] = defaultNamespace) {
  return {
    // debug: true,
    supportedLngs: locales,
    fallbackLocale,
    lng,
    fallbackNamespace: defaultNamespace,
    defaultNamespace,
    namespace
  }
}
