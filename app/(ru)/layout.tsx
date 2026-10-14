import { fontVars } from "@/lib/fonts";
import { layoutMetadata } from "@/lib/layout-meta";
import "../globals.css";

export const metadata = layoutMetadata("ru");
export { viewport } from "@/lib/layout-meta";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={fontVars} suppressHydrationWarning>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
