"use client";

import { motion } from "framer-motion";
import { AIIcon, WhatsAppIcon, ContentIcon, WebsiteIcon, WorkflowIcon, CloudToolsIcon } from "@/components/icons/BrandIcons";
import { categories } from "@/data/site";

/* Map icon key → component + accent colour */
const iconMap: Record<string, { icon: React.ReactNode; bg: string; ring: string }> = {
  Cpu:           { icon: <AIIcon size={26} />,         bg: "rgba(212,175,55,0.12)",  ring: "rgba(212,175,55,0.25)" },
  MessageCircle: { icon: <WhatsAppIcon size={26} />,   bg: "rgba(37,211,102,0.12)",  ring: "rgba(37,211,102,0.25)" },
  Megaphone:     { icon: <ContentIcon size={26} />,    bg: "rgba(225,48,108,0.10)",  ring: "rgba(225,48,108,0.22)" },
  Globe:         { icon: <WebsiteIcon size={26} />,    bg: "rgba(79,142,247,0.10)",  ring: "rgba(79,142,247,0.22)" },
  ClipboardList: { icon: <WorkflowIcon size={26} />,   bg: "rgba(167,139,250,0.10)", ring: "rgba(167,139,250,0.22)" },
  Cloud:         { icon: <CloudToolsIcon size={26} />, bg: "rgba(34,211,238,0.10)",  ring: "rgba(34,211,238,0.22)" },
};

export default function CategoryGrid() {
  return (
    <section id="kategori" className="relative py-24 lg:py-32 bg-[#0a1220]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#D4AF37] text-[12px] font-semibold tracking-[0.2em] uppercase mb-4">
            Topik Belajar
          </span>
          <h2 className="text-[2.25rem] lg:text-[2.8rem] font-extrabold text-white tracking-tight mb-4">
            Kategori Belajar Populer
          </h2>
          <p className="text-[#B0C4D4] text-[17px] max-w-md mx-auto leading-relaxed">
            Pilih topik yang paling relevan dengan kebutuhan bisnismu.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => {
            const entry = iconMap[cat.icon] ?? iconMap["Cpu"];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.55 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl border border-white/[0.07] bg-[#0d1e38]/50 p-7 cursor-pointer hover:border-[#D4AF37]/25 hover:shadow-[0_0_28px_rgba(212,175,55,0.07)] transition-all duration-300"
              >
                {/* Icon with per-category accent colour */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: entry.bg,
                    boxShadow: `0 0 0 1px ${entry.ring}`,
                  }}
                >
                  {entry.icon}
                </div>

                <h3 className="font-bold text-white text-[17px] mb-3 tracking-tight">{cat.title}</h3>
                <p className="text-[#94A3B8] text-[15px] leading-[1.7]">{cat.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
