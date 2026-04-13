"use client";

import Link from "next/link";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { PHONE, EMAIL, WHATSAPP_NUMBER, ADDRESS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B4D3E] text-white">
      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Logo & Description */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Himachal Cars</h3>
            <p className="text-white/70 text-sm mb-4 line-clamp-2">
              Reliable cab booking and tour packages across Himachal Pradesh.
            </p>
            <div className="flex items-start gap-2 text-white/60 text-sm">
              <MapPin size={18} className="flex-shrink-0 mt-0.5" />
              <span>{ADDRESS}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#packages"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  href="#fleet"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link
                  href="#routes"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  Routes
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  Outstation Cabs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  Airport Transfer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  Hourly Rental
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  Tour Packages
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0" />
                <a
                  href={`tel:+91${PHONE}`}
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  +91 {PHONE}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={18} className="flex-shrink-0" />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            {currentYear} Himachal Cars. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <Link
              href="#"
              className="hover:text-white/70 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link
              href="#"
              className="hover:text-white/70 transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
