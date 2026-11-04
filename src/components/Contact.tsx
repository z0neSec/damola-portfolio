import { SITE } from "@/lib/site";
import { ArrowUpRight } from "./icons";

const MONO_SMALL = "font-mono text-[11px] tracking-[0.16em] text-dim uppercase";

export default function Contact() {
  return (
    <section id="contact" className="bg-deep">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-14 px-[clamp(20px,3vw,32px)] pt-[clamp(88px,11vw,144px)] pb-[clamp(64px,7vw,96px)]">
        <span className="rv font-mono text-xs tracking-[0.18em] text-mint uppercase">Contact</span>
        <h2 className="rv max-w-[1100px] font-serif text-[clamp(52px,8vw,128px)] leading-[0.95] font-normal tracking-[-0.03em] text-balance">
          Let&apos;s make your practice run <em className="text-mint">smoother.</em>
        </h2>
        <a
          className="ul ul-on rv max-w-full self-start pb-1.5 font-serif text-[clamp(26px,3.8vw,56px)] leading-[1.2] text-cream italic [overflow-wrap:anywhere]"
          href={`mailto:${SITE.email}`}
        >
          {SITE.email}
        </a>
        <div className="rv flex flex-wrap gap-3">
          <a
            className="btn inline-flex min-h-[54px] items-center gap-2.5 rounded-full bg-cream px-7 text-base font-medium text-deep no-underline"
            href={`mailto:${SITE.email}`}
          >
            Send an email
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
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-8 border-t border-cream/12 pt-10">
          <div className="flex flex-col gap-2">
            <span className={MONO_SMALL}>Based in</span>
            <span className="text-base leading-[1.55] text-[#DDE5E1]">Lagos, Nigeria · WAT (UTC+1)</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className={MONO_SMALL}>Open to</span>
            <span className="text-base leading-[1.55] text-[#DDE5E1]">
              Full-time, part-time and contract remote roles
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className={MONO_SMALL}>LinkedIn</span>
            <a className="ul self-start text-base leading-[1.55] text-[#DDE5E1]" href={SITE.linkedin}>
              linkedin.com/in/adedolapoademola
            </a>
          </div>
        </div>
      </div>

      <footer className="mx-auto flex max-w-[1320px] flex-col gap-8 px-[clamp(20px,3vw,32px)] pb-10">
        <span
          aria-hidden="true"
          className="block font-serif text-[clamp(34px,11.2vw,168px)] leading-[0.9] tracking-[-0.035em] whitespace-nowrap text-cream"
        >
          <em>Adedolapo</em> Ademola
        </span>
        <div className="flex flex-wrap justify-between gap-x-8 gap-y-3 border-t border-cream/12 pt-6 text-sm text-dim">
          <span>© 2026 Adedolapo Mary Ademola, RN</span>
          <a className="ul text-[#DDE5E1]" href="#top">
            Back to top
          </a>
        </div>
      </footer>
    </section>
  );
}
