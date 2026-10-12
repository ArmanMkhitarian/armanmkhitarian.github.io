import type { Project } from "@/lib/content";
import { AutoVideo } from "./auto-video";
import { ScrollScrub } from "./scroll-scrub";

/** Tile artwork: a looping clip, a fan of three phones, or one wide shot — on the project's own glow. */
export function Cover({ project }: { project: Project }) {
  const { cover, tint } = project;
  return (
    <div
      className="relative aspect-[16/11] overflow-hidden"
      style={{
        background: `linear-gradient(180deg, color-mix(in srgb, ${tint} 10%, #fff), color-mix(in srgb, ${tint} 30%, #fff))`,
      }}
    >
      {/* The art rises into place as the tile scrolls up to the middle of the screen. */}
      <ScrollScrub
        className="absolute inset-0"
        from={{ yPercent: 10, scale: 0.96 }}
        to={{ yPercent: 0, scale: 1 }}
        start="top bottom"
        end="center center"
      >
        {cover.kind === "video" && (
          <div className="absolute inset-x-0 bottom-0 top-[8%] flex items-end justify-center">
            {cover.sides && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={cover.sides[0]}
                alt=""
                loading="lazy"
                className="-mr-[5%] h-[74%] w-auto origin-bottom-right -rotate-6 group-hover:-translate-x-[10%] group-hover:-rotate-10 transition-[rotate,translate,scale] duration-500 ease-[cubic-bezier(.16,1,.3,1)] rounded-t-xl border-[3px] border-b-0 border-white object-cover brightness-[.85] shadow-[0_14px_34px_-14px_rgba(0,0,0,.45)]"
              />
            )}
            <AutoVideo
              src={cover.src}
              poster={cover.poster}
              className="z-10 h-full w-auto group-hover:-translate-y-[3%] group-hover:scale-[1.03] transition-[rotate,translate,scale] duration-500 ease-[cubic-bezier(.16,1,.3,1)] rounded-t-xl border-[3px] border-b-0 border-white object-cover shadow-[0_18px_40px_-12px_rgba(0,0,0,.55)]"
            />
            {cover.sides && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={cover.sides[1]}
                alt=""
                loading="lazy"
                className="-ml-[5%] h-[74%] w-auto origin-bottom-left rotate-6 group-hover:translate-x-[10%] group-hover:rotate-10 transition-[rotate,translate,scale] duration-500 ease-[cubic-bezier(.16,1,.3,1)] rounded-t-xl border-[3px] border-b-0 border-white object-cover brightness-[.85] shadow-[0_14px_34px_-14px_rgba(0,0,0,.45)]"
              />
            )}
          </div>
        )}

        {cover.kind === "phones" && (
          <div className="absolute inset-x-0 bottom-0 top-[8%] flex items-end justify-center">
            {cover.srcs.map((src, i) => {
              const middle = i === 1;
              return (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt=""
                  loading="lazy"
                  className={`w-auto rounded-t-xl shadow-[0_14px_34px_-14px_rgba(0,0,0,.4)] object-cover object-top transition-[rotate,translate,scale] duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
                    middle
                      ? "z-10 h-full group-hover:-translate-y-[3%] group-hover:scale-[1.03]"
                      : "h-[86%]"
                  } ${i === 0 ? "-mr-[1.5%] origin-bottom-right -rotate-3 group-hover:-translate-x-[8%] group-hover:-rotate-8" : ""} ${i === 2 ? "-ml-[1.5%] origin-bottom-left rotate-3 group-hover:translate-x-[8%] group-hover:rotate-8" : ""}`}
                />
              );
            })}
          </div>
        )}

        {cover.kind === "wide" && (
          <div className="absolute inset-x-[5%] inset-y-[8%] flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cover.src}
              alt=""
              loading="lazy"
              className="max-h-full w-full rounded-xl object-contain shadow-[0_18px_40px_-14px_rgba(0,0,0,.45)] group-hover:-translate-y-[2%] group-hover:scale-[1.03] transition-[rotate,translate,scale] duration-500 ease-[cubic-bezier(.16,1,.3,1)]"
            />
          </div>
        )}
      </ScrollScrub>
    </div>
  );
}
