import { fetchNews } from "@/lib/rss";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const revalidate = 86400; // refresh every 24 hours

export const metadata: Metadata = {
  title: "Berita UMKM & Ekonomi Indonesia",
  description:
    "Update berita terkini seputar UMKM, ekonomi, dan bisnis Indonesia. Agregasi dari sumber terpercaya: Kompas, Detik Finance, Kontan, dan Bisnis Indonesia.",
};

function timeAgo(dateStr: string): string {
  const now = Date.now();
  const then = new Date(dateStr).getTime();
  const diff = Math.floor((now - then) / 1000);
  if (diff < 60) return "Baru saja";
  if (diff < 3600) return `${Math.floor(diff / 60)} menit lalu`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} jam lalu`;
  if (diff < 604800) return `${Math.floor(diff / 86400)} hari lalu`;
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

const SOURCE_COLORS: Record<string, string> = {
  Kompas: "bg-red-700",
  "Detik Finance": "bg-red-600",
  Kontan: "bg-orange-500",
  "Bisnis Indonesia": "bg-blue-800",
  "CNBC Indonesia": "bg-blue-900",
};

export default async function BeritaPage() {
  const news = await fetchNews();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#060e1b] pt-24 pb-20">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 mb-12">
          <div className="text-center">
            <span className="inline-block text-[#D4AF37] text-[12px] font-semibold tracking-[0.2em] uppercase mb-4">
              Update Harian
            </span>
            <h1 className="text-[2.2rem] lg:text-[3rem] font-extrabold text-white tracking-tight mb-4">
              Berita UMKM &{" "}
              <span className="text-[#D4AF37]">Ekonomi Indonesia</span>
            </h1>
            <p className="text-[#B0C4D4] text-[16px] max-w-xl mx-auto leading-relaxed">
              Berita terkini dari sumber terpercaya Indonesia — diperbarui
              otomatis setiap hari.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {["Kompas", "Detik Finance", "Kontan", "Bisnis Indonesia", "CNBC Indonesia"].map(
                (src) => (
                  <span
                    key={src}
                    className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold text-white ${
                      SOURCE_COLORS[src] ?? "bg-slate-700"
                    }`}
                  >
                    {src}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mb-12" />
        </div>

        {/* News Grid */}
        {news.length === 0 ? (
          <div className="text-center text-[#B0C4D4] py-20">
            <p className="text-xl mb-2">Sedang memuat berita...</p>
            <p className="text-sm">Coba refresh halaman ini sebentar lagi.</p>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            {/* Featured top article */}
            {news[0] && (
              <a
                href={news[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block mb-8 rounded-2xl overflow-hidden border border-white/10 bg-slate-900/80 hover:border-[#D4AF37]/40 hover:shadow-[0_0_40px_rgba(212,175,55,0.12)] transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row">
                  {news[0].image && (
                    <div className="relative lg:w-[480px] h-56 lg:h-auto flex-shrink-0 overflow-hidden bg-slate-800">
                      <Image
                        src={news[0].image}
                        alt={news[0].title}
                        fill
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 480px"
                        unoptimized
                      />
                    </div>
                  )}
                  <div className="flex flex-col justify-center p-6 lg:p-10 flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white ${
                          SOURCE_COLORS[news[0].source] ?? "bg-slate-700"
                        }`}
                      >
                        {news[0].source}
                      </span>
                      <span className="text-[#D4AF37]/60 text-[11px]">
                        {timeAgo(news[0].pubDate)}
                      </span>
                      <span className="inline-block px-2 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-[9px] font-bold tracking-widest uppercase">
                        Terbaru
                      </span>
                    </div>
                    <h2 className="text-white text-[1.3rem] lg:text-[1.7rem] font-bold leading-snug mb-3 group-hover:text-[#F5C542] transition-colors">
                      {news[0].title}
                    </h2>
                    <p className="text-[#94A3B8] text-[14px] leading-relaxed line-clamp-3">
                      {news[0].description}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-2 text-[#D4AF37] text-[13px] font-semibold">
                      Baca selengkapnya
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            )}

            {/* Grid of remaining articles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {news.slice(1).map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-2xl border border-white/10 bg-slate-900/80 overflow-hidden hover:border-[#D4AF37]/40 hover:shadow-[0_0_28px_rgba(212,175,55,0.10)] transition-all duration-300"
                >
                  {/* Image */}
                  {item.image ? (
                    <div className="relative h-44 overflow-hidden flex-shrink-0 bg-slate-800">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        unoptimized
                      />
                    </div>
                  ) : (
                    <div className="h-2 flex-shrink-0 bg-gradient-to-r from-[#C9A227] to-[#F5C542]" />
                  )}

                  {/* Body */}
                  <div className="flex flex-col flex-1 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-bold text-white ${
                          SOURCE_COLORS[item.source] ?? "bg-slate-700"
                        }`}
                      >
                        {item.source}
                      </span>
                      <span className="text-[#94A3B8] text-[11px]">
                        {timeAgo(item.pubDate)}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-[14px] leading-snug mb-2 group-hover:text-[#F5C542] transition-colors line-clamp-3 flex-1">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-[#94A3B8] text-[12px] leading-relaxed line-clamp-2 mt-1">
                        {item.description}
                      </p>
                    )}
                    <div className="mt-4 flex items-center gap-1 text-[#D4AF37]/70 text-[11px] font-medium">
                      Baca di {item.source}
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Attribution footer */}
            <div className="mt-12 text-center">
              <p className="text-[#4A6080] text-[12px]">
                Artikel dikurasi dari sumber berita Indonesia terpercaya. Hak cipta milik masing-masing penerbit. Diperbarui otomatis setiap 24 jam.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-3">
                {[
                  { name: "Kompas", url: "https://kompas.com" },
                  { name: "Detik Finance", url: "https://finance.detik.com" },
                  { name: "Kontan", url: "https://kontan.co.id" },
                  { name: "Bisnis Indonesia", url: "https://bisnis.com" },
                  { name: "CNBC Indonesia", url: "https://cnbcindonesia.com" },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4AF37]/40 text-[11px] hover:text-[#D4AF37]/80 transition-colors"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
