import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { site } from '@/lib/siteContent';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 lg:pb-24">
      <div className="mx-auto grid max-w-6xl items-end gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-accent">{site.courts}</p>

          <h1 className="mt-7 font-display text-[2.7rem] font-light leading-[1.03] tracking-[-0.02em] sm:text-6xl lg:text-[4.4rem]">
            A steady hand in
            <br />
            matters that
            <br />
            <span className="italic text-accent">change lives.</span>
          </h1>

          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Advocate Shivam Tripathi advises and represents clients in family, property,
            intellectual property and civil matters — practising from chambers beside the
            District Court at Maharajganj since {site.since}.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={site.phoneHref}
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-[13px] font-medium tracking-wide text-primary-foreground transition-colors hover:bg-accent"
            >
              Book a consultation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={site.emailHref}
              className="rounded-full border border-border px-7 py-3.5 text-[13px] font-medium tracking-wide text-foreground transition-colors hover:border-foreground"
            >
              Write to the chamber
            </a>
          </div>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="mx-auto max-w-sm lg:max-w-none">
            <Image
              src={site.portrait}
              alt="Advocate Shivam Tripathi"
              className="aspect-[4/5] w-full rounded-sm object-cover"
              fittingType="fill"
              focalPointX={0.5}
              focalPointY={0.35}
            />
            <figcaption className="mt-4 flex items-baseline justify-between border-t border-border pt-3">
              <span className="font-display text-base">{site.name}</span>
              <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                Advocate, {site.since}
              </span>
            </figcaption>
          </div>
        </motion.figure>
      </div>
    </section>
  );
}