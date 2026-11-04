import { ROLES } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="on-light border-t border-[#E4DDD0] bg-warm text-deep">
      <div className="mx-auto flex max-w-[1320px] flex-wrap gap-x-24 gap-y-14 px-[clamp(20px,3vw,32px)] pt-[clamp(80px,10vw,128px)] pb-[clamp(88px,10vw,136px)]">
        <div className="rv flex flex-[1_1_360px] flex-col gap-[22px]">
          <span className="font-mono text-xs tracking-[0.18em] text-accent uppercase">Experience</span>
          <h2 className="font-serif text-[clamp(40px,4.6vw,68px)] leading-[1.02] font-normal tracking-[-0.02em]">
            From the ward to the <em className="text-accent">remote desk.</em>
          </h2>
        </div>
        <div className="relative flex-[2_1_640px] pl-12">
          <div aria-hidden="true" className="absolute top-2 bottom-2 left-[7px] w-px bg-[#DDD5C7]" />
          <div
            aria-hidden="true"
            className="drawline absolute top-2 bottom-2 left-[7px] w-px origin-top bg-accent"
          />
          <div className="flex flex-col gap-16">
            {ROLES.map((r) => (
              <article key={`${r.org}-${r.dates}`} className="rv relative flex flex-col gap-3.5">
                <span
                  aria-hidden="true"
                  className="absolute top-1 -left-12 size-[15px] rounded-full border-2 border-accent bg-warm"
                />
                <span className="font-mono text-[13px] text-muted">{r.dates}</span>
                <h3 className="font-serif text-[38px] leading-[1.05] font-normal">{r.title}</h3>
                <span className="text-base font-medium text-accent">{r.org}</span>
                <ul className="mt-1.5 flex list-disc flex-col gap-2 pl-[18px] text-base leading-[1.65] text-muted">
                  {r.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
