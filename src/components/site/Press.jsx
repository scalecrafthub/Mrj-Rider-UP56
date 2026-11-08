import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { site } from '@/lib/siteContent';

export default function Press() {
  return (
    <section id="press" className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-accent">
            In the press · Maharajganj
          </p>
          <h2 className="mt-5 font-display text-3xl font-light leading-tight tracking-[-0.02em] sm:text-4xl lg:text-[2.9rem]">
            Court orders FIR in alleged job fraud case
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Acting on a plea moved by Advocate Shivam Tripathi, a local court in Maharajganj
            directed that an FIR be registered in an alleged job fraud matter — a result that
            carried the case into the district press.
          </p>
          <div className="mt-8 border-t border-border pt-5">
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Reported in the local daily, 16 October 2025
            </p>
          </div>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="order-1 lg:order-2"
        >
          <div className="rounded-sm border border-border bg-card p-4 shadow-sm sm:p-6">
            <div className="overflow-hidden rounded-sm bg-secondary">
              <Image
                src={site.press}
                alt="Newspaper clipping reporting the court order"
                className="aspect-[4/3] w-full object-contain"
                fittingType="fit"
              />
            </div>
            <figcaption className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <span>Press clipping</span>
              <span>Maharajganj, 16.10.25</span>
            </figcaption>
          </div>
        </motion.figure>
      </div>
    </section>
  );
}