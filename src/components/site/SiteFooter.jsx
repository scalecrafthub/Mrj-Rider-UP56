import { Phone, MapPin, MessageCircle } from "lucide-react";
import {
  ADDRESS_LINE,
  BUSINESS_ALT,
  BUSINESS_NAME,
  CALL_LINK,
  DEFAULT_WA_MESSAGE,
  MAPS_LINK,
  PHONE_DISPLAY,
  TAGLINE,
  whatsapp,
} from "@/lib/site";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Builds", href: "#builds" },
  { label: "Process", href: "#process" },
  { label: "Visit", href: "#visit" },
];

export default function SiteFooter() {
  return (
    <footer className="relative bg-carbon py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center border border-ignition/60 bg-ignition/10 font-heading text-sm font-extrabold text-ignition">
                M
              </span>
              <span className="font-heading text-base font-extrabold uppercase tracking-[0.12em] text-chrome">
                {BUSINESS_NAME}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {BUSINESS_ALT} — custom motorcycle builds, styling and servicing.{" "}
              <span className="text-chrome">{TAGLINE}</span>
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="label-mono">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-ignition"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="label-mono">Reach the workshop</p>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li>
                <a
                  href={CALL_LINK}
                  className="inline-flex items-start gap-2.5 text-chrome transition-colors hover:text-ignition"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-ignition" aria-hidden="true" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={whatsapp(DEFAULT_WA_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2.5 text-chrome transition-colors hover:text-ignition"
                >
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-ignition" aria-hidden="true" />
                  WhatsApp us
                </a>
              </li>
              <li>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2.5 leading-relaxed text-muted-foreground transition-colors hover:text-ignition"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ignition" aria-hidden="true" />
                  {ADDRESS_LINE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            © {new Date().getFullYear()} {BUSINESS_NAME}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            Padri · Maharajganj · Uttar Pradesh
          </p>
        </div>
      </div>
    </footer>
  );
}