const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Rahasia Dagang",
  url: "https://rahasia-dagang.com",
  logo: "https://rahasia-dagang.com/logo.png",
  sameAs: [
    "https://www.youtube.com/@rahasiadagang",
    "https://www.instagram.com/rahasiadagang",
    "https://www.tiktok.com/@rahasiadagang",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+628155081578",
    contactType: "customer service",
    contactOption: "WhatsApp",
    availableLanguage: ["Indonesian", "id"],
    areaServed: "ID",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Rahasia Dagang",
  url: "https://rahasia-dagang.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://rahasia-dagang.com/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Rahasia Dagang",
  description:
    "Belajar AI untuk UMKM Indonesia. Website AI, chatbot AI, WhatsApp automation, dan strategi digital untuk meningkatkan penjualan bisnis Anda.",
  url: "https://rahasia-dagang.com",
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
  knowsLanguage: ["id", "en"],
};

const productSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "WA JUARA - Sistem Jualan WhatsApp untuk UMKM",
    description:
      "Balas chat lebih cepat, follow-up pelanggan, catat order, dan tingkatkan repeat order dengan sistem WA yang rapi.",
    brand: { "@type": "Brand", name: "Rahasia Dagang" },
    offers: {
      "@type": "Offer",
      price: "200000",
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
      url: "https://lynk.id/uno-digitek/ygw5nn21kq1d",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "NAIKIN JUALAN UMKM PAKAI AI - Buku 1: Strategi, Riset Pasar & Ide Inovasi",
    description:
      "Dari HP, tanpa ribet — langsung bisa dipakai hari ini. Strategi jualan, riset pasar, dan ide konten pakai AI.",
    brand: { "@type": "Brand", name: "Rahasia Dagang" },
    offers: {
      "@type": "Offer",
      price: "150000",
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
      url: "https://lynk.id/uno-digitek/44qvn4lmo8q4",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "NAIKIN JUALAN UMKM PAKAI AI - Buku 2: Sistem SOP & Ekspansi Tanpa Ribet",
    description:
      "Bukan belajar AI — ini SISTEM yang bikin bisnis kamu bisa jalan sendiri. SOP, ekspansi digital, dan scale up.",
    brand: { "@type": "Brand", name: "Rahasia Dagang" },
    offers: {
      "@type": "Offer",
      price: "125000",
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
      url: "https://lynk.id/uno-digitek/qqpkwxz1q263",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "50 TEMPLATE JUALAN UMKM - Dari Chat Masuk Jadi Closing",
    description:
      "Tinggal copy → paste → kirim. 50 template untuk chat, broadcast, caption, follow-up, dan promo siap pakai.",
    brand: { "@type": "Brand", name: "Rahasia Dagang" },
    offers: {
      "@type": "Offer",
      price: "200000",
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
    },
  },
];

export default function Schema() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {productSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
