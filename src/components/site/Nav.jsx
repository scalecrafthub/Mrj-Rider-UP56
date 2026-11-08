import { useEffect, useState } from 'react';
import { site } from '@/lib/siteContent';

const links = [
  { label: 'Practice', href: '#practice' },
  { label: 'In the press', href: '#press' },
  { label: 'Chamber', href: '#chamber' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'border-b border-border bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-lg tracking-tight">{site.name}</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {site.role}
          </span>
        </a>

        <nav className="hidden items-center gap-9 text-[13px] md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={site.phoneHref}
          className="rounded-full bg-primary px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-accent"
        >
          Call
        </a>
      </div>
    </header>
  );
}