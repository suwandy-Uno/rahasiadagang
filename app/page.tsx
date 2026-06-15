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
import NewsSection from "@/components/NewsSection";

export const revalidate = 86400;

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <ProblemSection />
        <CategoryGrid />
        <ProductGrid />
        <SocialProofSection />
        <ServiceSection />
        <TrainingSection />
        <TrustSection />
        <NewsSection />
        <SocialSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
