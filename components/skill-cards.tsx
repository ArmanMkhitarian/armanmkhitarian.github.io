"use client";

import type { PointerEvent } from "react";
import { skills } from "@/lib/content";
import { Reveal } from "./reveal";
import { setWorkFilter } from "./work-grid";

/** Tilts the card toward the pointer; touch and reduced motion keep it flat. */
function tilt(e: PointerEvent<HTMLButtonElement>) {
  if (e.pointerType !== "mouse") return;
  const el = e.currentTarget;
  const box = el.getBoundingClientRect();
  const x = (e.clientX - box.left) / box.width - 0.5;
  const y = (e.clientY - box.top) / box.height - 0.5;
  el.classList.add("is-tilting");
  el.style.setProperty("--rx", `${(-y * 9).toFixed(2)}deg`);
  el.style.setProperty("--ry", `${(x * 11).toFixed(2)}deg`);
}

function untilt(e: PointerEvent<HTMLButtonElement>) {
  const el = e.currentTarget;
  el.classList.remove("is-tilting");
  el.style.setProperty("--rx", "0deg");
  el.style.setProperty("--ry", "0deg");
}

/** The four disciplines; each one filters the work below and scrolls to it. */
export function SkillCards() {
  const open = (tag: (typeof skills)[number]["tag"]) => {
    setWorkFilter(tag);
    document.getElementById("work")?.scrollIntoView({ block: "start" });
  };

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {skills.map((s, i) => (
        <Reveal key={s.title} delay={i * 90} className="h-full">
          <button
            type="button"
            onClick={() => open(s.tag)}
            onPointerMove={tilt}
            onPointerLeave={untilt}
            className="tilt group flex h-full w-full flex-col justify-start overflow-hidden rounded-[var(--r)] border border-line bg-surface text-left hover:-translate-y-1 hover:border-line-2 hover:shadow-[0_22px_40px_-22px_rgba(0,0,0,.4)]"
          >
            <div className="overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.image}
                alt=""
                loading="lazy"
                className="h-[120px] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-110 sm:h-[140px]"
              />
            </div>
            <div className="flex flex-1 flex-col px-4 pb-4 pt-3">
              <h3 className="font-display text-[15.5px] font-semibold leading-tight tracking-[-0.01em] text-fg">
                {s.title}
              </h3>
              <p className="mt-1.5 text-[12.5px] leading-snug text-fg-3">{s.tags.join(" · ")}</p>
              <span className="mt-auto inline-flex items-center gap-1 pt-3 text-[13px] font-medium text-fg-2 transition-colors group-hover:text-accent">
                Смотреть проекты
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </button>
        </Reveal>
      ))}
    </div>
  );
}
