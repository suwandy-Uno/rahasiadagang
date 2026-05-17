"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useContent } from "@/hooks/useContent";
import SectionBackground from "@/components/SectionBackground";

const fallbackBg = [
  "linear-gradient(135deg, #1a2d4a 0%, #0d1e38 60%, #1a2a1a 100%)",
  "linear-gradient(135deg, #1f1a0d 0%, #0d1e38 60%, #1a1030 100%)",
  "linear-gradient(135deg, #0d1e38 0%, #18100a 60%, #0d1e38 100%)",
  "linear-gradient(135deg, #10200a 0%, #0a1628 60%, #1a2d1a 100%)",
];

export default function ProductGrid() {
  const { products, ui } = useContent();
  return (
    <section id="produk" className="relative py-24 lg:py-32 bg-[#060e1b] overflow-hidden">
      <SectionBackground
        image="/toko-roti-traditional.png"
        overlay="bg-[#020817]/[0.35]"
        position="center"
      >
        <></>
      </SectionBackground>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

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
            {ui.productGrid.eyebrow}
          </span>
          <h2 className="text-[2.25rem] lg:text-[2.8rem] font-extrabold text-white tracking-tight mb-4">
            {ui.productGrid.heading}
          </h2>
          <p className="text-[#B0C4D4] text-[17px] max-w-md mx-auto leading-relaxed">
            {ui.productGrid.subheading}
          </p>
        </motion.div>

        {/* Products — 4 columns in a single row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product, i) => {
            const coverUrl = (product as { image?: string }).image ?? null;
            return (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.22 } }}
                className="group flex flex-col rounded-2xl border border-white/10 bg-slate-950/90 backdrop-blur-sm overflow-hidden hover:border-[#D4AF37]/40 hover:shadow-[0_0_28px_rgba(212,175,55,0.12)] transition-all duration-300"
              >
                {/* Cover image */}
                <div
                  className="relative h-44 overflow-hidden flex-shrink-0"
                  style={{ background: fallbackBg[i % fallbackBg.length] }}
                >
                  {coverUrl ? (
                    <Image
                      src={coverUrl}
                      alt={product.title}
                      fill
                      className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-end p-4">
                      <span className="text-[#F5C542]/60 text-[10px] uppercase tracking-widest">
                        {product.label}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1e38]/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2 py-0.5 rounded-full bg-[#D4AF37]/90 text-[#060e1b] text-[9px] font-bold tracking-[0.12em] uppercase">
                      {product.label}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-4">
                  <h3 className="font-bold text-white text-[14px] leading-snug mb-1 group-hover:text-[#F5C542] transition-colors">
                    {product.title}
                  </h3>
                  {"subtitle" in product && (
                    <p className="text-[#D4AF37]/70 text-[11px] font-medium mb-2 leading-tight">
                      {(product as { subtitle?: string }).subtitle}
                    </p>
                  )}
                  <p className="text-[#94A3B8] text-[12px] leading-[1.6] mb-4 line-clamp-2 flex-1">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="text-[#F5C542] font-bold text-[15px] leading-none">{product.price}</div>
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 h-8 px-3.5 rounded-full bg-gradient-to-r from-[#C9A227] to-[#F5C542] text-[#060e1b] font-bold text-[11px] tracking-wide hover:shadow-lg hover:shadow-[#D4AF37]/20 hover:scale-[1.03] transition-all"
                    >
                      {ui.productGrid.viewDetail}
                      <ArrowUpRight size={11} strokeWidth={2.5} />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Auto-update note — only visible in dev mode */}
        {process.env.NODE_ENV === "development" && (
          <p className="text-center text-[11px] text-[#1E3A5F] mt-6">
            Cover images auto-fetched from product links · revalidates every hour
          </p>
        )}
      </div>
    </section>
  );
}
