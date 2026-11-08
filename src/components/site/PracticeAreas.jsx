import { motion } from 'framer-motion';
import { practiceAreas } from '@/lib/siteContent';

export default function PracticeAreas() {
  return (
    <section id="practice" className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-accent">Practice</p>
          <h2 className="mt-5 max-w-lg font-display text-4xl font-light leading-tight tracking-[-0.02em] sm:text-5xl">
            Four areas, argued closely.
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
          Work is taken on selectively, so each file receives the attention it needs rather than
          the time that is left over.
        </p>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
        {practiceAreas.map((area, index) => (
          <motion.article
            key={area.number}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="group bg-background p-8 transition-colors duration-300 hover:bg-primary lg:p-10"
          >
            <div className="flex items-start justify-between">
              <span className="font-display text-xs tracking-[0.3em] text-accent transition-colors group-hover:text-accent">
                {area.number}
              </span>
            </div>
            <h3 className="mt-6 font-display text-2xl font-normal tracking-tight transition-colors group-hover:text-primary-foreground">
              {area.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-primary-foreground/70">
              {area.blurb}
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-5 transition-colors group-hover:border-primary-foreground/20">
              {area.points.map((point) => (
                <li
                  key={point}
                  className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors group-hover:text-primary-foreground/60"
                >
                  {point}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}