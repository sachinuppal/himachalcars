"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Mountain } from "lucide-react";
import { WHATSAPP_NUMBER, PHONE } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#packages", label: "Packages" },
  { href: "#fleet", label: "Our Fleet" },
  { href: "#routes", label: "Routes" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full h-16 bg-white flex items-center transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 w-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-[#1B4D3E] flex-shrink-0"
        >
          <Mountain size={24} strokeWidth={2.5} />
          <span>Himachal Cars</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#6B7280] hover:text-[#1B4D3E] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop: Book Now Button */}
        <div className="hidden md:block flex-shrink-0">
          <Link
            href="#booking"
            className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile: Contact Icons */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={`tel:+91${PHONE}`}
            className="rounded-full bg-[#1B4D3E]/10 p-2 text-[#1B4D3E] hover:bg-[#1B4D3E]/20 transition-colors duration-200"
            aria-label="Call us"
          >
            <Phone size={20} />
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in booking a cab`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-500/10 p-2 text-green-600 hover:bg-green-500/20 transition-colors duration-200"
            aria-label="WhatsApp us"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}
