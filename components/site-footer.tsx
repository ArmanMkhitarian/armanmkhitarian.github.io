import { experience } from "@/lib/content";
import { ContactIcon, contacts } from "./contacts";

/** Experience in two lines, then the same three ways to get in touch. */
export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-line bg-surface/40">
      <div className="rail grid gap-10 py-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="mono-label">{experience.title}</div>
          <ul className="mt-4 space-y-3">
            {experience.items.map((item) => (
              <li key={item.period} className="flex gap-4 text-[14.5px] leading-relaxed">
                <span className="w-16 shrink-0 text-fg-3">{item.period}</span>
                <span className="text-fg-2">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mono-label">Связаться</div>
          <ul className="mt-4 space-y-2.5 text-[14.5px]">
            {contacts.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="link inline-flex items-center gap-2.5 break-all"
                >
                  <ContactIcon icon={c.icon} />
                  <span className="underline-grow">{c.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
