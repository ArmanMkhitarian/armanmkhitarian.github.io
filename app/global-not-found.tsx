import type { Metadata } from "next";
import { fontVars } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = { title: "404" };

/**
 * Unknown URLs: one page for both languages. Plain <a> on purpose — this page
 * renders outside both root layouts, so every link is a full page load anyway.
 */
/* eslint-disable @next/next/no-html-link-for-pages */
export default function GlobalNotFound() {
  return (
    <html lang="ru" className={fontVars}>
      <body className="grid min-h-screen place-items-center px-6 text-center">
        <div>
          <p className="font-display text-[64px] font-semibold leading-none tracking-[-0.04em] text-fg">
            404
          </p>
          <p className="mt-3 text-[16px] text-fg-2">
            Страница не найдена · Page not found
          </p>
          <p className="mt-6 flex justify-center gap-3 text-[14px]">
            <a
              href="/"
              className="rounded-full bg-fg px-4 py-2 font-medium text-bg"
            >
              На главную
            </a>
            <a
              href="/en/"
              className="rounded-full border border-line-2 px-4 py-2 font-medium text-fg"
            >
              Home
            </a>
          </p>
        </div>
      </body>
    </html>
  );
}
