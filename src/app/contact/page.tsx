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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1B4D3E] to-[#0f2c23] py-12 px-4 text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-200">
            Get in touch with our team. We're here to help, 24/7
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info Card */}
            <div>
              <h2 className="text-2xl font-bold text-[#1B4D3E] mb-6">Get in Touch</h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="p-3 bg-[#F59E0B] rounded-lg flex-shrink-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                    <a
                      href={`tel:${PHONE}`}
                      className="text-[#1B4D3E] hover:underline font-semibold"
                    >
                      {PHONE}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="p-3 bg-[#F59E0B] rounded-lg flex-shrink-0">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-[#1B4D3E] hover:underline font-semibold"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div className="p-3 bg-[#F59E0B] rounded-lg flex-shrink-0">
                    <MessageCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Himachal%20Cars`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1B4D3E] hover:underline font-semibold"
                    >
                      {WHATSAPP_NUMBER}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="p-3 bg-[#F59E0B] rounded-lg flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Office Location</h3>
                    <p className="text-gray-700">{ADDRESS}</p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex gap-4">
                  <div className="p-3 bg-[#F59E0B] rounded-lg flex-shrink-0">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Office Hours</h3>
                    <p className="text-gray-700">Mon-Sun: 6:00 AM - 10:00 PM</p>
                    <p className="text-sm text-gray-500 mt-1">
                      24/7 support available for emergencies
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#1B4D3E] mb-6">Send us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1B4D3E] mb-6">Visit Our Office</h2>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.5879834747453!2d77.1746!3d31.7744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39057e0c0c0c0c0d%3A0x0!2sShimla!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
