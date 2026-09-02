import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteDocument } from "@/components/layout/site-document";
import { getLocaleContent } from "@/i18n/content";
import { createMetadata } from "@/lib/metadata";

const content = getLocaleContent("en");
const baseMetadata = createMetadata({ locale: "en" });

export const metadata: Metadata = {
  ...baseMetadata,
  title: { default: content.metadata.title, template: `%s | ${content.personal.name}` },
};

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <SiteDocument content={content}>{children}</SiteDocument>;
}
