import SectionHeading from "@/components/site/SectionHeading";
import { Image } from "@/components/ui/image";
import { BUILDS, whatsapp } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

const SPANS = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
];

export default function Builds() {
  return (
    <section id="builds" className="relative border-b border-white/10 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="02"
          title="Built in the bay"
          lead="Real motorcycles that left the workshop — paint, metal and detail you can read in the photos."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
          {BUILDS.map((build, i) => (
            <figure
              key={build.id}
              className={`group relative overflow-hidden border border-white/10 bg-secondary ${SPANS[i]}`}
            >
              <Image
                src={build.src}
                alt={build.alt}
                className="aspect-[4/3] w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                fittingType="fill"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/10 to-transparent opacity-90" aria-hidden="true" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ignition">
                    {build.id}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Custom
                  </p>
                </div>
                <h3 className="mt-2 font-heading text-xl font-bold uppercase tracking-wide text-chrome md:text-2xl">
                  {build.name}
                </h3>
                <ul className="mt-3 flex max-h-0 flex-wrap gap-x-4 gap-y-1 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100 md:mt-4">
                  {build.specs.map((spec) => (
                    <li
                      key={spec}
                      className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      — {spec}
                    </li>
                  ))}
                </ul>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-5 border border-white/10 bg-secondary/40 p-6 md:flex-row md:items-center md:p-8">
          <div>
            <p className="font-heading text-xl font-bold uppercase tracking-wide text-chrome">
              Your bike next.
            </p>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Send a photo of your bike and tell us where you want to take it — we will
              reply with the parts, the paint and the timeline.
            </p>
          </div>
          <a
            href={whatsapp(
              "Hi MRJ Riders Up56, here is my bike — I want to start a custom build."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 border border-ignition px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ignition transition-colors hover:bg-ignition hover:text-carbon"
          >
            Start your build
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}