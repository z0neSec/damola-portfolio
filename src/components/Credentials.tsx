import { CERT_LINKS } from "@/data/content";
import { MedicalCross } from "./icons";

const MONO_LABEL = "font-mono text-xs uppercase";

export default function Credentials() {
  return (
    <section id="credentials" className="on-light bg-cream text-deep">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-14 px-[clamp(20px,3vw,32px)] pt-[clamp(80px,10vw,128px)] pb-[clamp(88px,10vw,136px)]">
        <div className="flex flex-wrap items-end justify-between gap-x-20 gap-y-6">
          <div className="rv flex flex-[1_1_600px] flex-col gap-[22px]">
            <span className="font-mono text-xs tracking-[0.18em] text-accent uppercase">Credentials</span>
            <h2 className="font-serif text-[clamp(40px,4.6vw,68px)] leading-[1.02] font-normal tracking-[-0.02em]">
              Licensed, trained and <em className="text-accent">verifiable.</em>
            </h2>
          </div>
          <p className="rv flex-[0_1_340px] text-base leading-[1.65] text-muted">
            Each certificate links straight to its issuer, so you can confirm it in one click.
          </p>
        </div>

        <div className="flex flex-wrap gap-5">
          <article className="lift rv relative flex min-h-80 flex-[2_1_560px] flex-col justify-between gap-10 overflow-hidden rounded-[28px] bg-deep p-11 text-cream">
            <MedicalCross
              className="spin absolute -right-[70px] -bottom-[90px] opacity-[.14]"
              size={300}
              stroke="#A9D3C3"
              strokeWidth={0.3}
            />
            <span className={`${MONO_LABEL} tracking-[0.16em] text-mint`}>Professional licence</span>
            <div className="relative flex flex-col gap-3.5">
              <h3 className="font-serif text-[clamp(44px,5vw,72px)] leading-[0.98] font-normal tracking-[-0.02em]">
                Registered <em className="text-mint">Nurse</em>
              </h3>
              <span className="text-base text-softer">
                Nursing and Midwifery Council of Nigeria · Licensed since February 2023
              </span>
            </div>
          </article>

          <article className="lift rv flex min-h-80 flex-[1_1_360px] flex-col justify-between gap-8 rounded-[28px] bg-accent p-10 text-white">
            <span className={`${MONO_LABEL} tracking-[0.16em] text-[#E2F2EC]`}>hipaatraining.us · Sep 2026</span>
            <div className="flex flex-col gap-3">
              <h3 className="font-serif text-[40px] leading-[1.02] font-normal">HIPAA Compliance Training</h3>
              <span className="text-[15px] leading-[1.6] text-[#E2F2EC]">
                Privacy Rule, Security Rule, Breach Notification and Enforcement. Valid through Sep 30, 2027.
              </span>
              <span className="font-mono text-[13px] text-white">ID HIPAA-0137935</span>
            </div>
          </article>

          {CERT_LINKS.map((c) => (
            <a
              key={c.href}
              href={c.href}
              className="lift rv flex min-h-[260px] flex-[1_1_340px] flex-col justify-between gap-7 rounded-[28px] border border-[#DDD5C7] bg-white p-9 no-underline"
            >
              <span className="flex items-center justify-between gap-3">
                <span className={`${MONO_LABEL} tracking-[0.12em] text-muted`}>{c.meta}</span>
                <span className="flex size-11 items-center justify-center rounded-full bg-cream">
                  <svg className="arr" width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M3 9l6-6M4 3h5v5" stroke="#0F1F1C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </span>
              <span className="flex flex-col gap-2.5">
                <span className="font-serif text-[32px] leading-[1.05]">{c.title}</span>
                <span className="text-sm font-medium text-accent">{c.cta}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
