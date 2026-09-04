"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts up to `value` when it first scrolls into view.
 * Renders the final value up front, so a failed observer or a blocked
 * animation frame still shows the real number instead of a zero.
 */
export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let done = false;
    const finish = () => {
      done = true;
      setShown(value);
    };

    const run = () => {
      if (done) return;
      const duration = 900;
      const start = performance.now();
      const step = (now: number) => {
        if (done) return;
        const t = Math.min(1, (now - start) / duration);
        const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        setShown(Math.round(value * eased));
        if (t < 1) requestAnimationFrame(step);
        else done = true;
      };
      requestAnimationFrame(step);
    };

    setShown(0);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        run();
      },
      { threshold: 0.15 },
    );
    observer.observe(el);

    // Safety net: never leave a zero on screen.
    const guard = window.setTimeout(finish, 2500);
    return () => {
      observer.disconnect();
      window.clearTimeout(guard);
      done = true;
    };
  }, [value]);

  return (
    <span ref={ref}>
      {shown}
      {suffix}
    </span>
  );
}
