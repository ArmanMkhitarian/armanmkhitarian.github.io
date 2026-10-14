import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});
const tight = Inter_Tight({
  subsets: ["latin", "cyrillic"],
  variable: "--font-tight",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-mono-jb",
  display: "swap",
});

/** Font CSS variables for the <html> element of every root layout. */
export const fontVars = `${inter.variable} ${tight.variable} ${mono.variable}`;
