import { site } from '@/lib/siteContent';

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <div>
          <p className="font-display text-base">
            {site.name} <span className="text-muted-foreground">· {site.role}</span>
          </p>
          <p className="mt-1 text-xs text-muted-foreground">{site.courts}</p>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} · Content on this site is for general information and is
          not legal advice.
        </p>
      </div>
    </footer>
  );
}