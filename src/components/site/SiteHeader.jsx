import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { BUSINESS_NAME, DEFAULT_WA_MESSAGE, PHONE_DISPLAY, whatsapp } from "@/lib/site";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Builds", href: "#builds" },
  { label: "Process", href: "#process" },
  { label: "Visit", href: "#visit" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-carbon/90 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center border border-ignition/60 bg-ignition/10 font-heading text-sm font-extrabold tracking-tight text-ignition transition-colors group-hover:bg-ignition group-hover:text-carbon">
            M
          </span>
          <span className="leading-none">
            <span className="block font-heading text-[15px] font-extrabold uppercase tracking-[0.14em] text-chrome">
              MRJ Riders
            </span>
            <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              Up56 · Custom
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-chrome"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsapp(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 bg-ignition px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-carbon transition-colors hover:bg-chrome sm:flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center border border-white/15 text-chrome md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-carbon px-5 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-4 font-heading text-lg font-bold uppercase tracking-wide text-chrome"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={whatsapp(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center justify-center gap-2 bg-ignition px-5 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-carbon"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Chat on WhatsApp
          </a>
          <a
            href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}
            className="mt-3 block text-center font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground"
          >
            {PHONE_DISPLAY}
          </a>
          <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground/70">
            {BUSINESS_NAME}
          </p>
        </div>
      )}
    </header>
  );
}