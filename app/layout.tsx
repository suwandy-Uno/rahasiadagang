import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "RahasiaDagang — Teknologi Praktis untuk Bisnis yang Mau Bertumbuh",
  description:
    "Belajar AI, otomasi, website, dan tools digital secara praktis untuk membantu UMKM dan pemilik bisnis Indonesia bertumbuh.",
  keywords: [
    "UMKM",
    "bisnis Indonesia",
    "AI untuk bisnis",
    "otomasi WhatsApp",
    "training digital",
    "teknologi bisnis",
    "RahasiaDagang",
  ],
  openGraph: {
    title: "RahasiaDagang — Teknologi Praktis untuk Bisnis yang Mau Bertumbuh",
    description:
      "Belajar AI, otomasi, website, dan tools digital secara praktis untuk membantu UMKM dan pemilik bisnis Indonesia bertumbuh.",
    url: "https://rahasia-dagang.com",
    siteName: "RahasiaDagang",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RahasiaDagang — Teknologi Praktis untuk Bisnis yang Mau Bertumbuh",
    description:
      "Belajar AI, otomasi, website, dan tools digital secara praktis untuk membantu UMKM dan pemilik bisnis Indonesia bertumbuh.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`scroll-smooth ${jakarta.variable}`}>
      <body className={`${jakarta.className} bg-[#081120] text-white antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
