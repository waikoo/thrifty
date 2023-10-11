import { match } from '@formatjs/intl-localematcher';
import Negotiator from "negotiator";
import { NextRequest } from "next/server";

export type Locale = 'en' | 'de';

export const supportedLocales: Locale[] = ['en', 'de'];
const defaultLocale = 'en'

export function getLocaleFromHeaders(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get('accept-language') ?? defaultLocale
  const negotiatedLanguages = new Negotiator({
    headers: {
      'accept-language': acceptLanguage
    }
  }).languages();

  const userLocale = match(negotiatedLanguages, supportedLocales, defaultLocale) as Locale;

  return userLocale ?? 'en';
}

// Helper to get locale from path 
export function getLocaleFromPath(path: string) {
  return (
    supportedLocales.find(locale => path.startsWith(`/${locale}/`)) || 'en'
  );
}

