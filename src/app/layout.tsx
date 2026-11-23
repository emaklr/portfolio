import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const bodyFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const themeBootstrapScript = [
  "(() => {",
  "  try {",
  "    const savedTheme = localStorage.getItem('bas-theme');",
  "    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;",
  "    const initialTheme = savedTheme === 'light' || savedTheme === 'dark'",
  "      ? savedTheme",
  "      : prefersDark ? 'dark' : 'light';",
  "    document.documentElement.dataset.theme = initialTheme;",
  "  } catch {",
  "    document.documentElement.dataset.theme = 'light';",
  "  }",
  "})();",
].join('\n');

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
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
      </head>
      <body className={displayFont.variable + " " + bodyFont.variable}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
