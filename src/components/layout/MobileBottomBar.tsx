"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { PHONE, WHATSAPP_NUMBER } from "@/lib/constants";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <div className="flex items-center gap-2 px-3 py-2.5">
        {/* Call Button */}
        <a
          href={`tel:+91${PHONE}`}
          className="flex-1 bg-[#1B4D3E] hover:bg-[#2D7A5F] active:scale-95 text-white rounded-lg py-2.5 flex items-center justify-center gap-1.5 transition-all duration-200"
        >
          <Phone size={16} />
          <span className="text-sm font-medium">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in booking a cab`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] hover:bg-[#20BA5C] active:scale-95 text-white rounded-lg py-2.5 flex items-center justify-center gap-1.5 transition-all duration-200"
        >
          <MessageCircle size={16} />
          <span className="text-sm font-medium">WhatsApp</span>
        </a>

        {/* Book Now Button */}
        <Link
          href="#booking"
          className="flex-1 bg-[#F59E0B] hover:bg-[#D97706] active:scale-95 text-white rounded-lg py-2.5 flex items-center justify-center gap-1.5 transition-all duration-200"
        >
          <span className="text-sm font-semibold">Book Now</span>
        </Link>
      </div>
    </div>
  );
}
