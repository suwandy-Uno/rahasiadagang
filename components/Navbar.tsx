"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waLink = `https://wa.me/${siteConfig.whatsapp}?text=Halo%20RahasiaDagang%2C%20saya%20ingin%20konsultasi%20gratis.`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#060e1b]/95 backdrop-blur-xl border-b border-[#D4AF37]/15 shadow-xl shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between h-[68px]">
        {/* Logo */}
        <a href="#beranda" className="flex items-center gap-3 flex-shrink-0 group">
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#C9A227] flex items-center justify-center font-extrabold text-[#060e1b] text-[17px] leading-none shadow-lg shadow-[#D4AF37]/20">
            R
            <span className="absolute inset-0 rounded-xl ring-1 ring-[#F5C542]/40" />
          </div>
          <div className="leading-[1.15]">
            <div className="text-[#F5C542] font-bold text-[11px] tracking-[0.2em] uppercase">Rahasia</div>
            <div className="text-white/90 font-bold text-[11px] tracking-[0.2em] uppercase">Dagang</div>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3.5 py-2 text-[14px] font-medium text-[#B0C4D4] hover:text-white transition-colors rounded-lg hover:bg-white/[0.05]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C9A227] to-[#F5C542] text-[#060e1b] font-semibold text-[14px] hover:shadow-lg hover:shadow-[#D4AF37]/25 hover:scale-[1.02] transition-all"
        >
          <MessageCircle size={14} strokeWidth={2.5} />
          Konsultasi Gratis
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-[#B0C4D4] hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#060e1b]/98 backdrop-blur-xl border-t border-white/5"
          >
            <ul className="flex flex-col px-5 pt-3 pb-5 gap-0.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-3 text-[#B0C4D4] hover:text-white hover:bg-white/[0.05] rounded-lg text-[15px] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-3 border-t border-white/5 mt-2">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-gradient-to-r from-[#C9A227] to-[#F5C542] text-[#060e1b] font-semibold text-[14px]"
                >
                  <MessageCircle size={15} strokeWidth={2.5} />
                  Konsultasi Gratis
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
