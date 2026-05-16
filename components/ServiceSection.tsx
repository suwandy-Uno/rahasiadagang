"use client";

import { motion } from "framer-motion";
import { ClipboardList, LayoutGrid, MessageCircle, Megaphone, Users, Lightbulb, ArrowRight } from "lucide-react";
import { services, siteConfig } from "@/data/site";
import SectionBackground from "@/components/SectionBackground";

const iconMap: Record<string, React.ReactNode> = {
  MessageCircle: <MessageCircle size={20} />,
  ClipboardList: <ClipboardList size={20} />,
  LayoutGrid:    <LayoutGrid    size={20} />,
  Megaphone:     <Megaphone     size={20} />,
  Users:         <Users         size={20} />,
  Lightbulb:     <Lightbulb     size={20} />,
};

export default function ServiceSection() {
  const waLink = `https://wa.me/${siteConfig.whatsapp}?text=Halo%20RahasiaDagang%2C%20saya%20ingin%20konsultasi%20kebutuhan%20bisnis.`;

  return (
    <section id="solusi" className="relative py-24 lg:py-32 bg-[#0a1220] overflow-hidden">
      <SectionBackground
        image="/toko-jahit-pakaian-adat.png"
        overlay="bg-[#020817]/[0.35]"
        position="center right"
      >
        <></>
      </SectionBackground>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <span className="inline-block text-[#D4AF37] text-[12px] font-semibold tracking-[0.2em] uppercase mb-4">
            Bantuan Implementasi
          </span>
          <h2 className="text-[2.25rem] lg:text-[2.8rem] font-extrabold text-white tracking-tight mb-4">
            Tidak Punya Waktu Belajar? Kami Bantu Implementasikan.
          </h2>
          <p className="text-[#B0C4D4] text-[17px] leading-[1.8]">
            Kalau kamu tidak sempat setup sendiri, RahasiaDagang juga bisa bantu menyiapkan sistem jualan sederhana untuk WhatsApp Business, template chat, order tracker, dan alur follow-up pelanggan.
          </p>
        </motion.div>

        {/* Service grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.55 }}
              className="group relative rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur-sm p-7 hover:border-[#D4AF37]/40 hover:shadow-[0_0_28px_rgba(212,175,55,0.12)] transition-all duration-300"
            >
              {/* Number label */}
              <div className="text-[#D4AF37]/60 font-black text-[48px] leading-none absolute top-4 right-5 select-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-5 text-[#D4AF37] group-hover:bg-[#D4AF37]/18 transition-colors">
                  {iconMap[service.icon]}
                </div>
                <h3 className="font-bold text-white text-[17px] mb-3 tracking-tight">{service.title}</h3>
                <p className="text-[#94A3B8] text-[15px] leading-[1.7]">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-5 p-8 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04]"
          style={{ background: "rgba(212,175,55,0.04)" }}
        >
          <div className="flex-1">
            <p className="text-white font-bold text-[18px] mb-1.5">Tidak tahu harus mulai dari mana?</p>
            <p className="text-[#94A3B8] text-[15px]">Ceritakan kebutuhan bisnismu — kami akan bantu tentukan solusi yang tepat.</p>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 h-[50px] px-7 rounded-full bg-gradient-to-r from-[#C9A227] to-[#F5C542] text-[#060e1b] font-bold text-[14px] tracking-wide hover:shadow-xl hover:shadow-[#D4AF37]/20 hover:scale-[1.02] transition-all whitespace-nowrap"
          >
            Konsultasi via WhatsApp
            <ArrowRight size={15} strokeWidth={2.5} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
