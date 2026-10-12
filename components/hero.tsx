import { hero, site } from "@/lib/content";
import { CountUp } from "./count-up";
import { ScrollScrub } from "./scroll-scrub";
import { SkillCards } from "./skill-cards";

/** A profile-style opening: avatar, name and one line centred, the facts in a row, then the four things he does. */
export function Hero() {
  return (
    <>
      <section className="rail flex flex-col items-center pt-12 text-center sm:pt-16">
        <ScrollScrub
          from={{ y: 0, opacity: 1 }}
          to={{ y: -60, opacity: 0.35 }}
          start="top 15%"
          end="bottom top"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/avatar.webp"
            alt={site.name}
            width={96}
            height={96}
            className="fade-up mx-auto mb-5 h-24 w-24 rounded-full object-cover shadow-[0_10px_24px_-12px_rgba(0,0,0,.4)] ring-4 ring-white  sm:h-28 sm:w-28"
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
          <p
            style={{ animationDelay: "250ms" }}
            className="fade-up mx-auto mt-4 max-w-[620px] text-[clamp(1.05rem,1.6vw,1.25rem)] leading-relaxed text-fg-2"
          >
            {hero.intro}
          </p>
        </ScrollScrub>

        <ul className="mt-9 grid w-full max-w-[860px] grid-cols-3 gap-3 sm:mt-10 sm:gap-6">
          {hero.facts.map((f, i) => (
            <li
              key={f.label}
              style={{ animationDelay: `${350 + i * 120}ms` }}
              className="fade-up flex flex-col items-center gap-2 sm:gap-3"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={f.icon}
                alt=""
                width={64}
                height={64}
                style={{ animationDelay: `${i * -1.6}s` }}
                className="floaty h-12 w-12 shrink-0 rounded-xl sm:h-16 sm:w-16 sm:rounded-2xl shadow-[0_12px_26px_-14px_rgba(0,0,0,.35)]"
              />
              <div className="min-w-0">
                <div className="font-display text-[20px] font-semibold leading-none tracking-[-0.02em] text-fg sm:text-[26px]">
                  <CountUp value={f.value} />
                </div>
                <div className="mt-1.5 text-[12px] leading-snug text-fg-3 sm:text-[14px]">
                  {f.label}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="rail pt-10">
        <SkillCards />
      </section>
    </>
  );
}
