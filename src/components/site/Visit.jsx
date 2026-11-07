import { MapPin, Phone, Clock, Star, Navigation, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import {
  ADDRESS_LINE,
  CALL_LINK,
  DEFAULT_WA_MESSAGE,
  MAPS_LINK,
  PHONE_DISPLAY,
  RATING,
  REVIEW_COUNT,
  whatsapp,
} from "@/lib/site";

const ROWS = [
  {
    icon: MapPin,
    label: "Workshop",
    value: ADDRESS_LINE,
  },
  {
    icon: Phone,
    label: "Call the shop",
    value: PHONE_DISPLAY,
    href: CALL_LINK,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Open daily · closes 9 pm",
  },
];

export default function Visit() {
  return (
    <section id="visit" className="relative border-b border-white/10 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="04"
          title="Roll in"
          lead="Walk in, call, or send the details on WhatsApp — whichever is easier."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="border border-white/10">
            {ROWS.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-start gap-4 border-b border-white/10 p-6 last:border-b-0 md:gap-5 md:p-7"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-ignition/40 bg-ignition/10">
                  <Icon className="h-4 w-4 text-ignition" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-muted-foreground">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="mt-1.5 block font-heading text-lg font-bold text-chrome transition-colors hover:text-ignition"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1.5 max-w-md text-[15px] leading-relaxed text-chrome">
                      {value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="relative flex flex-col justify-between overflow-hidden border border-ignition/30 bg-ignition/[0.06] p-6 md:p-8">
            <div className="absolute inset-0 blueprint opacity-50" aria-hidden="true" />
            <div className="relative">
              <div className="flex items-center gap-1.5">
                {[0, 1, 2, 3].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-ignition text-ignition" aria-hidden="true" />
                ))}
                <Star className="h-4 w-4 fill-ignition/40 text-ignition/40" aria-hidden="true" />
              </div>
              <p className="mt-4 font-heading text-4xl font-extrabold text-chrome">
                {RATING}
                <span className="ml-1 text-base font-medium text-muted-foreground">
                  / 5
                </span>
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                {REVIEW_COUNT} Google reviews
              </p>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Rated by riders around Padri and Maharajganj for finish quality and honest
                work.
              </p>
            </div>

            <div className="relative mt-8 flex flex-col gap-3">
              <a
                href={whatsapp(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-ignition px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-carbon transition-colors hover:bg-chrome"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/25 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-chrome transition-colors hover:border-ignition hover:text-ignition"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}