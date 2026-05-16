"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function CTASection() {
  const waTraining = `https://wa.me/${siteConfig.whatsapp}?text=Halo%20RahasiaDagang%2C%20saya%20ingin%20tanya%20soal%20training.`;

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden bg-[#060e1b]">
      {/* ── Background layers ── */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
      {/* Radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#D4AF37]/6 rounded-full blur-[100px] pointer-events-none" />
      {/* dot grid */}
      <div className="absolute inset-0 bg-grid opacity-25" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
        {/* Separator line top */}
        <div className="flex items-center gap-4 justify-center mb-12">
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-[#D4AF37]/50 to-transparent" />
          <div className="w-2 h-2 rounded-full bg-[#D4AF37]/60" />
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-[#D4AF37]/50 to-transparent" />
        </div>

        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-[#D4AF37] text-[12px] font-semibold tracking-[0.2em] uppercase mb-6"
        >
          Mulai Sekarang
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.65 }}
          className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] font-extrabold text-white leading-[1.1] tracking-tight mb-6"
        >
          Tidak Perlu Jadi{" "}
          <span className="text-[#F5C542]">Jago Teknologi</span>
          <br className="hidden sm:block" />{" "}
          untuk Mulai Naik Kelas
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[#B0C4D4] text-[17px] lg:text-[18px] leading-[1.85] mb-12 max-w-[560px] mx-auto"
        >
          Mulai dari langkah kecil: rapikan WhatsApp, gunakan AI untuk promosi, follow-up pelanggan, dan bangun sistem jualan yang lebih konsisten.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-3.5 justify-center"
        >
          <a
            href="#produk"
            className="inline-flex items-center justify-center gap-2 h-[54px] px-8 rounded-full bg-gradient-to-r from-[#C9A227] to-[#F5C542] text-[#060e1b] font-bold text-[15px] tracking-wide hover:shadow-2xl hover:shadow-[#D4AF37]/30 hover:scale-[1.02] transition-all"
          >
            Mulai Belajar Sekarang
            <ArrowRight size={16} strokeWidth={2.5} />
          </a>
          <a
            href={waTraining}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-[54px] px-8 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] font-semibold text-[15px] hover:border-[#D4AF37]/70 hover:bg-[#D4AF37]/8 transition-all"
          >
            <MessageCircle size={16} strokeWidth={2} />
            Hubungi untuk Training
          </a>
        </motion.div>

        {/* Separator line bottom */}
        <div className="flex items-center gap-4 justify-center mt-14">
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-[#D4AF37]/50 to-transparent" />
          <div className="w-2 h-2 rounded-full bg-[#D4AF37]/60" />
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-[#D4AF37]/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
