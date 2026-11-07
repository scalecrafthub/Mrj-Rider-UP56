import SiteHeader from "@/components/site/SiteHeader";
import Hero from "@/components/site/Hero";
import Ticker from "@/components/site/Ticker";
import Services from "@/components/site/Services";
import Builds from "@/components/site/Builds";
import Statement from "@/components/site/Statement";
import Process from "@/components/site/Process";
import Visit from "@/components/site/Visit";
import SiteFooter from "@/components/site/SiteFooter";
import WhatsAppFab from "@/components/site/WhatsAppFab";

export default function Home() {
  return (
    <div className="min-h-screen bg-carbon">
      <SiteHeader />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <Builds />
        <Statement />
        <Process />
        <Visit />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}