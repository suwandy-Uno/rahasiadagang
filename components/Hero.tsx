"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, MessageCircle, Check, Cpu, Globe, Zap } from "lucide-react";
import { heroData, siteConfig } from "@/data/site";
import SectionBackground from "@/components/SectionBackground";

const iconMap: Record<string, React.ReactNode> = {
  Cpu:           <Cpu           size={16} className="text-[#F5C542]" />,
  MessageCircle: <MessageCircle size={16} className="text-[#F5C542]" />,
  Globe:         <Globe         size={16} className="text-[#F5C542]" />,
  Zap:           <Zap           size={16} className="text-[#F5C542]" />,
};

function highlightHeadline(text: string, highlights: string[]): React.ReactNode[] {
  let result: React.ReactNode[] = [text];
  highlights.forEach((phrase) => {
    const next: React.ReactNode[] = [];
    result.forEach((part) => {
      if (typeof part !== "string") { next.push(part); return; }
      const segments = part.split(phrase);
      segments.forEach((s, i) => {
        next.push(s);
        if (i < segments.length - 1)
          next.push(<span key={phrase + i} className="text-[#F5C542]">{phrase}</span>);
      });
    });
    result = next;
  });
  return result;
}

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: (i as number) * 0.11, duration: 0.65 } }),
};

/* Only show the first 3 floating cards to reduce clutter */
const VISIBLE_CARDS = 3;

export default function Hero() {
  const waLink = `https://wa.me/${siteConfig.whatsapp}?text=Halo%20RahasiaDagang%2C%20saya%20ingin%20konsultasi%20training%2Fworkshop.`;
  const visibleCards = heroData.floatingCards.slice(0, VISIBLE_CARDS);

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden"
    >
      {/* ── Background layers ── */}
      <SectionBackground
        image="/toko-sembako.png"
        gradient="linear-gradient(90deg, rgba(3,7,18,0.70) 0%, rgba(3,7,18,0.45) 50%, rgba(3,7,18,0.10) 100%)"
        position="center right"
      >
        <></>
      </SectionBackground>
      {/* Subtle gold glow top-center */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left column ── */}
          <div className="max-w-xl">
            {/* Eyebrow badge */}
            <motion.div
              custom={0} variants={fadeUp} initial="hidden" animate="visible"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/8 mb-8"
              style={{ background: "rgba(212,175,55,0.08)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5C542] animate-pulse flex-shrink-0" />
              <span className="text-[#D4AF37] text-[11px] font-semibold tracking-[0.18em] uppercase">
                {heroData.badge}
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              custom={1} variants={fadeUp} initial="hidden" animate="visible"
              className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] font-extrabold text-white leading-[1.13] tracking-tight mb-6"
            >
              {highlightHeadline(heroData.headline, heroData.highlightWords)}
            </motion.h1>

            {/* Sub */}
            <motion.p
              custom={2} variants={fadeUp} initial="hidden" animate="visible"
              className="text-[#B0C4D4] text-[15px] lg:text-base leading-[1.8] mb-10 max-w-[520px]"
            >
              {heroData.subheadline}
            </motion.p>

            {/* CTA row */}
            <motion.div
              custom={3} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-col sm:flex-row gap-3 mb-9"
            >
              <a
                href="#produk"
                className="inline-flex items-center justify-center gap-2 h-[52px] px-7 rounded-full bg-gradient-to-r from-[#C9A227] to-[#F5C542] text-[#060e1b] font-bold text-[14px] tracking-wide hover:shadow-xl hover:shadow-[#D4AF37]/25 hover:scale-[1.02] transition-all"
              >
                {heroData.ctaPrimary}
                <ArrowRight size={15} strokeWidth={2.5} />
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-[52px] px-7 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] font-semibold text-[14px] hover:border-[#D4AF37]/70 hover:bg-[#D4AF37]/8 transition-all"
                style={{ background: "transparent" }}
              >
                <MessageCircle size={15} strokeWidth={2} />
                {heroData.ctaSecondary}
              </a>
            </motion.div>

            {/* Trust bullets */}
            <motion.div
              custom={4} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-wrap gap-x-6 gap-y-2.5"
            >
              {heroData.trustBullets.map((b) => (
                <span key={b} className="flex items-center gap-1.5 text-[13px] text-[#94A3B8]">
                  <Check size={12} className="text-[#D4AF37] flex-shrink-0" strokeWidth={2.5} />
                  {b}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right column — image shows through gradient ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28, duration: 0.75 }}
            className="relative hidden lg:block"
          >
            {/* Floating info cards over the image */}
            {visibleCards.map((card, i) => {
              const positions = [
                "top-8 left-0",
                "top-1/2 -translate-y-1/2 left-0",
                "bottom-8 left-0",
              ];
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                  className={`absolute ${positions[i]} rounded-xl border border-[#D4AF37]/30 bg-[#020817]/80 backdrop-blur-md p-4 w-[200px] shadow-xl`}
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-7 h-7 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center flex-shrink-0">
                      {iconMap[card.icon]}
                    </div>
                    <span className="text-white text-[12px] font-semibold leading-tight">{card.title}</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-snug pl-9">{card.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
