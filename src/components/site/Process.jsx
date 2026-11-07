import SectionHeading from "@/components/site/SectionHeading";
import { PROCESS } from "@/lib/site";

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden border-b border-white/10 py-20 md:py-28">
      <div className="absolute inset-0 blueprint opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="03"
          title="How a build runs"
          lead="No surprises — you know the plan, the cost and the stage your bike is at."
        />

        <ol className="mt-14 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((item) => (
            <li key={item.step} className="bg-carbon p-6 md:p-7">
              <span className="font-heading text-4xl font-extrabold text-white/10">
                {item.step}
              </span>
              <h3 className="mt-5 font-heading text-base font-bold uppercase tracking-wide text-chrome">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}