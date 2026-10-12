"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = { children: ReactNode; className?: string; delay?: number };

/**
 * Rises into view the first time it is scrolled to.
 *
 * Fail-safe by construction: the server renders it visible, and it is only
 * hidden after mount if it starts below the fold — so nothing on screen ever
 * flashes, and a guard timer shows everything if the observer never fires.
 */
export function Reveal({ children, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    el.style.transitionDelay = `${delay}ms`;
    el.classList.add("rv-hide");
    const show = () => el.classList.remove("rv-hide");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        show();
        observer.disconnect();
      },
      { rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(el);
    const guard = window.setTimeout(show, 3000);
    return () => {
      observer.disconnect();
      window.clearTimeout(guard);
      show();
    };
  }, [delay]);

  return (
    <div ref={ref} className={`rv ${className}`}>
      {children}
    </div>
  );
}
