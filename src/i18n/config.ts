export const locales = ["pt-BR", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt-BR";

export const localeMetadata: Record<
  Locale,
  { htmlLang: string; openGraphLocale: string; pathPrefix: string }
> = {
  "pt-BR": {
    htmlLang: "pt-BR",
    openGraphLocale: "pt_BR",
    pathPrefix: "",
  },
  en: {
    htmlLang: "en",
    openGraphLocale: "en_US",
    pathPrefix: "/en",
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
