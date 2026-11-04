"use client";

import { useEffect, useRef, useState } from "react";
import { STAGES } from "@/data/content";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const COUNT = STAGES.length;
const AUTO_MS = 4200;

export default function ServicesJourney() {
  const [step, setStep] = useState(0);
  // Auto-advance runs until the visitor picks a stage or uses an arrow.
  const [autoplay, setAutoplay] = useState(true);
  const reducedMotion = usePrefersReducedMotion();
  const playing = autoplay && !reducedMotion;
  const scroller = useRef<HTMLDivElement>(null);
  const nodes = useRef<Array<HTMLButtonElement | null>>([]);

  // On narrow screens the track scrolls sideways; keep the active stage in view.
  // Scrolls only the track itself, never the page.
  useEffect(() => {
    const box = scroller.current;
    const node = nodes.current[step];
    if (!box || !node || box.scrollWidth <= box.clientWidth) return;
    const b = box.getBoundingClientRect();
    const n = node.getBoundingClientRect();
    box.scrollBy({
      left: n.left + n.width / 2 - (b.left + b.width / 2),
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }, [step, reducedMotion]);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setStep((s) => (s + 1) % COUNT), AUTO_MS);
    return () => clearInterval(id);
  }, [playing]);

  const go = (i: number) => {
    setStep((i + COUNT) % COUNT);
    setAutoplay(false);
  };

  const cur = STAGES[step];
  const num = (i: number) => String(i + 1).padStart(2, "0");

  return (
    <section id="services" className="bg-deep">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-[clamp(40px,5vw,64px)] px-[clamp(20px,3vw,32px)] py-[clamp(80px,10vw,128px)]">
        <div className="flex flex-wrap items-end justify-between gap-x-20 gap-y-6">
          <div className="rv flex flex-[1_1_620px] flex-col gap-[22px]">
            <span className="font-mono text-xs tracking-[0.18em] text-mint uppercase">Services</span>
            <h2 className="font-serif text-[clamp(40px,4.6vw,68px)] leading-[1.02] font-normal tracking-[-0.02em] text-balance">
              Support at every stage of the <em className="text-mint">patient journey.</em>
            </h2>
          </div>
          <p className="rv flex-[0_1_360px] text-base leading-[1.65] text-soft">
            From the first inquiry to the last follow-up. Select a stage to see what she handles.
          </p>
        </div>

        {/* Journey track: scrolls sideways on narrow screens */}
        <div ref={scroller} className="-mx-[clamp(20px,3vw,32px)] overflow-x-auto px-[clamp(20px,3vw,32px)]">
          <div className="relative min-w-[760px] pt-1">
            <div
              aria-hidden="true"
              className="absolute top-8 right-[8.333%] left-[8.333%] h-0.5 overflow-hidden bg-mid"
            >
              <div
                className="fill absolute top-0 bottom-0 left-0 bg-mint"
                style={{ width: `${(step / (COUNT - 1)) * 100}%` }}
              />
              <div
                className="streak absolute top-0 bottom-0 w-[12%]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(169,211,195,0), rgba(244,240,232,.9), rgba(169,211,195,0))",
                }}
              />
            </div>
            <div className="relative grid grid-cols-6">
              {STAGES.map((s, i) => {
                const active = i === step;
                const done = i < step;
                return (
                  <button
                    key={s.stage}
                    ref={(el) => {
                      nodes.current[i] = el;
                    }}
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Stage ${i + 1}: ${s.stage}`}
                    aria-current={active ? "step" : undefined}
                    className="nodebtn flex cursor-pointer flex-col items-center gap-4 text-cream"
                  >
                    <span
                      className={`node flex size-16 items-center justify-center rounded-full border font-mono text-sm ${
                        active
                          ? "border-mint bg-mint text-deep"
                          : done
                            ? "border-mid bg-mid text-[#E4EBE7]"
                            : "border-[#3A5650] bg-deep text-dim"
                      }`}
                    >
                      {num(i)}
                    </span>
                    <span className={`text-[15px] font-medium ${active ? "text-cream" : "text-dim"}`}>
                      {s.stage}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-16 gap-y-10 rounded-[clamp(22px,3vw,32px)] border border-mint/14 bg-raised p-[clamp(24px,4vw,48px)]">
          <div key={`a${step}`} className="swap flex flex-[1_1_520px] flex-col gap-[18px]">
            <span className="font-mono text-xs tracking-[0.16em] text-dim uppercase">
              Stage {num(step)} of {num(COUNT - 1)}
            </span>
            <h3 className="font-serif text-[clamp(34px,3.6vw,52px)] leading-[1.05] font-normal tracking-[-0.015em]">
              {cur.title}
            </h3>
            <p className="max-w-[560px] text-[17px] leading-[1.65] text-softer">{cur.desc}</p>
          </div>
          <div
            key={`b${step}`}
            className="swap flex flex-[0_1_340px] flex-col justify-between gap-8"
            style={{ animationDelay: ".08s" }}
          >
            <div className="flex flex-col gap-3.5">
              <span className="font-mono text-[11px] tracking-[0.16em] text-dim uppercase">Typical tools</span>
              <div className="flex flex-wrap gap-2">
                {cur.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-cream/22 px-[15px] py-[9px] text-sm text-[#E4EBE7]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-[1_1_100%] flex-wrap items-center justify-between gap-4 border-t border-cream/10 pt-7">
            <span className="text-sm text-dim">
              {playing
                ? "Playing through each stage automatically. Select one to pause."
                : "Use the arrows or select a stage."}
            </span>
            <div className="flex gap-2.5">
              <button
                className="btn flex size-[52px] cursor-pointer items-center justify-center rounded-full border border-cream/30 bg-transparent text-cream"
                type="button"
                onClick={() => go(step - 1)}
                aria-label="Previous stage"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                className="btn flex size-[52px] cursor-pointer items-center justify-center rounded-full border-0 bg-cream text-deep"
                type="button"
                onClick={() => go(step + 1)}
                aria-label="Next stage"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
