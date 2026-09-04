"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stagger within a group, in ms. */
  delay?: number;
};

/**
 * Fades its children in the first time they scroll into view.
 *
 * The content is only ever hidden while an observer is actually in a position
 * to reveal it: reduced motion, a missing IntersectionObserver, or an observer
 * that simply never fires all fall back to showing the content outright. A
 * portfolio that renders blank because an animation hook missed is worse than
 * one that never animates.
 */
export function Reveal({ children, as: Tag = "div", className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.02 },
    );
    observer.observe(el);

    // Safety net: nothing stays invisible for longer than this.
    const guard = window.setTimeout(() => setShown(true), 1600);

    return () => {
      observer.disconnect();
      window.clearTimeout(guard);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? "is-in" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
