import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Schema from "./schema";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rahasia-dagang.com"),
  title: {
    default: "Rahasia Dagang - AI untuk UMKM Indonesia",
    template: "%s | Rahasia Dagang",
  },
  description:
    "Belajar AI untuk UMKM Indonesia. Website AI, chatbot AI, WhatsApp automation, dan strategi digital untuk meningkatkan penjualan bisnis Anda.",
  keywords: [
    "AI untuk UMKM",
    "WhatsApp automation",
    "chatbot AI",
    "bisnis Indonesia",
    "UMKM digital",
    "AI marketing Indonesia",
    "RahasiaDagang",
    "belajar AI",
    "teknologi UMKM",
  ],
  authors: [{ name: "RahasiaDagang", url: "https://rahasia-dagang.com" }],
  creator: "RahasiaDagang",
  publisher: "RahasiaDagang",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: "https://rahasia-dagang.com" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://rahasia-dagang.com",
    siteName: "Rahasia Dagang",
    title: "Rahasia Dagang - AI untuk UMKM Indonesia",
    description:
      "Belajar AI untuk UMKM Indonesia. Website AI, chatbot AI, WhatsApp automation, dan strategi digital untuk meningkatkan penjualan bisnis Anda.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rahasia Dagang - AI untuk UMKM Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahasia Dagang - AI untuk UMKM Indonesia",
    description:
      "Belajar AI untuk UMKM Indonesia. Website AI, chatbot AI, WhatsApp automation, dan strategi digital untuk meningkatkan penjualan bisnis Anda.",
    images: ["/og-image.png"],
    creator: "@rahasiadagang",
  },
  verification: {},
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`scroll-smooth ${jakarta.variable}`}>
      <head>
        <meta name="theme-color" content="#D4AF37" />
        {/* Preload hero background image for LCP optimization */}
        <link
          rel="preload"
          as="image"
          href="/toko-sembako.png"
          fetchPriority="high"
        />
      </head>
      <body className={`${jakarta.className} bg-[#081120] text-white antialiased`}>
        <Schema />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
