const POINTS = [
  {
    n: "01",
    title: "Fluent in clinical language",
    body: "Terminology, medication lists, vitals and care plans are familiar ground. That means cleaner notes and smarter message triage from day one.",
  },
  {
    n: "02",
    title: "Confidentiality by habit",
    body: "Years of protecting records at the bedside, now backed by formal HIPAA training on the Privacy, Security and Breach Notification rules.",
  },
  {
    n: "03",
    title: "Built around patient flow",
    body: "She has kept provider calendars full and on time and coordinated referrals and follow-ups. She knows how one missed message ripples through a clinic day.",
  },
];

export default function WhyNurse() {
  return (
    <section className="on-light border-t border-[#DDD5C7] bg-cream text-deep">
      <div className="mx-auto flex max-w-[1320px] flex-wrap gap-x-24 gap-y-14 px-[clamp(20px,3vw,32px)] pt-[clamp(80px,10vw,128px)] pb-[clamp(88px,10vw,136px)]">
        <div className="rv flex flex-[1_1_460px] flex-col gap-6">
          <span className="font-mono text-xs tracking-[0.18em] text-accent uppercase">Why a nurse</span>
          <h2 className="font-serif text-[clamp(40px,4.6vw,68px)] leading-[1.02] font-normal tracking-[-0.02em] text-balance">
            An assistant who already knows what the <em className="text-accent">chart</em> means.
          </h2>
          <p className="max-w-[440px] text-[17px] leading-[1.65] text-muted">
            Most virtual assistants learn healthcare on the job. Adedolapo brings it with her, so your
            providers spend less time explaining, correcting and double-checking.
          </p>
        </div>
        <div className="flex flex-[1_1_520px] flex-col border-t border-deep">
          {POINTS.map((p, i) => (
            <article
              key={p.n}
              className={`rv grid grid-cols-[72px_1fr] gap-5 py-8 ${i < POINTS.length - 1 ? "border-b border-[#DDD5C7]" : ""}`}
            >
              <span className="font-serif text-[40px] leading-none text-accent italic">{p.n}</span>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-[22px] font-medium tracking-[-0.01em]">{p.title}</h3>
                <p className="text-base leading-[1.65] text-muted">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
