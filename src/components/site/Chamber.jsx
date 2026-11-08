import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { chamberFacts, site } from '@/lib/siteContent';

export default function Chamber() {
  return (
    <section id="chamber" className="border-y border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-28">
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src={site.chamber}
            alt="Advocate Shivam Tripathi at his chamber in Maharajganj"
            className="aspect-[4/3] w-full rounded-sm object-cover"
            fittingType="fill"
            focalPointX={0.4}
            focalPointY={0.5}
          />
          <figcaption className="mt-4 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            Chamber No. 66 · Near District Court, Maharajganj
          </figcaption>
        </motion.figure>

        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-accent">The chamber</p>
          <h2 className="mt-5 font-display text-3xl font-light leading-tight tracking-[-0.02em] sm:text-4xl">
            A short walk from the District Court
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Chamber No. 66 sits minutes from the District Court at Maharajganj — convenient for
            clients who need to file, appear, or simply sit down and understand exactly where
            their matter stands. Consultations are held every day of the week, and a first
            conversation costs nothing but time.
          </p>

          <dl className="mt-10 divide-y divide-border border-t border-border">
            {chamberFacts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1 py-4 sm:flex-row sm:justify-between sm:gap-8">
                <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {fact.label}
                </dt>
                <dd className="text-sm sm:text-right">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}