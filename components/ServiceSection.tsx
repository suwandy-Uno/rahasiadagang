"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Star, ImageIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useContent } from "@/hooks/useContent";

function PackageImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="w-full h-48 bg-[#0d1e38] flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10">
        <ImageIcon size={28} className="text-[#D4AF37]/30" />
        <p className="text-[#64748B] text-[11px]">{alt}</p>
      </div>
    );
  }
  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-slate-900" style={{ aspectRatio: "3/2" }}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, 50vw"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

const pkg1Includes = [
  "Up to 5 responsive pages",
  "Premium mobile responsive design",
  "WhatsApp CTA integration",
  "Contact form",
  "Fast loading website",
  "Basic SEO setup",
  "AI-assisted copywriting",
  "Domain & hosting setup assistance",
  "Social media integration",
  "Google Maps integration",
  "5-day delivery",
];

const pkg1IncludesID = [
  "Hingga 5 halaman responsif",
  "Desain mobile premium responsif",
  "Integrasi WhatsApp CTA",
  "Form kontak",
  "Website loading cepat",
  "Setup SEO dasar",
  "Copywriting berbantuan AI",
  "Bantuan setup domain & hosting",
  "Integrasi media sosial",
  "Integrasi Google Maps",
  "Selesai dalam 5 hari",
];

const pkg1Benefits = [
  "Tampilan bisnis lebih profesional",
  "Mudah ditemukan & dihubungi customer",
  "Mobile friendly",
  "Siap digunakan untuk promosi digital",
];

const pkg1BenefitsEN = [
  "More professional business appearance",
  "Easy to find & contact by customers",
  "Mobile friendly",
  "Ready for digital marketing",
];

const pkg1FitID = ["UMKM", "Cafe & restoran", "Toko online", "Jasa lokal", "Brand baru", "Bisnis rumahan"];
const pkg1FitEN = ["SMEs", "Cafe & restaurants", "Online stores", "Local services", "New brands", "Home businesses"];

const pkg2Includes = [
  "Premium multi-page business website",
  "Professional modern UI/UX",
  "Mobile optimized experience",
  "Bilingual website (Indonesia & English)",
  "Company profile pages",
  "Services & solutions pages",
  "Portfolio/project gallery",
  "Product catalog upload (up to 20 products/services)",
  "SEO-ready website structure",
  "Blog system setup",
  "Google Analytics integration",
  "Lead capture forms",
  "WhatsApp CTA integration",
  "Google Business Profile optimization",
  "AI-assisted business copywriting",
  "Company color & branding adjustment",
  "Basic logo refinement/design assistance",
  "Fast-loading modern architecture",
  "Training & handover session",
  "7–10 day delivery",
];

const pkg2IncludesID = [
  "Website bisnis multi-halaman premium",
  "UI/UX modern & profesional",
  "Pengalaman mobile yang dioptimalkan",
  "Website bilingual (Indonesia & Inggris)",
  "Halaman company profile",
  "Halaman layanan & solusi",
  "Galeri portofolio/proyek",
  "Upload katalog produk (hingga 20 produk/layanan)",
  "Struktur website siap SEO",
  "Setup sistem blog",
  "Integrasi Google Analytics",
  "Form penangkap prospek",
  "Integrasi WhatsApp CTA",
  "Optimasi Google Business Profile",
  "Copywriting bisnis berbantuan AI",
  "Penyesuaian warna & branding perusahaan",
  "Bantuan desain/penyempurnaan logo dasar",
  "Arsitektur modern loading cepat",
  "Sesi training & serah terima",
  "Selesai dalam 7–10 hari",
];

const pkg2Benefits = [
  "Branding bisnis lebih premium",
  "Lebih terpercaya di mata customer",
  "Siap untuk digital marketing & SEO",
  "Mendukung pertumbuhan bisnis jangka panjang",
  "Tampilan modern & profesional",
];

const pkg2BenefitsEN = [
  "More premium business branding",
  "More trusted in customers' eyes",
  "Ready for digital marketing & SEO",
  "Supports long-term business growth",
  "Modern & professional appearance",
];

const pkg2FitID = ["SME berkembang", "Company profile perusahaan", "Brand profesional", "Distributor & supplier", "Manufacturing", "Property & contractor", "Klinik & layanan profesional"];
const pkg2FitEN = ["Growing SMEs", "Company profiles", "Professional brands", "Distributors & suppliers", "Manufacturing", "Property & contractors", "Clinics & professional services"];

const addons = [
  { id: "AI Chatbot Integration", en: "AI Chatbot Integration", price: "+Rp2–5 Juta" },
  { id: "Bahasa Tambahan", en: "Additional Language", price: "+Rp1–2 Juta" },
  { id: "Konten SEO Bulanan", en: "Monthly SEO Content", price: "+Rp1–3 Juta / bulan" },
  { id: "Pemeliharaan Website", en: "Website Maintenance", price: "+Rp500 Ribu–2 Juta / bulan" },
  { id: "Upload Produk Tambahan", en: "Additional Product Upload", price: "+Rp50–100 Ribu / produk" },
  { id: "Otomasi WhatsApp AI", en: "AI WhatsApp Automation", price: "+Rp3–10 Juta" },
];

const whyUs = [
  { id: "Workflow berbasis AI", en: "AI-powered workflow" },
  { id: "Proses pengiriman cepat", en: "Fast delivery process" },
  { id: "Desain modern premium", en: "Premium modern design" },
  { id: "Pendekatan mobile-first", en: "Mobile-first approach" },
  { id: "Struktur siap SEO", en: "SEO-ready structure" },
  { id: "Konversi berbasis WhatsApp", en: "WhatsApp-focused conversion" },
  { id: "Pendekatan branding personal", en: "Personalized branding approach" },
  { id: "Strategi berorientasi bisnis", en: "Business-oriented strategy" },
];

export default function ServiceSection() {
  const { lang } = useLanguage();
  const { siteConfig } = useContent();
  const id = lang === "id";

  const waLink = `https://wa.me/${siteConfig.whatsapp}?text=Halo%20RahasiaDagang%2C%20saya%20ingin%20konsultasi%20website%20bisnis.`;

  return (
    <section id="solusi" className="relative py-24 lg:py-32 bg-[#0a1220] overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundImage: "url('/toko-jahit-pakaian-adat.png')", backgroundSize: "cover", backgroundPosition: "center right", opacity: 0.07 }} />
      <div className="absolute inset-0 bg-[#0a1220]/90" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-[#D4AF37] text-[12px] font-semibold tracking-[0.2em] uppercase mb-4">
            {id ? "Layanan Kami" : "Our Services"}
          </span>
          <h2 className="text-[2.25rem] lg:text-[2.8rem] font-extrabold text-white tracking-tight mb-4">
            Website AI Services
          </h2>
          <p className="text-[#B0C4D4] text-[17px] leading-[1.8] max-w-2xl mx-auto">
            {id
              ? "Website Modern Berbasis AI untuk UMKM & SME Indonesia — Kami membantu bisnis tampil lebih profesional, terpercaya, dan siap bersaing di era digital & AI."
              : "Modern AI-Based Website for Indonesian SMEs — We help businesses appear more professional, trustworthy, and ready to compete in the digital & AI era."}
          </p>
        </motion.div>

        {/* Packages */}
        <div className="grid lg:grid-cols-2 gap-6 mb-14">

          {/* Package 1 */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur-sm overflow-hidden hover:border-[#D4AF37]/30 transition-all duration-300">
            {/* Image */}
            <div className="p-5 pb-0">
              <PackageImage src="/service-starter.png" alt={id ? "UMKM Starter Website" : "UMKM Starter Website"} />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-[#D4AF37] text-[11px] font-bold tracking-[0.15em] uppercase mb-1">
                    {id ? "Paket 1" : "Package 1"}
                  </p>
                  <h3 className="text-white font-extrabold text-[1.4rem] leading-tight">UMKM Starter Website</h3>
                </div>
                <div className="text-right">
                  <p className="text-[#94A3B8] text-[11px]">{id ? "Mulai dari" : "Starting from"}</p>
                  <p className="text-[#F5C542] font-extrabold text-[1.4rem]">Rp3 Juta</p>
                </div>
              </div>

              {/* Cocok untuk */}
              <div className="mb-5">
                <p className="text-[#D4AF37] text-[11px] font-semibold uppercase tracking-wider mb-2">{id ? "Cocok untuk:" : "Best for:"}</p>
                <div className="flex flex-wrap gap-1.5">
                  {(id ? pkg1FitID : pkg1FitEN).map((f) => (
                    <span key={f} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#B0C4D4] text-[11px]">{f}</span>
                  ))}
                </div>
              </div>

              {/* Includes */}
              <div className="mb-5">
                <p className="text-[#D4AF37] text-[11px] font-semibold uppercase tracking-wider mb-3">Include:</p>
                <ul className="space-y-1.5">
                  {(id ? pkg1IncludesID : pkg1Includes).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[#B0C4D4] text-[13px]">
                      <Check size={13} className="text-[#D4AF37] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <p className="text-[#D4AF37] text-[11px] font-semibold uppercase tracking-wider mb-3">Benefit:</p>
                <ul className="space-y-1.5">
                  {(id ? pkg1Benefits : pkg1BenefitsEN).map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[#B0C4D4] text-[13px]">
                      <Check size={13} className="text-[#F5C542] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <a href={waLink} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full h-12 rounded-full bg-gradient-to-r from-[#C9A227] to-[#F5C542] text-[#060e1b] font-bold text-[14px] hover:shadow-xl hover:shadow-[#D4AF37]/20 hover:scale-[1.01] transition-all">
                {id ? "Konsultasi Gratis" : "Free Consultation"}
                <ArrowRight size={15} strokeWidth={2.5} />
              </a>
            </div>
          </motion.div>

          {/* Package 2 */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }}
            className="rounded-2xl border border-[#D4AF37]/40 bg-slate-950/80 backdrop-blur-sm overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.12)] relative">
            {/* Most Popular badge */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#C9A227] to-[#F5C542] text-[#060e1b] text-[10px] font-black tracking-wider uppercase">
              <Star size={10} fill="currentColor" />
              {id ? "PALING POPULER" : "MOST POPULAR"}
            </div>
            {/* Image */}
            <div className="p-5 pb-0">
              <PackageImage src="/service-pro.png" alt="SME Professional AI Website" />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-[#D4AF37] text-[11px] font-bold tracking-[0.15em] uppercase mb-1">
                    {id ? "Paket 2" : "Package 2"}
                  </p>
                  <h3 className="text-white font-extrabold text-[1.4rem] leading-tight">SME Professional AI Website</h3>
                </div>
                <div className="text-right">
                  <p className="text-[#94A3B8] text-[11px]">{id ? "Mulai dari" : "Starting from"}</p>
                  <p className="text-[#F5C542] font-extrabold text-[1.4rem]">Rp10 Juta</p>
                </div>
              </div>

              {/* Cocok untuk */}
              <div className="mb-5">
                <p className="text-[#D4AF37] text-[11px] font-semibold uppercase tracking-wider mb-2">{id ? "Cocok untuk:" : "Best for:"}</p>
                <div className="flex flex-wrap gap-1.5">
                  {(id ? pkg2FitID : pkg2FitEN).map((f) => (
                    <span key={f} className="px-2.5 py-1 rounded-full bg-[#D4AF37]/8 border border-[#D4AF37]/20 text-[#D4AF37] text-[11px]">{f}</span>
                  ))}
                </div>
              </div>

              {/* Includes */}
              <div className="mb-5">
                <p className="text-[#D4AF37] text-[11px] font-semibold uppercase tracking-wider mb-3">Include:</p>
                <ul className="space-y-1.5">
                  {(id ? pkg2IncludesID : pkg2Includes).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[#B0C4D4] text-[13px]">
                      <Check size={13} className="text-[#D4AF37] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <p className="text-[#D4AF37] text-[11px] font-semibold uppercase tracking-wider mb-3">Benefit:</p>
                <ul className="space-y-1.5">
                  {(id ? pkg2Benefits : pkg2BenefitsEN).map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[#B0C4D4] text-[13px]">
                      <Check size={13} className="text-[#F5C542] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <a href={waLink} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full h-12 rounded-full bg-gradient-to-r from-[#C9A227] to-[#F5C542] text-[#060e1b] font-bold text-[14px] hover:shadow-xl hover:shadow-[#D4AF37]/20 hover:scale-[1.01] transition-all">
                {id ? "Konsultasi Gratis" : "Free Consultation"}
                <ArrowRight size={15} strokeWidth={2.5} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Add-ons */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
          <h3 className="text-white font-extrabold text-[1.3rem] mb-6 text-center">
            {id ? "Optional Add-Ons" : "Optional Add-Ons"}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {addons.map((a) => (
              <div key={a.id} className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-slate-950/60 hover:border-[#D4AF37]/30 transition-all">
                <span className="text-[#B0C4D4] text-[14px]">{id ? a.id : a.en}</span>
                <span className="text-[#F5C542] font-bold text-[13px] text-right ml-3 flex-shrink-0">{a.price}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why Rahasia Dagang */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
          <h3 className="text-white font-extrabold text-[1.3rem] mb-6 text-center">
            {id ? "Kenapa Rahasia Dagang?" : "Why Rahasia Dagang?"}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {whyUs.map((w) => (
              <div key={w.id} className="flex items-center gap-2.5 p-4 rounded-xl border border-white/10 bg-slate-950/60">
                <Check size={14} className="text-[#D4AF37] flex-shrink-0" strokeWidth={2.5} />
                <span className="text-[#B0C4D4] text-[13px]">{id ? w.id : w.en}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center p-10 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04]">
          <p className="text-[#D4AF37] text-[12px] font-semibold tracking-[0.2em] uppercase mb-3">
            {id ? "Konsultasi Gratis" : "Free Consultation"}
          </p>
          <h3 className="text-white font-extrabold text-[1.5rem] mb-3">
            {id
              ? "Diskusikan Kebutuhan Website Bisnis Anda"
              : "Discuss Your Business Website Needs"}
          </h3>
          <p className="text-[#94A3B8] text-[15px] mb-8 max-w-xl mx-auto">
            {id
              ? "Kami membantu UMKM & SME Indonesia membangun website modern berbasis AI untuk meningkatkan kepercayaan dan penjualan bisnis."
              : "We help Indonesian SMEs build modern AI-based websites to increase business trust and sales."}
          </p>
          <a href={waLink} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-[52px] px-8 rounded-full bg-gradient-to-r from-[#C9A227] to-[#F5C542] text-[#060e1b] font-bold text-[15px] hover:shadow-xl hover:shadow-[#D4AF37]/25 hover:scale-[1.02] transition-all">
            {id ? "Konsultasi via WhatsApp" : "WhatsApp Consultation"}
            <ArrowRight size={15} strokeWidth={2.5} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
