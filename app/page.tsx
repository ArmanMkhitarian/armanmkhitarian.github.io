import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Spotlight } from "@/components/spotlight";
import { WorkGrid } from "@/components/work-grid";

export default function Home() {
  return (
    <>
      <SiteHeader showName={false} />
      <main id="top">
        <Hero />
        <section id="work" className="rail scroll-mt-20 pb-16 pt-10">
          <h2 className="font-display text-[clamp(1.5rem,3vw,2.1rem)] font-semibold tracking-[-0.03em] text-fg">
            Проекты
          </h2>
          <div className="mt-5">
            <Spotlight>
              <WorkGrid />
            </Spotlight>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
