import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/metadata";

import "./globals.css";

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

const baseMetadata = createMetadata();

export const metadata: Metadata = {
  ...baseMetadata,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <a
          className="fixed top-3 left-3 z-[60] -translate-y-24 rounded-md bg-foreground px-4 py-3 font-medium text-background transition-transform focus:translate-y-0 motion-reduce:transition-none"
          href="#conteudo-principal"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
