"use client";

import Link from "next/link";
import { PHONE, EMAIL, WHATSAPP_NUMBER, ADDRESS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B4D3E] text-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo & Description */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Himachal Cars</h3>
            <p className="text-gray-300 text-sm mb-4">
              Reliable cab booking and tour packages across Himachal Pradesh.
            </p>
            <p className="text-gray-400 text-sm flex items-start gap-2">
              <span className="mt-1">📍</span>
              <span>{ADDRESS}</span>
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#packages"
                  className="hover:text-white transition-colors text-sm"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  href="#fleet"
                  className="hover:text-white transition-colors text-sm"
                >
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link
                  href="#routes"
                  className="hover:text-white transition-colors text-sm"
                >
                  Routes
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-white transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors text-sm"
                >
                  Outstation Cabs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors text-sm"
                >
                  Airport Transfer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors text-sm"
                >
                  Hourly Rental
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors text-sm"
                >
                  Tour Packages
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a
                  href={`tel:+91${PHONE}`}
                  className="hover:text-white transition-colors"
                >
                  +91 {PHONE}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-white transition-colors"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>💬</span>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>{ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} Himachal Cars. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
