import SectionHeading from "@/components/site/SectionHeading";
import { SERVICES, whatsapp } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="relative border-b border-white/10 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="01"
          title="The service bay"
          lead="Everything a bike needs under one roof — the styling you come for, the mechanical work that keeps it reliable."
        />

        <div className="mt-14 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <a
              key={service.title}
              href={whatsapp(
                `Hi MRJ Riders Up56, I'd like a quote for ${service.point} on my bike.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between gap-8 bg-carbon p-6 transition-colors duration-300 hover:bg-secondary md:p-7"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-ignition">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="border border-white/12 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                    {service.tag}
                  </span>
                </div>
                <h3 className="mt-6 font-heading text-lg font-bold uppercase leading-tight tracking-wide text-chrome">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.body}
                </p>
              </div>
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground transition-colors group-hover:text-ignition">
                Ask on WhatsApp
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}