import Image from "next/image";
import headshot from "../../assets/headshot.jpeg";
import { SITE } from "@/lib/site";
import { EHRS } from "@/data/content";
import { ArrowUpRight, MedicalCross } from "./icons";

const ECG =
  "M0 28 H40 L46 28 L52 20 L58 28 L66 28 L72 6 L80 44 L86 28 H112 L118 22 L124 28 H152 L158 28 L164 20 L170 28 L178 28 L184 6 L192 44 L198 28 H228";

const ARCH = "rounded-[999px_999px_32px_32px]";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex max-w-[1320px] flex-wrap items-center gap-[clamp(48px,6vw,72px)] px-[clamp(20px,3vw,32px)] pt-[clamp(40px,6vw,72px)] pb-[clamp(72px,9vw,128px)]"
    >
      <div className="relative z-[2] flex min-w-0 flex-[1_1_580px] flex-col gap-8">
        <span
          className="fade-up font-mono text-xs tracking-[0.18em] text-mint uppercase"
          style={{ animationDelay: ".05s" }}
        >
          Medical Virtual Assistant · Remote
        </span>
        <h1 className="font-serif text-[clamp(46px,7vw,108px)] leading-[0.98] font-normal tracking-[-0.025em] text-cream">
          <span className="h-line block overflow-hidden pb-[0.08em]">
            <span style={{ animationDelay: ".1s" }}>Remote admin support</span>
          </span>
          <span className="h-line block overflow-hidden pb-[0.08em]">
            <span style={{ animationDelay: ".22s" }}>
              from a <em className="text-mint">Registered Nurse.</em>
            </span>
          </span>
        </h1>
        <p
          className="fade-up max-w-[540px] text-lg leading-[1.65] font-light text-softer"
          style={{ animationDelay: ".6s", textWrap: "pretty" }}
        >
          I&apos;m a Registered Nurse with over three years at the bedside, now supporting healthcare teams
          remotely. Scheduling, intake, EHR documentation and patient communication, handled by someone who
          understands the medicine behind every message.
        </p>
        <div className="fade-up flex flex-wrap gap-3" style={{ animationDelay: ".75s" }}>
          <a
            className="btn inline-flex min-h-[54px] items-center gap-2.5 rounded-full bg-cream px-7 text-base font-medium text-deep no-underline"
            href={`mailto:${SITE.email}`}
          >
            Email Adedolapo
            <ArrowUpRight size={14} />
          </a>
          <a
            className="btn inline-flex min-h-[54px] items-center gap-2.5 rounded-full border border-cream/35 px-7 text-base font-medium text-cream no-underline"
            href={SITE.linkedin}
          >
            Connect on LinkedIn
            <ArrowUpRight size={14} />
          </a>
        </div>
        <div
          className="fade-up flex flex-wrap items-center gap-x-[26px] gap-y-2.5 border-t border-cream/12 pt-7"
          style={{ animationDelay: ".9s" }}
        >
          <span className="font-mono text-[11px] tracking-[0.16em] text-dim uppercase">Works in</span>
          {EHRS.map((e) => (
            <span key={e} className="text-[15px] text-[#DDE5E1]">
              {e}
            </span>
          ))}
        </div>
      </div>

      <div className="relative flex min-w-0 flex-[1_1_440px] justify-center py-10">
        <div
          aria-hidden="true"
          className={`absolute top-[18px] left-1/2 aspect-[4/5.2] w-[min(440px,88%)] -translate-x-[44%] border border-mint/28 ${ARCH}`}
        />
        <div
          className={`relative aspect-[4/5.2] w-[min(440px,88%)] overflow-hidden bg-[#1C3631] ${ARCH}`}
        >
          <div className="unveil absolute inset-0 overflow-hidden">
            <Image
              src={headshot}
              alt="Portrait of Adedolapo Ademola"
              fill
              priority
              sizes="(max-width: 1100px) 88vw, 440px"
              className="block object-cover object-[50%_12%]"
            />
          </div>
        </div>

        {/* Rotating text badge around a medical cross */}
        <div aria-hidden="true" className="absolute top-0 left-[2%] size-[148px]">
          <svg className="spin block" width="148" height="148" viewBox="0 0 148 148">
            <defs>
              <path id="ring" d="M74 74 m-58 0 a58 58 0 1 1 116 0 a58 58 0 1 1 -116 0" />
            </defs>
            <text
              style={{
                fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
                fontSize: "10.5px",
                letterSpacing: "3.2px",
                fill: "#F4F0E8",
              }}
            >
              <textPath href="#ring">REGISTERED NURSE • MEDICAL VA • HIPAA TRAINED • </textPath>
            </text>
          </svg>
          <div className="absolute inset-[42px] flex items-center justify-center rounded-full bg-mint">
            <MedicalCross fill="#0F1F1C" />
          </div>
        </div>

        {/* Floating: HIPAA */}
        <div className="bob2 absolute top-[120px] right-0 flex items-center gap-3 rounded-full bg-cream py-3 pr-[18px] pl-3 text-deep shadow-[0_24px_50px_-20px_rgba(0,0,0,.55)]">
          <span className="flex size-[38px] items-center justify-center rounded-full bg-deep">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M10 2l7 3v5c0 4.3-2.9 7.3-7 8.6C5.9 17.3 3 14.3 3 10V5l7-3z"
                stroke="#A9D3C3"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path d="M7 10l2 2 4-4" stroke="#A9D3C3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="flex flex-col gap-0.5">
            <span className="text-sm font-semibold">HIPAA trained</span>
            <span className="font-mono text-[11px] text-muted">Valid through 2027</span>
          </span>
        </div>

        {/* Floating: years of nursing + ECG */}
        <div className="bob absolute bottom-2 left-0 w-[272px] rounded-[22px] border border-mint/22 bg-raised px-[22px] pt-5 pb-4 shadow-[0_30px_60px_-24px_rgba(0,0,0,.6)]">
          <span className="block font-mono text-[10.5px] tracking-[0.16em] text-dim uppercase">
            Clinical background
          </span>
          <span className="mt-2.5 flex items-baseline gap-2.5">
            <span className="font-serif text-[52px] leading-none text-cream">3+</span>
            <span className="text-sm leading-[1.35] text-softer">years of bedside nursing in Lagos hospitals</span>
          </span>
          <svg width="228" height="48" viewBox="0 0 228 48" fill="none" aria-hidden="true" className="mt-3 block">
            <path d={ECG} stroke="rgba(169,211,195,.22)" strokeWidth="1.5" strokeLinejoin="round" />
            <path
              className="ecg-run"
              pathLength="100"
              d={ECG}
              stroke="#A9D3C3"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeDasharray="32 100"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
