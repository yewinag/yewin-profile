import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { Analytics } from "@/components/analytics/google-analytics";
import { siteConfig } from "@/lib/data/site";
import "./globals.css";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  keywords: [
    "Senior Frontend Engineer",
    "React",
    "Next.js",
    "Singapore",
    "Thailand",
    "TypeScript",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.tagline,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${robotoMono.variable} dark h-full antialiased`}
    >
      <body className="bg-grid min-h-full flex flex-col font-mono">
        {children}
      </body>
      <Analytics />
    </html>
  );
}
