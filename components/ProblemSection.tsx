"use client";

import { motion } from "framer-motion";
import { HelpCircle, AlertCircle, Clock, ClipboardList, MessageCircle, Megaphone } from "lucide-react";
import { problemData } from "@/data/site";
import SectionBackground from "@/components/SectionBackground";

const iconMap: Record<string, React.ReactNode> = {
  HelpCircle:    <HelpCircle    size={18} />,
  AlertCircle:   <AlertCircle   size={18} />,
  Clock:         <Clock         size={18} />,
  ClipboardList: <ClipboardList size={18} />,
  MessageCircle: <MessageCircle size={18} />,
  Megaphone:     <Megaphone     size={18} />,
};

export default function ProblemSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#060e1b] overflow-hidden">
      <SectionBackground
        image="/warteg-ibu-jualan.png"
        overlay="bg-[#020817]/[0.35]"
        position="center"
      >
        <></>
      </SectionBackground>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#D4AF37] text-[12px] font-semibold tracking-[0.2em] uppercase mb-4">
            Tantangan Bisnis
          </span>
          <h2 className="text-[2.25rem] lg:text-[2.8rem] font-extrabold text-white tracking-tight leading-[1.2]">
            {problemData.title}
          </h2>
        </motion.div>

        {/* Pain cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-10">
          {problemData.pains.map((pain, i) => (
            <motion.div
              key={pain.text}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.5 }}
              className="flex items-start gap-3.5 rounded-xl border border-white/10 bg-slate-950/80 backdrop-blur-sm p-5"
            >
              <span className="text-[#D4AF37]/50 mt-0.5 flex-shrink-0">{iconMap[pain.icon]}</span>
              <p className="text-[#B0C4D4] text-[15px] leading-[1.65]">{pain.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="rounded-xl border border-[#D4AF37]/25 p-7 text-center"
          style={{ background: "rgba(212,175,55,0.05)" }}
        >
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent mx-auto mb-4" />
          <p className="text-[#D4AF37] font-semibold text-[16px] lg:text-[17px] leading-[1.7] max-w-xl mx-auto">
            {problemData.closing}
          </p>
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent mx-auto mt-4" />
        </motion.div>
      </div>
    </section>
  );
}
