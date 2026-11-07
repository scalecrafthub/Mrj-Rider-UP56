import { Wrench, ShieldCheck, Sparkles } from "lucide-react";

const POINTS = [
  {
    icon: Wrench,
    title: "One crew, end to end",
    body: "Paint, fabrication, wiring and servicing handled inside the same workshop — nothing gets sent out and lost.",
  },
  {
    icon: ShieldCheck,
    title: "Protection that lasts",
    body: "PPF lamination and smoke film for bikes and cars, applied so edges stay tucked and the finish keeps its depth.",
  },
  {
    icon: Sparkles,
    title: "Details you notice",
    body: "Graphic layouts, monograms and trim aligned to the tank lines, not just stuck on.",
  },
];

export default function Statement() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-secondary/30 py-20 md:py-24">
      <div className="absolute inset-0 heat-glow opacity-70" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <div>
            <p className="label-mono">Modification king</p>
            <p className="mt-5 font-heading text-3xl font-extrabold uppercase leading-[1.05] tracking-[-0.02em] text-chrome sm:text-4xl md:text-[2.6rem]">
              Your bike leaves the shop
              <span className="text-ignition"> unmistakably yours.</span>
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              MRJ Riders Up56 works on everyday commuters, Royal Enfields and sportbikes
              alike — restorations, repaints, wraps and performance upgrades built around
              how the owner actually rides.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-px border border-white/10 bg-white/10">
            {POINTS.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex items-start gap-4 bg-carbon p-6 md:gap-5 md:p-7">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-ignition/40 bg-ignition/10">
                  <Icon className="h-4 w-4 text-ignition" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-sm font-bold uppercase tracking-[0.12em] text-chrome">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}