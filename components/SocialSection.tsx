"use client";

import { motion } from "framer-motion";
import { Play, Share2, Music2, ArrowUpRight } from "lucide-react";
import { socialLinks } from "@/data/site";

const iconMap: Record<string, React.ReactNode> = {
  Youtube:   <Play   size={22} strokeWidth={1.8} />,
  Instagram: <Share2 size={22} strokeWidth={1.8} />,
  Music2:    <Music2 size={22} strokeWidth={1.8} />,
};

const platformLabel: Record<string, string> = {
  YouTube:   "Video Tutorial",
  Instagram: "Tips Harian",
  TikTok:    "Short Video",
};

export default function SocialSection() {
  return (
    <section id="konten" className="relative py-24 lg:py-32 bg-[#060e1b]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#D4AF37] text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">
            Konten Gratis
          </span>
          <h2 className="text-[2rem] lg:text-[2.6rem] font-extrabold text-white tracking-tight mb-4">
            Belajar Gratis dari Konten RahasiaDagang
          </h2>
          <p className="text-[#B0C4D4] text-[15px] leading-[1.8] max-w-md mx-auto">
            Ikuti konten pendek kami untuk tips AI, WhatsApp, otomasi, dan teknologi praktis untuk bisnis.
          </p>
        </motion.div>

        {/* Social cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {socialLinks.map((item, i) => (
            <motion.div
              key={item.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group rounded-2xl border border-white/[0.07] bg-[#0a1628]/80 p-7 hover:border-[#D4AF37]/28 hover:shadow-[0_0_28px_rgba(212,175,55,0.08)] transition-all duration-300"
            >
              {/* Icon area */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}>
                  {iconMap[item.icon]}
                </div>
                <div>
                  <div className="text-white font-bold text-[15px] leading-tight">{item.platform}</div>
                  <div className="text-[#94A3B8] text-[11px] tracking-wide">{platformLabel[item.platform]}</div>
                </div>
              </div>

              <p className="text-[#94A3B8] text-[13px] leading-[1.7] mb-6">{item.description}</p>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#D4AF37] text-[13px] font-semibold hover:gap-2.5 transition-all"
              >
                Kunjungi Channel
                <ArrowUpRight size={13} strokeWidth={2.5} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
