import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const tight = Inter_Tight({ subsets: ["latin"], variable: "--font-tight", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono-jb", display: "swap" });

const description = `${site.role} — mobile & backend. ${site.lede}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${site.name} — ${site.role}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#08090A",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`no-js ${inter.variable} ${tight.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Drop `no-js` before first paint so reveals only hide when JS can show them. */}
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.remove('no-js')` }} />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
