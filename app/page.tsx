import Image from "next/image";
import { Counter } from "@/components/counter";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { Spotlight } from "@/components/spotlight";
import {
  capabilities,
  products,
  shippedIcons,
  site,
  stack,
  stats,
  publishedExperience,
  type Product,
} from "@/lib/content";

const bySlug = (slug: string) => products.find((p) => p.slug === slug)!;
const stoptime = bySlug("stoptime");
const foodino = bySlug("foodino");
const attic = bySlug("attic");

const storeLabel = { play: "Google Play", appstore: "App Store", web: "Website" } as const;

function StoreLinks({ product, className = "" }: { product: Product; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {product.stores.map((store) => (
        <li key={store.href}>
          <a
            href={store.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface-2 px-2.5 py-1.5 font-mono text-[11px] text-fg-2 transition-colors hover:border-line-2 hover:text-fg"
          >
            {storeLabel[store.kind]}
            <span aria-hidden="true" className="text-fg-4">↗</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function Status({ product }: { product: Product }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-3">
      <span className={`dot ${product.status === "review" ? "dot-pending" : "dot-live"}`} />
      {product.statusLabel}
    </span>
  );
}

function AppIcon({ src, name, size = 44 }: { src: string; name: string; size?: number }) {
  return (
    <Image
      src={src}
      alt={`${name} app icon`}
      width={size}
      height={size}
      className="rounded-[22%] ring-1 ring-white/10"
      style={{ width: size, height: size }}
    />
  );
}

function SectionHead({ label, title, lead }: { label: string; title: string; lead?: string }) {
  return (
    <Reveal className="max-w-2xl">
      <p className="mono-label">{label}</p>
      <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,2.9rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-fg">
        {title}
      </h2>
      {lead ? <p className="mt-4 text-[17px] leading-relaxed text-fg-2">{lead}</p> : null}
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        {/* ── Hero + bento ─────────────────────────────────────── */}
        <section className="relative">
          <div className="aurora" aria-hidden="true" />
          <div className="hairlines" aria-hidden="true" />

          <div className="rail relative pt-16 pb-14 sm:pt-24 sm:pb-20">
            <Reveal>
              <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-3">
                <span className="dot dot-live" />
                {site.availability} · {site.location}
              </p>
            </Reveal>

            <Reveal delay={70}>
              <h1 className="mt-8 font-display text-[clamp(2.75rem,8.5vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-fg">
                {site.headline.map((line, i) => (
                  <span key={line} className={i === 2 ? "block text-fg-3" : "block"}>
                    {line}
                  </span>
                ))}
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-fg-2">{site.lede}</p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${site.email}`}
                  className="rounded-xl bg-fg px-5 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
                >
                  Start a conversation
                </a>
                <a
                  href="#work"
                  className="rounded-xl border border-line-2 px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent-hi"
                >
                  See what I shipped
                </a>
              </div>
            </Reveal>

            {/* Bento: the products carry the colour. */}
            <Spotlight className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Reveal
                as="article"
                className="panel group flex flex-col justify-between p-6 sm:col-span-2 lg:row-span-2"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <AppIcon src={stoptime.icon!} name={stoptime.name} size={56} />
                    <Status product={stoptime} />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-fg">
                    {stoptime.name}
                  </h3>
                  <p className="mt-1 text-sm text-fg-3">{stoptime.type}</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-fg-2">{stoptime.pitch}</p>
                  <ul className="mt-6 space-y-2.5">
                    {stoptime.facts?.map((fact) => (
                      <li key={fact} className="flex items-start gap-3 text-[14px] text-fg-3">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 border-t border-line pt-6">
                  <ul className="mb-6 flex flex-wrap gap-x-3 gap-y-1">
                    {stoptime.tech.map((tech) => (
                      <li key={tech} className="font-mono text-[11px] text-fg-4">
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <p className="font-display text-[clamp(3rem,7vw,4.5rem)] font-semibold leading-none tracking-[-0.04em] text-fg">
                    <Counter value={419} />
                  </p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-4">
                    players a day
                  </p>
                  <StoreLinks product={stoptime} className="mt-6" />
                </div>
              </Reveal>

              <Reveal as="article" delay={60} className="panel flex flex-col justify-between p-6 sm:col-span-2">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-hi">
                      SaaS
                    </span>
                    <Status product={foodino} />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-fg">
                    {foodino.name}
                  </h3>
                  <p className="mt-1 text-sm text-fg-3">{foodino.type}</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-fg-2">{foodino.pitch}</p>
                  <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                    {foodino.facts?.map((fact) => (
                      <li key={fact} className="flex items-center gap-2 text-[13px] text-fg-3">
                        <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
                <StoreLinks product={foodino} className="mt-6" />
              </Reveal>

              <Reveal as="article" delay={120} className="panel flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <AppIcon src={attic.icon!} name={attic.name} size={44} />
                    <span className="mt-1.5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-3">
                      <span className="dot dot-pending" />
                      iOS in review
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-fg">
                    {attic.name}
                  </h3>
                  <p className="mt-1 text-sm text-fg-3">{attic.type}</p>
                </div>
                <div className="mt-6">
                  <p className="font-display text-4xl font-semibold tracking-[-0.03em] text-fg">
                    <Counter value={27} />
                  </p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-4">
                    languages shipped
                  </p>
                </div>
              </Reveal>

              <Reveal as="article" delay={180} className="panel p-6">
                <p className="mono-label">Everything shipped</p>
                <ul className="mt-5 grid grid-cols-4 gap-3">
                  {shippedIcons.map((app) => (
                    <li key={app.name} title={app.name}>
                      <AppIcon src={app.icon} name={app.name} size={40} />
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[13px] leading-relaxed text-fg-3">
                  Eight apps on Google Play and the App Store, built and released solo.
                </p>
              </Reveal>
            </Spotlight>

            {/* Metric strip */}
            <Reveal delay={120}>
              <dl className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="panel px-5 py-5">
                    <dt className="font-display text-3xl font-semibold tracking-[-0.03em] text-fg">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </dt>
                    <dd className="mt-1.5 text-[13px] font-medium text-fg-2">{stat.label}</dd>
                    <dd className="font-mono text-[11px] text-fg-4">{stat.note}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* ── Work index ───────────────────────────────────────── */}
        <section id="work" className="rail py-20 sm:py-28">
          <SectionHead
            label="Index · what I shipped"
            title="Nine products, and what each one taught"
            lead="Every one of these is live: in a store, or serving paying customers. Most were designed, built, released and operated by me alone."
          />

          {/* The three that carry the most engineering get full write-ups. */}
          <Spotlight className="mt-12 space-y-3">
            {products
              .filter((product) => product.featured)
              .map((product, i) => (
                <Reveal key={product.slug} as="article" delay={i * 50} className="panel p-6 sm:p-8">
                  <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
                    <div className="flex items-start gap-4 lg:w-[260px] lg:shrink-0">
                      {product.icon ? (
                        <AppIcon src={product.icon} name={product.name} size={52} />
                      ) : (
                        <span className="flex h-[52px] w-[52px] items-center justify-center rounded-[22%] bg-surface-3 font-mono text-sm text-accent-hi ring-1 ring-white/10">
                          {product.name.slice(0, 2)}
                        </span>
                      )}
                      <div className="min-w-0">
                        <h3 className="font-display text-xl font-semibold tracking-tight text-fg">
                          {product.name}
                        </h3>
                        <p className="mt-0.5 text-sm text-fg-3">{product.type}</p>
                        <div className="mt-2.5">
                          <Status product={product} />
                        </div>
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[17px] leading-relaxed text-fg">{product.pitch}</p>
                      <p className="mt-3 text-[15px] leading-relaxed text-fg-3">{product.detail}</p>
                      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                        <StoreLinks product={product} />
                        <ul className="flex flex-wrap gap-x-3 gap-y-1">
                          {product.tech.map((tech) => (
                            <li key={tech} className="font-mono text-[11px] text-fg-4">
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {product.metric ? (
                      <div className="lg:w-28 lg:shrink-0 lg:text-right">
                        <p className="font-display text-4xl font-semibold tracking-[-0.035em] text-fg">
                          {product.metric.value}
                        </p>
                        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-4">
                          {product.metric.label}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </Reveal>
              ))}
          </Spotlight>

          {/* The rest as a compact shelf, so the page has a rhythm. */}
          <Reveal className="mt-14 flex items-center gap-4">
            <p className="mono-label">Also shipped</p>
            <span className="h-px flex-1 bg-line" />
          </Reveal>

          <Spotlight className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {products
              .filter((product) => !product.featured)
              .map((product, i) => (
                <Reveal
                  key={product.slug}
                  as="article"
                  delay={Math.min(i, 3) * 50}
                  className="panel flex flex-col p-5"
                >
                  <div className="flex items-start gap-3.5">
                    {product.icon ? (
                      <AppIcon src={product.icon} name={product.name} size={40} />
                    ) : null}
                    <div className="min-w-0">
                      <h3 className="font-display text-base font-semibold tracking-tight text-fg">
                        {product.name}
                      </h3>
                      <p className="mt-0.5 text-[13px] text-fg-3">{product.type}</p>
                    </div>
                    {product.metric ? (
                      <p className="ml-auto text-right font-display text-lg font-semibold tracking-tight text-fg">
                        {product.metric.value}
                      </p>
                    ) : null}
                  </div>

                  <p className="mt-4 flex-1 text-[14px] leading-relaxed text-fg-2">{product.pitch}</p>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <StoreLinks product={product} />
                    <Status product={product} />
                  </div>
                </Reveal>
              ))}
          </Spotlight>
        </section>

        {/* ── Services ─────────────────────────────────────────── */}
        <section id="services" className="border-t border-line bg-surface/40">
          <div className="rail py-20 sm:py-28">
            <SectionHead
              label="Services · for teams and clients"
              title="What you get when you bring me in"
              lead="Hiring me into a team and hiring me for a project get the same thing: someone who owns a feature from the idea to the version real people use — and who stays around for what happens after."
            />
            <Spotlight className="mt-12 grid gap-3 sm:grid-cols-2">
              {capabilities.map((item, i) => (
                <Reveal key={item.title} delay={i * 50} className="panel p-7">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-fg">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-fg-2">{item.body}</p>
                </Reveal>
              ))}
            </Spotlight>
          </div>
        </section>

        {/* ── Stack ────────────────────────────────────────────── */}
        <section id="stack" className="rail py-20 sm:py-28">
          <SectionHead label="Stack" title="Tools I reach for" />
          <Spotlight className="mt-12 panel divide-y divide-[color:var(--line)]">
            {stack.map((row) => (
              <Reveal
                key={row.group}
                className="flex flex-col gap-3 p-6 sm:flex-row sm:items-baseline sm:gap-10"
              >
                <h3 className="w-28 shrink-0 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-4">
                  {row.group}
                </h3>
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  {row.items.map((item) => (
                    <li key={item} className="text-[15px] text-fg-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </Spotlight>

          <div className="mt-16">
            <SectionHead label="Experience" title="Where I've worked" />
            <Spotlight className="mt-12 space-y-3">
              {publishedExperience.map((job, i) => (
                <Reveal
                  key={`${job.title}-${i}`}
                  className="panel flex flex-col gap-3 p-6 sm:flex-row sm:gap-10 sm:p-7"
                >
                  <p className="w-28 shrink-0 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-4">
                    {job.period}
                  </p>
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-fg">
                      {job.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-accent-hi">{job.org}</p>
                    <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-fg-2">{job.body}</p>
                  </div>
                </Reveal>
              ))}
            </Spotlight>
          </div>
        </section>

        {/* ── Contact ──────────────────────────────────────────── */}
        <section id="contact" className="relative border-t border-line">
          <div className="rail py-24 sm:py-32">
            <Reveal className="max-w-3xl">
              <p className="mono-label">Contact</p>
              <h2 className="mt-5 font-display text-[clamp(2.2rem,6vw,4.2rem)] font-semibold leading-[1.0] tracking-[-0.04em] text-fg">
                Tell me what you&apos;re building.
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-fg-2">
                Hiring for a team, or need a product built and shipped? Write to me — I answer every
                message myself.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-9 inline-block font-mono text-[clamp(0.95rem,3vw,1.5rem)] text-fg underline-grow"
              >
                {site.email}
              </a>
              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm">
                <a href={site.github} target="_blank" rel="noreferrer" className="link underline-grow">
                  GitHub ↗
                </a>
                <a
                  href={site.brand.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link underline-grow"
                >
                  {site.brand.label} ↗
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="rail flex flex-col gap-2 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] text-fg-4">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="font-mono text-[11px] text-fg-4">Next.js · GitHub Pages</p>
        </div>
      </footer>
    </>
  );
}
