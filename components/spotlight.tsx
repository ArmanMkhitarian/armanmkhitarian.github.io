"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Feeds every `.panel` inside it the pointer position, so panels can draw a
 * highlight that follows the cursor along their border. Skipped on touch.
 */
export function Spotlight({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let last: PointerEvent | null = null;

    const paint = () => {
      frame = 0;
      if (!last) return;
      for (const panel of root.querySelectorAll<HTMLElement>(".panel")) {
        const box = panel.getBoundingClientRect();
        panel.style.setProperty("--mx", `${last.clientX - box.left}px`);
        panel.style.setProperty("--my", `${last.clientY - box.top}px`);
      }
    };

    const onMove = (event: PointerEvent) => {
      last = event;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    root.addEventListener("pointermove", onMove);
    return () => {
      root.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
