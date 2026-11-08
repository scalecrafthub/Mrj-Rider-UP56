import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { site } from '@/lib/siteContent';

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-accent">Contact</p>
          <h2 className="mt-5 max-w-md font-display text-4xl font-light leading-[1.08] tracking-[-0.02em] sm:text-5xl">
            Tell me what happened. We start from there.
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Call the chamber directly, or write with a short account of the matter. Every enquiry
            is read personally and answered within the day.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={site.phoneHref}
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-[13px] font-medium text-primary-foreground transition-colors hover:bg-accent"
            >
              {site.phone}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={site.emailHref}
              className="inline-flex items-center gap-3 rounded-full border border-border px-7 py-3.5 text-[13px] font-medium transition-colors hover:border-foreground"
            >
              <Mail className="h-4 w-4" />
              Send an email
            </a>
          </div>
        </div>

        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
          <div className="bg-background p-7">
            <MapPin className="h-4 w-4 text-accent" />
            <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Chamber
            </p>
            <address className="mt-2 not-italic text-sm leading-relaxed">
              {site.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <div className="bg-background p-7">
            <Phone className="h-4 w-4 text-accent" />
            <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Hours
            </p>
            <p className="mt-2 text-sm leading-relaxed">{site.hours}</p>
            <a
              href={site.emailHref}
              className="mt-4 block break-all text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}