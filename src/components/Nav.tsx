"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "./icons";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#credentials", label: "Credentials" },
] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-20 border-b border-cream/8 bg-deep/78 backdrop-blur-[14px]">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-x-8 gap-y-3 px-[clamp(20px,3vw,32px)] py-3"
      >
        <a
          href="#top"
          aria-label="Adedolapo Ademola, home"
          className="flex min-h-11 items-baseline gap-2 pt-1.5 no-underline"
        >
          <span className="font-serif text-[30px] leading-none tracking-[-0.01em]">
            <span className="italic">Adedolapo</span> Ademola
          </span>
          <span className="-translate-y-1.5 rounded border border-mint/45 px-[5px] py-0.5 font-mono text-[10px] tracking-[0.16em] text-mint">
            RN
          </span>
        </a>

        <div className="flex items-center gap-[30px] text-sm text-[#C9D3CE]">
          <div className="flex items-center gap-[30px] max-[860px]:hidden">
            {LINKS.map((l) => (
              <a key={l.href} className="ul py-3" href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
          <a
            className="btn inline-flex min-h-11 items-center gap-2 rounded-full bg-cream px-5 font-medium text-deep no-underline max-[480px]:hidden"
            href="#contact"
          >
            Get in touch
            <ArrowUpRight />
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="hidden size-12 cursor-pointer items-center justify-center rounded-full border border-cream/30 bg-transparent text-cream max-[860px]:flex"
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3 6h12M3 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="swap flex flex-col border-t border-cream/8 px-5 pt-2 pb-7 min-[861px]:hidden"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-cream/10 py-4 font-serif text-[34px] leading-none no-underline"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex min-h-[54px] items-center justify-center rounded-full bg-cream text-base font-medium text-deep no-underline"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
