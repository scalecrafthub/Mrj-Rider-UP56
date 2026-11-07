const ITEMS = [
  "Full modification",
  "Vinyl wrapping",
  "PPF lamination",
  "Bullet silencers",
  "Alloy wheels",
  "Engine work",
  "Denting & painting",
  "Graphic design",
];

export default function Ticker() {
  const strip = [...ITEMS, ...ITEMS];

  return (
    <div className="relative overflow-hidden border-b border-white/10 bg-ignition py-3">
      <div className="flex w-max animate-ticker items-center gap-8 whitespace-nowrap">
        {strip.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.28em] text-carbon"
          >
            {item}
            <span aria-hidden="true" className="text-carbon/50">
              /
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}