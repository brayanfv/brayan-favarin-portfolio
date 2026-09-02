import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

import type { LocaleContent } from "@/i18n/types";

import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

interface SiteDocumentProps {
  children: ReactNode;
  content: LocaleContent;
}

export function SiteDocument({ children, content }: SiteDocumentProps) {
  return (
    <html lang={content.locale}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <a
          className="fixed top-3 left-3 z-[60] -translate-y-24 rounded-md bg-foreground px-4 py-3 font-medium text-background transition-transform focus:translate-y-0 motion-reduce:transition-none"
          href="#conteudo-principal"
        >
          {content.ui.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}
