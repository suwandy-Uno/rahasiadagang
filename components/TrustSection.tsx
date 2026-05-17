"use client";

import { motion } from "framer-motion";
import { ThumbsUp, CheckCircle, GraduationCap, Star } from "lucide-react";
import { useContent } from "@/hooks/useContent";

const iconMap: Record<string, React.ReactNode> = {
  ThumbsUp:      <ThumbsUp      size={22} />,
  CheckCircle:   <CheckCircle   size={22} />,
  GraduationCap: <GraduationCap size={22} />,
  Star:          <Star          size={22} />,
};

const IMAGES = [
  { src: "/toko-sembako.png",         left: "0%",   width: "28%",  opacity: 0.38, blur: "3px",  zIndex: 1 },
  { src: "/warteg-ibu-jualan.png",    left: "18%",  width: "34%",  opacity: 0.32, blur: "2px",  zIndex: 2 },
  { src: "/warung-kopi-lokal.png",    left: "36%",  width: "30%",  opacity: 0.42, blur: "1px",  zIndex: 3 },
  { src: "/toko-roti-traditional.png",left: "58%",  width: "26%",  opacity: 0.34, blur: "2px",  zIndex: 2 },
  { src: "/toko-jahit-pakaian-adat.png", left: "76%", width: "24%", opacity: 0.36, blur: "3px", zIndex: 1 },
];

function highlightText(text: string, highlight: string) {
  const parts = text.split(highlight);
  return (
    <>
      {parts[0]}
      <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
        {highlight}
      </span>
      {parts[1]}
    </>
  );
}

export default function TrustSection() {
  const { trustCards, ui } = useContent();
  return (
    <section id="trust" className="relative py-28 lg:py-36 overflow-hidden bg-[#020817]">

      {/* ── Layer 1: cinematic image collage ── */}
      <div className="absolute inset-0">
        {IMAGES.map((img) => (
          <div
            key={img.src}
            className="absolute inset-y-0"
            style={{
              left: img.left,
              width: img.width,
              backgroundImage: `url('${img.src}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: img.opacity,
              filter: `blur(${img.blur})`,
              zIndex: img.zIndex,
            }}
          />
        ))}
      </div>

      {/* ── Layer 2: dark navy base overlay ── */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: "rgba(2,8,23,0.82)" }}
      />

      {/* ── Layer 3: top/bottom gradient fade ── */}
      <div
        className="absolute inset-0 z-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,8,23,0.95) 0%, rgba(2,8,23,0.72) 40%, rgba(2,8,23,0.90) 100%)",
        }}
      />

      {/* ── Layer 4: edge vignette ── */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(2,8,23,0.75) 100%)",
        }}
      />

      {/* ── Separator line top ── */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent z-30" />

      {/* ── Content ── */}
      <div className="relative z-30 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          {/* Radial glow behind heading */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-amber-400/8 rounded-full blur-[80px] pointer-events-none" />

          <span className="inline-block text-amber-400 text-[11px] font-semibold tracking-[0.25em] uppercase mb-5">
            {ui.trustSection.eyebrow}
          </span>
          <h2 className="text-[2.25rem] lg:text-[3rem] font-extrabold text-white tracking-tight leading-[1.15] max-w-2xl mx-auto">
            {highlightText(ui.trustSection.heading, ui.trustSection.highlightPhrase)}
          </h2>
          <p className="text-slate-300 text-[16px] leading-relaxed max-w-xl mx-auto mt-5">
            {ui.trustSection.subheading}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
              className="group relative rounded-3xl border border-white/10 bg-slate-950/55 backdrop-blur-xl p-7 hover:border-amber-400/40 hover:shadow-[0_0_36px_rgba(212,175,55,0.14)] transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 flex items-center justify-center mb-5 text-amber-400 group-hover:bg-amber-400/18 group-hover:shadow-[0_0_16px_rgba(251,191,36,0.2)] transition-all duration-300">
                {iconMap[card.icon]}
              </div>

              <h3 className="font-bold text-white text-[17px] mb-3 tracking-tight leading-snug">
                {card.title}
              </h3>
              <p className="text-slate-300 text-[14px] leading-[1.75]">
                {card.description}
              </p>

              {/* Subtle card inner top glow on hover */}
              <div className="absolute top-0 inset-x-0 h-px rounded-t-3xl bg-gradient-to-r from-transparent via-amber-400/0 group-hover:via-amber-400/30 to-transparent transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Separator line bottom ── */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent z-30" />
    </section>
  );
}
