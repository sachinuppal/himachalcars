"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
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
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-6 py-4">
        {/* Mobile: Logo */}
        <div className="flex-1 md:flex-none">
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold text-[#1B4D3E]"
          >
            Himachal Cars
          </Link>
        </div>

        {/* Desktop: Nav Links */}
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-[#1B4D3E] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop: Book Now Button */}
        <div className="hidden md:block">
          <Link
            href="#booking"
            className="bg-[#F59E0B] hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile: Icons */}
        <div className="flex items-center gap-4 md:hidden">
          <a
            href={`tel:+91${PHONE}`}
            className="text-[#1B4D3E] hover:text-[#2D7A5F] transition-colors"
            aria-label="Call us"
          >
            <Phone size={24} />
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in booking a cab`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1B4D3E] hover:text-[#2D7A5F] transition-colors"
            aria-label="WhatsApp us"
          >
            <MessageCircle size={24} />
          </a>
        </div>
      </div>
    </header>
  );
}
