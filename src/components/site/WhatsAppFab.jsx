import { MessageCircle } from "lucide-react";
import { DEFAULT_WA_MESSAGE, whatsapp } from "@/lib/site";

export default function WhatsAppFab() {
  return (
    <a
      href={whatsapp(DEFAULT_WA_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with MRJ Riders Up56 on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2.5 bg-ignition px-4 py-3.5 text-carbon shadow-[0_10px_40px_-8px_rgba(255,138,0,0.7)] transition-transform hover:scale-[1.03] md:bottom-7 md:right-7"
    >
      <span
        className="pointer-events-none absolute inset-0 animate-pulse-ring bg-ignition/40"
        aria-hidden="true"
      />
      <MessageCircle className="relative h-5 w-5" aria-hidden="true" />
      <span className="relative hidden font-mono text-[11px] uppercase tracking-[0.2em] sm:inline">
        Let&apos;s talk
      </span>
    </a>
  );
}