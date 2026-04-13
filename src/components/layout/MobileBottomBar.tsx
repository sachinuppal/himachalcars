"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { PHONE, WHATSAPP_NUMBER } from "@/lib/constants";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden z-50 bg-white border-t border-gray-200 safe-area-inset-bottom">
      <div className="flex items-center justify-between h-20 px-2 gap-2 pb-safe">
        {/* Call Now */}
        <a
          href={`tel:+91${PHONE}`}
          className="flex-1 bg-[#1B4D3E] hover:bg-[#2D7A5F] text-white rounded-lg py-3 px-3 flex items-center justify-center gap-2 font-medium text-sm transition-colors"
        >
          <Phone size={18} />
          <span className="hidden xs:inline">Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in booking a cab`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#1B4D3E] hover:bg-[#2D7A5F] text-white rounded-lg py-3 px-3 flex items-center justify-center gap-2 font-medium text-sm transition-colors"
        >
          <MessageCircle size={18} />
          <span className="hidden xs:inline">WhatsApp</span>
        </a>

        {/* Book Now */}
        <a
          href="#booking"
          className="flex-1 bg-[#F59E0B] hover:bg-amber-600 text-white rounded-lg py-3 px-3 flex items-center justify-center gap-2 font-medium text-sm transition-colors"
        >
          <span>Book Now</span>
        </a>
      </div>
    </div>
  );
}
