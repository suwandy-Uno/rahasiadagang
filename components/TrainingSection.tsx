"use client";

import { motion } from "framer-motion";
import { Cpu, MessageCircle, Zap, Megaphone } from "lucide-react";
import { trainingCards, siteConfig } from "@/data/site";
import SectionBackground from "@/components/SectionBackground";

const iconMap: Record<string, React.ReactNode> = {
  Cpu:           <Cpu           size={22} />,
  MessageCircle: <MessageCircle size={22} />,
  Zap:           <Zap           size={22} />,
  Megaphone:     <Megaphone     size={22} />,
};

const formats = ["AI & Promosi", "WhatsApp", "Follow-up", "Konten"];

export default function TrainingSection() {
  const waLink = `https://wa.me/${siteConfig.whatsapp}?text=Halo%20RahasiaDagang%2C%20saya%20ingin%20tanya%20tentang%20training.`;

  return (
    <section id="training" className="relative py-24 lg:py-32 bg-[#060e1b] overflow-hidden">
      <SectionBackground
        image="/warung-kopi-lokal.png"
        overlay="bg-[#020817]/[0.35]"
        position="center"
      >
        <></>
      </SectionBackground>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
      {/* Warm gold glow center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#D4AF37]/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#D4AF37] text-[12px] font-semibold tracking-[0.2em] uppercase mb-4">
            Training &amp; Workshop
          </span>
          <h2 className="text-[2.25rem] lg:text-[2.8rem] font-extrabold text-white tracking-tight mb-4 max-w-2xl mx-auto">
            Training &amp; Workshop yang Langsung Dipraktikkan
          </h2>
          <p className="text-[#B0C4D4] text-[17px] leading-[1.8] max-w-xl mx-auto">
            Bukan hanya mendengar teori. Peserta diarahkan untuk mencoba, membuat, dan memakai teknologi dalam aktivitas bisnis harian.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {trainingCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur-sm p-8 overflow-hidden hover:border-[#D4AF37]/40 hover:shadow-[0_0_32px_rgba(212,175,55,0.12)] transition-all duration-300"
            >
              {/* Format tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#D4AF37]/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/60" />
                <span className="text-[#D4AF37]/70 text-[11px] font-semibold tracking-[0.15em] uppercase">{formats[i]}</span>
              </div>

              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-5 text-[#D4AF37] group-hover:bg-[#D4AF37]/18 transition-colors">
                {iconMap[card.icon]}
              </div>
              <h3 className="text-[1.2rem] font-bold text-white mb-3 tracking-tight">{card.title}</h3>
              <p className="text-[#94A3B8] text-[15px] leading-[1.7]">{card.description}</p>

              {/* Decorative corner */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full border border-[#D4AF37]/8" />
            </motion.div>
          ))}
        </div>

        {/* Secondary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-[50px] px-8 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] font-semibold text-[14px] hover:border-[#D4AF37]/70 hover:bg-[#D4AF37]/8 transition-all"
          >
            Tanya Jadwal &amp; Harga Training
          </a>
        </motion.div>
      </div>
    </section>
  );
}
