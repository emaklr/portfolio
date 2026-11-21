import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: {
    default: "Babatunde Abeeb Seun — Full-stack Developer",
    template: "%s | Babatunde Abeeb Seun",
  },
  description:
    "I build websites, web applications, APIs and practical AI integrations that help businesses turn ideas into useful digital products.",
  applicationName: "Babatunde Abeeb Seun Portfolio",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    title: "Babatunde Abeeb Seun — Full-stack Developer",
    description:
      "Websites, web applications, backend systems and practical AI integrations.",
    siteName: "Babatunde Abeeb Seun",
  },
  twitter: {
    card: "summary_large_image",
    title: "Babatunde Abeeb Seun — Full-stack Developer",
    description:
      "Websites, web applications, backend systems and practical AI integrations.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f8fa",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
