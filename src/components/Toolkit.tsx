import { EHRS, TOOLS } from "@/data/content";
import { MedicalCross } from "./icons";

const ITEM =
  "flex items-center gap-10 pr-10 font-serif text-[clamp(44px,6vw,88px)] leading-[1.1] whitespace-nowrap";

export default function Toolkit() {
  const ehrLoop = [...EHRS, ...EHRS, ...EHRS, ...EHRS];
  const toolLoop = [...TOOLS, ...TOOLS];

  return (
    <section aria-label="Toolkit" className="flex flex-col gap-10 bg-deep py-24">
      <div className="mx-auto flex w-full max-w-[1320px] flex-wrap items-baseline justify-between gap-x-10 gap-y-3 px-[clamp(20px,3vw,32px)]">
        <span className="font-mono text-xs tracking-[0.18em] text-mint uppercase">Toolkit</span>
        <span className="text-base text-soft">Ready on day one, in the software your practice already uses.</span>
      </div>

      {/* The visual marquee repeats for a seamless loop, so it is hidden from assistive tech
          and the real list is exposed once instead. */}
      <ul className="sr-only">
        {[...EHRS, ...TOOLS].map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <div aria-hidden="true" className="marqwrap flex flex-col gap-3.5 overflow-hidden">
        <div className="marq flex w-max">
          {ehrLoop.map((t, i) => (
            <span key={i} className={`${ITEM} text-cream`}>
              {t}
              <MedicalCross size={22} fill="#A9D3C3" />
            </span>
          ))}
        </div>
        <div className="marq rev flex w-max">
          {toolLoop.map((t, i) => (
            <span
              key={i}
              className={`${ITEM} text-transparent italic [-webkit-text-stroke:1px_rgba(244,240,232,.55)]`}
            >
              {t}
              <MedicalCross size={22} stroke="rgba(169,211,195,.6)" strokeWidth={1.2} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
