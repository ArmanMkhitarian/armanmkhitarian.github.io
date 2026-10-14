"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, type ReactNode } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Vars = gsap.TweenVars;

type Props = {
  children: ReactNode;
  className?: string;
  /** State at the start of the scroll range. */
  from: Vars;
  /** State at the end of the scroll range. */
  to: Vars;
  start?: string;
  end?: string;
};

/**
 * Ties a transform to scroll position (scrubbed, with a short eased catch-up).
 * Without JS or with reduced motion the markup simply stays where it is.
 */
export function ScrollScrub({
  children,
  className = "",
  from,
  to,
  start = "top bottom",
  end = "bottom top",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(ref.current, from, {
          ...to,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start, end, scrub: 0.6 },
        });
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
