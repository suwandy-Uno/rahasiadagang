"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Star, Quote, ImageIcon } from "lucide-react";
import { testimonials, successImages } from "@/data/site";

function ImageWithFallback({ src, alt, placeholder }: { src: string; alt: string; placeholder: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="absolute inset-0 bg-[#0d1e38] flex flex-col items-center justify-center gap-3 p-4">
        <ImageIcon size={28} className="text-[#D4AF37]/40" />
        <p className="text-[#64748B] text-[12px] text-center leading-snug">{placeholder}</p>
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-700"
      sizes="(max-width: 768px) 100vw, 33vw"
      onError={() => setFailed(true)}
    />
  );
}

export default function SocialProofSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#060e1b]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#D4AF37] text-[12px] font-semibold tracking-[0.2em] uppercase mb-4">
            Cerita Nyata
          </span>
          <h2 className="text-[2.25rem] lg:text-[2.8rem] font-extrabold text-white tracking-tight mb-4">
            Mereka Sudah Rasakan Manfaatnya
          </h2>
          <p className="text-[#B0C4D4] text-[17px] leading-[1.8] max-w-md mx-auto">
            Pemilik UMKM dari berbagai kota yang sudah belajar dan langsung mempraktikkan teknologi dalam bisnis harian mereka.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group rounded-2xl border border-white/[0.07] bg-[#0a1628]/80 p-7 hover:border-[#D4AF37]/25 hover:shadow-[0_0_28px_rgba(212,175,55,0.08)] transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote size={20} className="text-[#D4AF37]/40 mb-4" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={13} className="text-[#F5C542] fill-[#F5C542]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#B0C4D4] text-[15px] leading-[1.8] mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Person */}
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-[#D4AF37]/20 flex-shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div>
                  <div className="text-white font-semibold text-[14px] leading-tight">{t.name}</div>
                  <div className="text-[#94A3B8] text-[12px] mt-0.5">{t.business} · {t.city}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
