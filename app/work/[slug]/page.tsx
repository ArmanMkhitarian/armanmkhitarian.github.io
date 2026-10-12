import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { projects, tags, type GalleryGroup, type Media } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: p.name, description: `${p.type}. ${p.pitch}` };
}

const tagLabel = Object.fromEntries(tags.map((t) => [t.id, t.label]));

const isWide = (m: Media) => m.kind === "image" && m.w / m.h > 1.3;

/** Tall shots, videos and playables share one height so a strip reads as a row. */
const stripHeight = "h-[clamp(340px,62vh,560px)]";

const pad = "clamp(18px,4.5vw,44px)";

function StripItem({ m }: { m: Media }) {
  if (m.kind === "video") {
    return (
      <video
        src={m.src}
        poster={m.poster}
        controls
        playsInline
        preload="metadata"
        style={{ aspectRatio: `${m.w} / ${m.h}` }}
        className={`${stripHeight} w-auto rounded-2xl bg-black object-cover shadow-[0_18px_40px_-18px_rgba(0,0,0,.45)]`}
      />
    );
  }
  if (m.kind === "playable") {
    return (
      <div
        className={`${stripHeight} aspect-[9/16] overflow-hidden rounded-2xl bg-black shadow-[0_18px_40px_-18px_rgba(0,0,0,.45)]`}
      >
        <iframe
          src={m.src}
          title={m.caption ?? "Playable"}
          loading="lazy"
          className="h-full w-full"
        />
      </div>
    );
  }
  return (
    <a href={m.src} target="_blank" rel="noreferrer" className="block">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={m.src}
        alt={m.caption ?? ""}
        width={m.w}
        height={m.h}
        loading="lazy"
        className={`${m.small ? "h-[clamp(220px,34vh,320px)]" : stripHeight} w-auto rounded-2xl object-contain shadow-[0_18px_40px_-18px_rgba(0,0,0,.45)]`}
      />
    </a>
  );
}

function GroupItems({ group }: { group: GalleryGroup }) {
  const wide = group.items.filter(isWide);
  const strip = group.items.filter((m) => !isWide(m));
  return (
    <>
      {wide.length > 0 && (
        // One wide shot gets the full width; several sit side by side.
        <div
          className={`rail mt-5 grid gap-5 ${wide.length > 1 ? "md:grid-cols-2" : ""}`}
        >
          {wide.map((m) =>
            m.kind === "image" ? (
              <figure key={m.src}>
                <a href={m.src} target="_blank" rel="noreferrer">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.src}
                    alt={m.caption ?? ""}
                    width={m.w}
                    height={m.h}
                    loading="lazy"
                    className="w-full max-w-[980px] rounded-2xl shadow-[0_18px_40px_-18px_rgba(0,0,0,.45)]"
                  />
                </a>
                {m.caption && (
                  <figcaption className="mt-2 text-[13px] text-fg-3">
                    {m.caption}
                  </figcaption>
                )}
              </figure>
            ) : null,
          )}
        </div>
      )}
      {strip.length > 0 && (
        <div className="rail">
          <div
            className="mt-5 flex snap-x gap-5 overflow-x-auto pb-4"
            style={{
              marginInline: `calc(-1 * ${pad})`,
              paddingInline: pad,
              scrollPaddingInline: pad,
            }}
          >
            {strip.map((m) => (
              <figure key={m.src} className="shrink-0 snap-start">
                <StripItem m={m} />
                {m.caption && (
                  <figcaption className="mt-2.5 max-w-[300px] text-[13px] text-fg-3">
                    {m.caption}
                    {m.kind === "playable" && (
                      <>
                        {" · "}
                        <a
                          href={m.src}
                          target="_blank"
                          rel="noreferrer"
                          className="link underline-grow"
                        >
                          открыть отдельно
                        </a>
                      </>
                    )}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((x) => x.slug === slug);
  if (index < 0) notFound();
  const p = projects[index];
  const next = projects[(index + 1) % projects.length];
  const [lead, ...rest] = p.gallery;
  /** Numbers in the project's own colour, darkened enough to read on white. */
  const ink = `color-mix(in srgb, ${p.tint} 72%, #000)`;

  return (
    <>
      <SiteHeader />
      <main className="pb-16">
        <div className="rail pt-6 sm:pt-10">
          <Link href="/" className="link text-[13.5px]">
            ← Все проекты
          </Link>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-5">
            <div className="min-w-0">
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-surface-3 px-2 py-0.5 text-[11.5px] text-fg-3"
                  >
                    {tagLabel[t]}
                  </span>
                ))}
              </div>
              <h1 className="mt-3 font-display text-[clamp(1.9rem,4.6vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-fg">
                {p.name}
              </h1>
              <p className="mt-2 text-[16px] text-fg-2">{p.type}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {p.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-line-2 bg-surface px-4 py-2 text-[13.5px] text-fg transition-colors hover:border-accent hover:text-accent"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* The work first: the lead gallery on the project's own colour. */}
        {lead && (
          <section
            className="mt-8 py-8 sm:py-10"
            style={{
              background: `color-mix(in srgb, ${p.tint} 16%, var(--bg))`,
            }}
          >
            <div className="rail">
              <h2 className="font-display text-[18px] font-semibold tracking-[-0.01em] text-fg">
                {lead.title}
              </h2>
              {lead.note && (
                <p className="mt-1 text-[14px] text-fg-2">{lead.note}</p>
              )}
            </div>
            <GroupItems group={lead} />
          </section>
        )}

        <div className="rail">
          <Reveal>
            <section
              className="mt-10 rounded-[var(--r-lg)] border border-line bg-surface p-6 sm:p-8"
              style={{ boxShadow: `inset 4px 0 0 ${p.tint}` }}
            >
              <div className="mono-label">Результат</div>
              <p className="mt-3 max-w-[860px] font-display text-[clamp(1.25rem,2.4vw,1.75rem)] font-semibold leading-[1.25] tracking-[-0.02em] text-fg">
                {p.result}
              </p>
              <div className="mt-7 grid gap-6 sm:grid-cols-3">
                {p.metrics.map((m) => (
                  <div key={m.label}>
                    <div
                      className="font-display text-[clamp(2rem,4.4vw,3rem)] font-semibold leading-none tracking-[-0.03em]"
                      style={{ color: ink }}
                    >
                      {m.value}
                    </div>
                    <div className="mt-2 max-w-[240px] text-[13.5px] leading-snug text-fg-2">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal>
            <div className="mt-10 grid gap-8 md:grid-cols-[1fr_1.4fr]">
              <section>
                <div className="mono-label">Задача</div>
                <p className="mt-3 text-[17px] leading-relaxed text-fg">
                  {p.task}
                </p>
              </section>
              <section>
                <div className="mono-label">Что сделал</div>
                <ul className="mt-3 space-y-2.5">
                  {p.did.map((d) => (
                    <li
                      key={d}
                      className="flex gap-3 text-[16px] leading-relaxed text-fg-2"
                    >
                      <span
                        className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: p.tint }}
                      />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </Reveal>
        </div>

        {rest.map((g) => (
          <Reveal key={g.title}>
            <section className="mt-14">
              <div className="rail">
                <h2 className="font-display text-[20px] font-semibold tracking-[-0.02em] text-fg">
                  {g.title}
                </h2>
                {g.note && (
                  <p className="mt-1 text-[14px] text-fg-3">{g.note}</p>
                )}
              </div>
              <GroupItems group={g} />
            </section>
          </Reveal>
        ))}

        <div className="rail mt-14">
          <div className="mono-label">Технологии</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line-2 bg-surface px-3 py-1.5 text-[13px] text-fg-2"
              >
                {t}
              </span>
            ))}
          </div>

          <Link
            href={`/work/${next.slug}/`}
            className="panel mt-12 flex items-center justify-between gap-4 p-5 sm:p-6"
          >
            <div className="min-w-0">
              <div className="mono-label">Следующий проект</div>
              <div className="mt-2 truncate font-display text-[20px] font-semibold text-fg">
                {next.name}
              </div>
            </div>
            <span className="text-[20px] text-fg-3">→</span>
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
