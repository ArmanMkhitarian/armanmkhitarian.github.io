import { Reveal } from "@/components/reveal";
import { experience, nav, projects, services, site, stack, stats } from "@/lib/content";

function SectionHeading({ index, title, lead }: { index: string; title: string; lead?: string }) {
  return (
    <Reveal className="max-w-2xl">
      <div className="flex items-center gap-3">
        <span className="eyebrow">{index}</span>
        <span className="h-px w-8 bg-line-2" />
      </div>
      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-ink">{title}</h2>
      {lead ? <p className="mt-3 text-base sm:text-lg leading-relaxed text-ink-3">{lead}</p> : null}
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md">
        <div className="rail flex h-16 items-center justify-between gap-6">
          <a href="#top" className="font-mono text-sm tracking-tight text-ink">
            {site.name}
            <span className="text-ember">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-7">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-ember text-sm text-ink-3 hover:text-ember"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={`mailto:${site.email}`}
            className="rounded-full border border-line-2 px-4 py-2 text-sm text-ink transition-colors hover:border-ember hover:text-ember"
          >
            Get in touch
          </a>
        </div>
      </header>

      <main id="top">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 grid-fade" aria-hidden="true" />
          <div className="rail relative pt-20 pb-16 sm:pt-28 sm:pb-24">
            <Reveal>
              <p className="eyebrow flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
                </span>
                Open to work &amp; new projects · {site.location}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 max-w-4xl text-[clamp(2.5rem,7vw,5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink">
                I build products
                <br />
                and{" "}
                <span className="font-display italic font-normal text-ember">actually ship</span>{" "}
                them.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-2">{site.tagline}</p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
                >
                  See the work
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-line-2 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ember hover:text-ember"
                >
                  Start a project
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <dl className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-10 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="font-mono text-3xl sm:text-4xl tracking-tight text-ink">
                      {stat.value}
                    </dt>
                    <dd className="mt-2 text-sm font-medium text-ink-2">{stat.label}</dd>
                    <dd className="text-sm text-ink-4">{stat.note}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* ── Work ─────────────────────────────────────────────── */}
        <section id="work" className="rail py-20 sm:py-28">
          <SectionHeading
            index="01 / work"
            title="Selected work"
            lead={site.intro}
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal
                key={project.slug}
                as="article"
                delay={(i % 2) * 80}
                className={`group flex flex-col rounded-2xl border border-line bg-paper-2 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-line-2 hover:shadow-[var(--shadow-lg)] ${
                  project.featured ? "lg:col-span-1" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-ink">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm text-ink-3">{project.kind}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-line-2 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-3">
                    {project.status}
                  </span>
                </div>

                <p className="mt-5 text-[15px] leading-relaxed text-ink-2">{project.summary}</p>

                <ul className="mt-5 space-y-2.5">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-ink-3">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md bg-paper-3 px-2.5 py-1 font-mono text-[11px] text-ink-3"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Services ─────────────────────────────────────────── */}
        <section id="services" className="border-y border-line bg-paper-2">
          <div className="rail py-20 sm:py-28">
            <SectionHeading
              index="02 / services"
              title="What I can build for you"
              lead="Hiring me for a team or a project gets the same thing: someone who owns a feature from the idea to the version that real people use."
            />
            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {services.map((service, i) => (
                <Reveal key={service.title} delay={i * 60} className="bg-paper p-7 sm:p-9">
                  <h3 className="text-lg font-semibold tracking-tight text-ink">{service.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-3">{service.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stack ────────────────────────────────────────────── */}
        <section id="stack" className="rail py-20 sm:py-28">
          <SectionHeading index="03 / stack" title="Tools I reach for" />
          <div className="mt-14 space-y-px overflow-hidden rounded-2xl border border-line bg-line">
            {stack.map((row, i) => (
              <Reveal
                key={row.group}
                delay={i * 50}
                className="flex flex-col gap-4 bg-paper p-6 sm:flex-row sm:items-baseline sm:gap-10 sm:p-7"
              >
                <h3 className="w-36 shrink-0 font-mono text-xs uppercase tracking-[0.14em] text-ink-4">
                  {row.group}
                </h3>
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  {row.items.map((item) => (
                    <li key={item} className="text-[15px] text-ink-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Experience ───────────────────────────────────────── */}
        <section id="experience" className="border-y border-line bg-paper-2">
          <div className="rail py-20 sm:py-28">
            <SectionHeading index="04 / experience" title="Where I've worked" />
            <ol className="mt-14 space-y-px overflow-hidden rounded-2xl border border-line bg-line">
              {experience.map((job, i) => (
                <Reveal
                  key={`${job.title}-${i}`}
                  as="li"
                  delay={i * 60}
                  className="flex flex-col gap-3 bg-paper p-6 sm:flex-row sm:gap-10 sm:p-8"
                >
                  <p className="w-36 shrink-0 font-mono text-xs uppercase tracking-[0.14em] text-ink-4">
                    {job.period}
                  </p>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-ink">{job.title}</h3>
                    <p className="mt-0.5 text-sm text-ember">{job.org}</p>
                    <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-3">
                      {job.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Contact ──────────────────────────────────────────── */}
        <section id="contact" className="rail py-24 sm:py-32">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">05 / contact</span>
            <h2 className="mt-5 text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
              Have something worth{" "}
              <span className="font-display italic font-normal text-ember">building</span>?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-2">
              Whether you&apos;re hiring for a team or need a product built from scratch — write to
              me and tell me what you have in mind.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-10 inline-block font-mono text-[clamp(1rem,3.2vw,1.6rem)] text-ink link-ember"
            >
              {site.email}
            </a>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <a href={site.github} className="link-ember text-ink-3" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a
                href={site.brand.href}
                className="link-ember text-ink-3"
                target="_blank"
                rel="noreferrer"
              >
                {site.brand.label}
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="rail flex flex-col gap-2 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-ink-4">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="font-mono text-xs text-ink-4">Built with Next.js · hosted on GitHub Pages</p>
        </div>
      </footer>
    </>
  );
}
