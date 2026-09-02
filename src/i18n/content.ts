import "server-only";

import { defaultLocale, type Locale } from "@/i18n/config";
import { enContent } from "@/i18n/en";
import { ptBrContent } from "@/i18n/pt-br";
import type { LocaleContent } from "@/i18n/types";

const contentByLocale: Record<Locale, LocaleContent> = {
  "pt-BR": ptBrContent,
  en: enContent,
};

export function getLocaleContent(locale: Locale): LocaleContent {
  return contentByLocale[locale];
}

export function getLocaleContentFromUnknown(value: unknown): LocaleContent {
  return value === "en" ? contentByLocale.en : contentByLocale[defaultLocale];
}
