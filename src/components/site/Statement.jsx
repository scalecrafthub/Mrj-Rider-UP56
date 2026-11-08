import { motion } from 'framer-motion';

export default function Statement() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-10 lg:py-28">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="font-display text-2xl font-light leading-snug tracking-[-0.01em] sm:text-3xl lg:text-[2.6rem]"
        >
          <span className="text-accent">“</span>
          A matter that appears on the board as a number is, for the person sitting opposite,
          the most important thing in their life. It is treated that way here.
          <span className="text-accent">”</span>
        </motion.blockquote>
        <p className="mt-8 text-[11px] uppercase tracking-[0.3em] text-primary-foreground/50">
          Shivam Tripathi · Advocate
        </p>
      </div>
    </section>
  );
}