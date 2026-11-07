import { MessageCircle, ArrowDownRight, Star } from "lucide-react";
import { Image } from "@/components/ui/image";
import {
  DEFAULT_WA_MESSAGE,
  PHOTOS,
  RATING,
  REVIEW_COUNT,
  whatsapp,
} from "@/lib/site";

const STATS = [
  { value: `${RATING}★`, label: "Google rating" },
  { value: REVIEW_COUNT, label: "Google reviews" },
  { value: "9 pm", label: "Open till, daily" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 blueprint opacity-60" aria-hidden="true" />
      <div className="absolute inset-0 heat-glow" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36 lg:grid-cols-[1.13fr_0.87fr] lg:items-center lg:gap-12">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-ignition/12 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.26em] text-ignition">
              <Star className="h-3 w-3 fill-ignition" aria-hidden="true" />
              {RATING} · {REVIEW_COUNT} reviews
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-muted-foreground">
              Maharajganj · UP
            </span>
          </div>

          <h1 className="mt-7 font-heading text-[clamp(2.3rem,4.2vw,3.3rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.02em] text-chrome">
            Your bike,
            <br />
            <span className="stroke-title">our passion.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-[17px]">
            Complete motorcycle customization, styling and performance work from the
            workshop at Jai Prakash Nagar. From full frame-off builds and vinyl wraps to
            PPF lamination, custom exhausts and engine work — one crew, start to finish.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsapp(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 bg-ignition px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-carbon transition-all hover:bg-chrome"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Chat on WhatsApp
            </a>
            <a
              href="#builds"
              className="group inline-flex items-center justify-center gap-2.5 border border-white/20 px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-chrome transition-colors hover:border-ignition hover:text-ignition"
            >
              See the builds
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-px border-t border-white/10 pt-6">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-heading text-2xl font-extrabold text-chrome">
                  {s.value}
                </dd>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -left-3 -top-3 h-10 w-10 border-l border-t border-ignition/70" aria-hidden="true" />
          <div className="absolute -bottom-3 -right-3 h-10 w-10 border-b border-r border-ignition/70" aria-hidden="true" />
          <div className="relative overflow-hidden border border-white/12 bg-secondary">
            <Image
              src={PHOTOS.demon}
              alt="Matte black custom motorcycle with red tank lettering and wrapped exhaust, built by MRJ Riders Up56"
              className="aspect-[4/5] w-full lg:aspect-[5/6]"
              fittingType="fill"
              focalPointY={0.5}
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-carbon via-carbon/70 to-transparent p-5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ignition">
                  Featured build
                </p>
                <p className="mt-1 font-heading text-lg font-bold uppercase tracking-wide text-chrome">
                  Matte Black Demon
                </p>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                MRJ-01
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}