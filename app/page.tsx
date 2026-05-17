import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import ProblemSection from "@/components/ProblemSection";
import CategoryGrid from "@/components/CategoryGrid";
import ProductGrid from "@/components/ProductGrid";
import ServiceSection from "@/components/ServiceSection";
import TrainingSection from "@/components/TrainingSection";
import TrustSection from "@/components/TrustSection";
import SocialProofSection from "@/components/SocialProofSection";
import SocialSection from "@/components/SocialSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { products } from "@/data/site";

/* ISR: revalidate every hour so product covers auto-update when changed on Lynk.id */
export const revalidate = 3600;

async function fetchOgImages(links: string[]): Promise<(string | null)[]> {
  return Promise.all(
    links.map(async (link) => {
      try {
        const res = await fetch(link, {
          headers: { "User-Agent": "Mozilla/5.0 (compatible; RahasiaDagang/1.0)" },
          next: { revalidate: 3600 },
        });
        const html = await res.text();
        /* Try both attribute-order variants of the og:image meta tag */
        const m =
          html.match(/property="og:image"[^>]*content="([^"]+)"/i) ??
          html.match(/content="([^"]+)"[^>]*property="og:image"/i);
        return m?.[1] ?? null;
      } catch {
        return null;
      }
    })
  );
}

export default async function Home() {
  const ogImages = await fetchOgImages(products.map((p) => p.link));

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <ProblemSection />
        <CategoryGrid />
        <ProductGrid ogImages={ogImages} />
        <SocialProofSection />
        <ServiceSection />
        <TrainingSection />
        <TrustSection />
        <SocialSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
