import type { CSSProperties } from "react";

const STATS = [
  { to: 3, suffix: "+", label: "Years of clinical nursing across three Lagos hospitals", accent: false },
  { to: 30, suffix: "%", label: "Less documentation backlog after her shift-handover checklist", accent: true },
  { to: 5, suffix: "", label: "EHR and EMR platforms, from OpenEMR to SimplePractice", accent: false },
  { to: 3, suffix: "", label: "Languages: English, Yoruba and beginner German", accent: false },
];

export default function Stats() {
  return (
    <section aria-label="At a glance" className="on-light bg-cream text-deep">
      <div className="mx-auto grid max-w-[1320px] grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-x-8 px-[clamp(20px,3vw,32px)] pt-6 pb-14">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="rv flex flex-col gap-3.5 border-t border-[#C9BFAE] pt-8 pb-6"
          >
            <span
              className={`font-serif text-[96px] leading-[0.9] tracking-[-0.03em] ${s.accent ? "text-accent" : ""}`}
            >
              <span className="count" style={{ "--to": s.to } as CSSProperties} />
              {s.suffix}
            </span>
            <span className="max-w-[240px] text-[15px] leading-[1.55] text-muted">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
