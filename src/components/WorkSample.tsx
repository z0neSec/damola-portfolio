"use client";

import { useState } from "react";
import Image from "next/image";
import { SHOTS } from "@/data/content";

export default function WorkSample() {
  const [active, setActive] = useState(0);

  return (
    <section id="work" className="on-light bg-cream text-deep">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-14 px-[clamp(20px,3vw,32px)] pt-[clamp(80px,10vw,128px)] pb-[clamp(88px,10vw,136px)]">
        <div className="flex flex-wrap items-end justify-between gap-x-20 gap-y-6">
          <div className="rv flex flex-[1_1_640px] flex-col gap-[22px]">
            <span className="font-mono text-xs tracking-[0.18em] text-accent uppercase">Work sample</span>
            <h2 className="font-serif text-[clamp(40px,4.6vw,68px)] leading-[1.02] font-normal tracking-[-0.02em] text-balance">
              A new-patient annual visit, documented <em className="text-accent">end to end</em> in OpenEMR.
            </h2>
          </div>
          <p className="rv flex-[0_1_360px] text-[15px] leading-[1.65] text-muted">
            Completed in the OpenEMR public demo. The patient and provider are fictitious, and no real health
            information is shown.
          </p>
        </div>

        <div className="flex flex-wrap items-stretch gap-7">
          <div role="group" aria-label="Work sample steps" className="flex max-w-full flex-[1_1_320px] flex-col gap-2.5">
            {SHOTS.map((s, i) => {
              const on = i === active;
              return (
                <button
                  key={s.title}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setActive(i)}
                  className={`tab grid cursor-pointer grid-cols-[44px_1fr] gap-3.5 rounded-[20px] border p-[22px] text-left ${
                    on ? "border-deep bg-deep text-cream" : "border-[#DDD5C7] bg-white text-deep"
                  }`}
                >
                  <span className={`pt-1 font-mono text-[13px] ${on ? "text-mint" : "text-accent"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex flex-col gap-1.5">
                    <span className="text-lg font-medium">{s.title}</span>
                    <span className={`text-sm leading-[1.55] ${on ? "text-soft" : "text-muted"}`}>{s.desc}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex min-w-0 flex-[999_1_640px] flex-col overflow-hidden rounded-3xl border border-[#DDD5C7] bg-white shadow-[0_50px_90px_-60px_rgba(15,31,28,.5)]">
            <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-[#ECE6DB] bg-warm px-5 py-3.5">
              <span className="font-mono text-xs text-muted">demo.openemr.io</span>
              <span className="rounded-full bg-[#EAE4D9] px-2.5 py-[5px] font-mono text-[11px] tracking-[0.08em] text-[#3E4A45] uppercase">
                Fictitious patient
              </span>
            </div>
            <div className="relative aspect-[1600/655] bg-[#F7F8F8]">
              {SHOTS.map((s, i) => {
                const on = i === active;
                return (
                  <Image
                    key={s.title}
                    src={s.src}
                    alt={s.alt}
                    fill
                    aria-hidden={!on}
                    sizes="(max-width: 1100px) 100vw, 900px"
                    className="shot object-cover object-top-left"
                    style={{ opacity: on ? 1 : 0, transform: `scale(${on ? 1 : 1.03})` }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
