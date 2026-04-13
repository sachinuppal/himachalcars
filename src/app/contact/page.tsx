import { Metadata } from 'next';
import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';
import { PHONE, EMAIL, WHATSAPP_NUMBER, ADDRESS } from '@/lib/constants';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Himachal Cars',
  description:
    'Get in touch with Himachal Cars. Call, email, or use WhatsApp for instant support. Available 24/7.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Hero Banner */}
      <section className="bg-[#1B4D3E] text-white py-12 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
          <p className="text-white/70 mt-2">Get in touch with our team. We're here to help, 24/7</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-[1200px] mx-auto px-4 py-10">
        <div className="lg:grid lg:grid-cols-2 gap-10">
          {/* Contact Info Card */}
          <div className="bg-[#1B4D3E] text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">Phone</h3>
                  <a href={`tel:${PHONE}`} className="hover:text-[#F59E0B] transition text-sm">
                    {PHONE}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">Email</h3>
                  <a href={`mailto:${EMAIL}`} className="hover:text-[#F59E0B] transition text-sm">
                    {EMAIL}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">WhatsApp</h3>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Himachal%20Cars`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F59E0B] transition text-sm"
                  >
                    {WHATSAPP_NUMBER}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">Office Location</h3>
                  <p className="text-sm">{ADDRESS}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">Hours</h3>
                  <p className="text-sm">Mon-Sun: 6:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-[#1B4D3E] mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-[1200px] mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-[#1B4D3E] mb-6">Visit Our Office</h2>
        <div className="rounded-2xl overflow-hidden h-[300px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.5879834747453!2d77.1746!3d31.7744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39057e0c0c0c0c0d%3A0x0!2sShimla!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
