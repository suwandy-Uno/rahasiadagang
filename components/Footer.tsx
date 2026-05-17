"use client";

import { Mail, Phone, Globe } from "lucide-react";
import Image from "next/image";
import { useContent } from "@/hooks/useContent";

export default function Footer() {
  const { siteConfig, footerColumns, ui } = useContent();
  const year = new Date().getFullYear();

  return (
    <footer id="kontak" className="relative bg-[#040c18] border-t border-white/[0.06]">
      {/* Subtle top accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-16 pb-10">
        {/* Main columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-14">

          {/* Brand */}
          <div>
            {/* Logo */}
            <div className="mb-5">
              <Image src="/logo.png" alt="RahasiaDagang" width={143} height={49} className="h-[39px] w-auto object-contain" />
            </div>

            <p className="text-[#94A3B8] text-[14px] leading-[1.8] mb-7 max-w-[240px]">
              {ui.footer.description}
            </p>

            <div className="space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-[#94A3B8] hover:text-[#D4AF37] text-[14px] transition-colors"
              >
                <Mail size={13} className="text-[#D4AF37]/60 flex-shrink-0" />
                {siteConfig.email}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#94A3B8] hover:text-[#D4AF37] text-[14px] transition-colors"
              >
                <Phone size={13} className="text-[#D4AF37]/60 flex-shrink-0" />
                {siteConfig.whatsappDisplay}
              </a>
              <span className="flex items-center gap-2.5 text-[#94A3B8] text-[13px]">
                <Globe size={13} className="text-[#D4AF37]/60 flex-shrink-0" />
                {siteConfig.domain}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white/80 font-semibold text-[12px] tracking-[0.12em] uppercase mb-5">{ui.footer.navHeading}</h4>
            <ul className="space-y-2.5">
              {footerColumns.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[#94A3B8] hover:text-[#D4AF37] text-[14px] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kategori */}
          <div>
            <h4 className="text-white/80 font-semibold text-[12px] tracking-[0.12em] uppercase mb-5">{ui.footer.categoryHeading}</h4>
            <ul className="space-y-2.5">
              {footerColumns.categories.map((item) => (
                <li key={item.label}>
                  <span className="text-[#94A3B8] text-[14px]">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Produk + Sosial */}
          <div>
            <h4 className="text-white/80 font-semibold text-[12px] tracking-[0.12em] uppercase mb-5">{ui.footer.productHeading}</h4>
            <ul className="space-y-2.5 mb-8">
              {footerColumns.products.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#94A3B8] hover:text-[#D4AF37] text-[14px] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="text-white/80 font-semibold text-[12px] tracking-[0.12em] uppercase mb-5">{ui.footer.socialHeading}</h4>
            <ul className="space-y-2.5">
              {footerColumns.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#94A3B8] hover:text-[#D4AF37] text-[14px] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#64748B] text-[13px]">
            &copy; {year} RahasiaDagang. {ui.footer.copyright}
          </p>
          <div className="flex items-center gap-2 text-[#64748B] text-[12px] tracking-[0.12em] uppercase">
            <span>{ui.footer.tagline1}</span>
            <span className="w-1 h-1 rounded-full bg-[#D4AF37]/40" />
            <span>{ui.footer.tagline2}</span>
            <span className="w-1 h-1 rounded-full bg-[#D4AF37]/40" />
            <span>{ui.footer.tagline3}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
