import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteDocument } from "@/components/layout/site-document";
import { getLocaleContent } from "@/i18n/content";
import { createMetadata } from "@/lib/metadata";

const content = getLocaleContent("pt-BR");
const baseMetadata = createMetadata({ locale: "pt-BR" });

export const metadata: Metadata = {
  ...baseMetadata,
  title: { default: content.metadata.title, template: `%s | ${content.personal.name}` },
};

export default function PortugueseLayout({ children }: { children: ReactNode }) {
  return <SiteDocument content={content}>{children}</SiteDocument>;
}
