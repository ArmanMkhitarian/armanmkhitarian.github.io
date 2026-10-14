import { getContent, type Locale } from "@/lib/content";
import { Hero } from "./hero";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { Spotlight } from "./spotlight";
import { WorkGrid } from "./work-grid";

/** The home page body, the same for every language. */
export function HomePage({ locale }: { locale: Locale }) {
  const { ui } = getContent(locale);
  return (
    <>
      <SiteHeader
        locale={locale}
        altHref={locale === "en" ? "/" : "/en/"}
        showName={false}
      />
      <main id="top">
        <Hero locale={locale} />
        <section id="work" className="rail scroll-mt-20 pb-16 pt-10">
          <h2 className="font-display text-[clamp(1.5rem,3vw,2.1rem)] font-semibold tracking-[-0.03em] text-fg">
            {ui.projects}
          </h2>
          <div className="mt-5">
            <Spotlight>
              <WorkGrid locale={locale} />
            </Spotlight>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
