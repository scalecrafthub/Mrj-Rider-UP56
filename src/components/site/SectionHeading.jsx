export default function SectionHeading({ index, title, lead, dark = false }) {
  return (
    <div className="grid grid-cols-1 gap-6 border-t border-white/10 pt-8 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-10">
      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ignition">
        {index}
      </span>
      <h2 className="font-heading text-3xl font-extrabold uppercase leading-none tracking-[-0.02em] text-chrome sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {lead && (
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-right">
          {lead}
        </p>
      )}
    </div>
  );
}