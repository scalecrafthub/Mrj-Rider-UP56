import { facts } from '@/lib/siteContent';

export default function FactsBar() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-6 py-10 lg:grid-cols-4 lg:px-10">
        {facts.map((fact) => (
          <div key={fact.label} className="lg:border-l lg:border-border lg:pl-8 lg:first:border-l-0 lg:first:pl-0">
            <p className="font-display text-3xl font-light tracking-tight">{fact.value}</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              {fact.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}