"use client";

import { motion } from "framer-motion";
import { MessageCircle, Cpu, Rocket } from "lucide-react";
import { useContent } from "@/hooks/useContent";

const iconMap: Record<string, React.ReactNode> = {
  MessageCircle: <MessageCircle size={22} className="text-[#D4AF37]" />,
  Cpu:           <Cpu           size={22} className="text-[#D4AF37]" />,
  Rocket:        <Rocket        size={22} className="text-[#D4AF37]" />,
};

const steps = ["01", "02", "03"];

const BG_IMAGES = [
  { src: "/warteg-ibu-jualan.png",    left: "0%",    width: "38%" },
  { src: "/warung-kopi-lokal.png",    left: "31%",   width: "38%" },
  { src: "/toko-sembako.png",         left: "62%",   width: "38%" },
];

export default function Philosophy() {
  const { philosophyData, ui } = useContent();
  return (
    <section id="filosofi" className="relative py-24 lg:py-32 overflow-hidden bg-[#0a1220]">

      {/* ── Layer 1: 3-image blended background ── */}
      <div className="absolute inset-0">
        {BG_IMAGES.map((img) => (
          <div
            key={img.src}
            className="absolute inset-y-0"
            style={{
              left: img.left,
              width: img.width,
              backgroundImage: `url('${img.src}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.35,
              filter: "blur(1.5px)",
            }}
          />
        ))}
      </div>

      {/* ── Layer 2: dark navy overlay 35% ── */}
      <div className="absolute inset-0" style={{ background: "rgba(2,8,23,0.65)" }} />

      {/* ── Layer 3: top/bottom fade ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,8,23,0.90) 0%, rgba(2,8,23,0.55) 40%, rgba(2,8,23,0.90) 100%)",
        }}
      />

      {/* ── Separator ── */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#D4AF37] text-[12px] font-semibold tracking-[0.2em] uppercase mb-4">
            {ui.philosophySection.eyebrow}
          </span>
          <h2 className="text-[2.25rem] lg:text-[2.8rem] font-extrabold text-white tracking-tight mb-5">
            {philosophyData.title}
          </h2>
          <p className="text-slate-300 text-[17px] leading-[1.8] max-w-[640px] mx-auto">
            {philosophyData.description}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {philosophyData.cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.13, duration: 0.6 }}
              className="group relative rounded-2xl border border-white/10 bg-slate-950/60 backdrop-blur-md p-8 hover:border-[#D4AF37]/40 hover:shadow-[0_0_32px_rgba(212,175,55,0.12)] transition-all duration-300"
            >
              {/* Step number */}
              <div className="text-[#D4AF37]/60 font-black text-[64px] leading-none absolute top-5 right-6 select-none">
                {steps[i]}
              </div>

              <div className="relative">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/18 transition-colors">
                  {iconMap[card.icon]}
                </div>

                <h3 className="text-[1.25rem] font-bold text-white mb-3 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-slate-300 text-[15px] leading-[1.75]">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
