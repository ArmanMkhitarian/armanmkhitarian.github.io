import { getContent, type Locale } from "@/lib/content";
import { CountUp } from "./count-up";
import { ScrollScrub } from "./scroll-scrub";
import { SkillCards } from "./skill-cards";

/** A portfolio opening: name and one line on the left, the facts on the right, then the four things he does. */
export function Hero({ locale }: { locale: Locale }) {
  const { hero, site } = getContent(locale);
  return (
    <>
      <section className="rail grid items-center gap-8 pt-12 sm:pt-16 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
        <ScrollScrub
          from={{ y: 0, opacity: 1 }}
          to={{ y: -60, opacity: 0.35 }}
          start="top 15%"
          end="bottom top"
        >
          <div className="flex items-center gap-4 sm:gap-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/avatar.webp"
              alt={site.name}
              width={96}
              height={96}
              className="fade-up h-16 w-16 shrink-0 rounded-full object-cover shadow-[0_10px_24px_-12px_rgba(0,0,0,.4)] ring-4 ring-white sm:h-24 sm:w-24"
            />
            <h1
              aria-label={site.name}
              className="font-display text-[clamp(2.4rem,6vw,4.2rem)] font-semibold leading-[1] tracking-[-0.04em] text-fg"
            >
              {site.name.split(" ").map((word, w, words) => {
                const before = words.slice(0, w).join("").length;
                return (
                  <span key={word} aria-hidden="true">
                    <span className="name-mask">
                      {[...word].map((ch, c) => (
                        <span
                          key={c}
                          className="name-char"
                          style={{ animationDelay: `${(before + c) * 28}ms` }}
                        >
                          {ch}
                        </span>
                      ))}
                    </span>
                    {w < words.length - 1 ? " " : ""}
                  </span>
                );
              })}
            </h1>
          </div>
          <p
            style={{ animationDelay: "250ms" }}
            className="fade-up mt-4 max-w-[620px] text-[clamp(1.05rem,1.6vw,1.25rem)] leading-relaxed text-fg-2"
          >
            {hero.intro}
          </p>
        </ScrollScrub>

        <ul className="grid gap-5">
          {hero.facts.map((f, i) => (
            <li
              key={f.label}
              style={{ animationDelay: `${350 + i * 120}ms` }}
              className="fade-up flex items-center gap-4"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={f.icon}
                alt=""
                width={64}
                height={64}
                style={{ animationDelay: `${i * -1.6}s` }}
                className="floaty h-16 w-16 shrink-0 rounded-2xl shadow-[0_12px_26px_-14px_rgba(0,0,0,.35)]"
              />
              <div className="min-w-0">
                <div className="font-display text-[26px] font-semibold leading-none tracking-[-0.02em] text-fg">
                  <CountUp value={f.value} />
                </div>
                <div className="mt-1.5 text-[14px] leading-snug text-fg">
                  {f.label}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="rail pt-10">
        <SkillCards locale={locale} />
      </section>
    </>
  );
}
