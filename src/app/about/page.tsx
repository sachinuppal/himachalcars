import { Metadata } from 'next';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Himachal Cars | Trusted Cab Service in Shimla',
  description:
    'Learn about Himachal Cars - a family-run cab service in Shimla with 10+ years of experience, 50+ vehicles, and expert local drivers.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Hero Banner */}
      <section className="bg-[#1B4D3E] text-white py-12 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">About Himachal Cars</h1>
          <p className="text-white/70 mt-2">Your trusted partner for travel across Himachal Pradesh</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-[1200px] mx-auto px-4 py-10">
        <div className="lg:grid lg:grid-cols-5 lg:gap-12">
          {/* Left Column - Text */}
          <div className="lg:col-span-3">
            <h2 className="font-bold text-2xl text-[#1B4D3E] mb-6">Our Story</h2>
            <div className="prose prose-sm space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Himachal Cars was born from a simple vision in 2012: to provide safe, reliable, and comfortable transportation across the stunning mountains of Himachal Pradesh. What started as a small family operation with just five vehicles has blossomed into a trusted name serving thousands of travelers, adventurers, and pilgrims each year. We are rooted in Shimla, the heart of Himachal, where generations of our family have called home.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Over more than a decade, we have mastered every road, every twist, and every turn in these majestic hills. Our team consists of experienced Himachali drivers who know the region intimately, understand the culture deeply, and treat every passenger like family. We invest continuously in maintaining and upgrading our fleet to ensure your journey is always safe and comfortable.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, our fleet of over 50 well-maintained vehicles ranges from economical hatchbacks to luxury Innova Crystas, ready for any adventure. Whether you are seeking romance in the mountains, family memories, spiritual awakening, or thrilling adventures, we have the perfect ride and the expertise to make it unforgettable.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:col-span-2 mt-8 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80"
              alt="Mountain scenery"
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mt-16 py-10">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1B4D3E] mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Local Expertise */}
            <div className="bg-white rounded-xl p-6 text-center border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-[#F59E0B]/10 mx-auto mb-4 flex items-center justify-center">
                <Award size={24} className="text-[#F59E0B]" />
              </div>
              <h3 className="font-semibold text-sm mt-4">Local Expertise</h3>
              <p className="text-xs text-gray-500 mt-2">10+ years serving Himachal with deep local knowledge</p>
            </div>

            {/* 24/7 Support */}
            <div className="bg-white rounded-xl p-6 text-center border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-[#F59E0B]/10 mx-auto mb-4 flex items-center justify-center">
                <Clock size={24} className="text-[#F59E0B]" />
              </div>
              <h3 className="font-semibold text-sm mt-4">24/7 Support</h3>
              <p className="text-xs text-gray-500 mt-2">Always available via phone, WhatsApp, and email</p>
            </div>

            {/* Transparent Pricing */}
            <div className="bg-white rounded-xl p-6 text-center border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-[#F59E0B]/10 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle size={24} className="text-[#F59E0B]" />
              </div>
              <h3 className="font-semibold text-sm mt-4">Transparent Pricing</h3>
              <p className="text-xs text-gray-500 mt-2">No hidden charges, clear and competitive rates</p>
            </div>

            {/* Well-Maintained Fleet */}
            <div className="bg-white rounded-xl p-6 text-center border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-[#F59E0B]/10 mx-auto mb-4 flex items-center justify-center">
                <Users size={24} className="text-[#F59E0B]" />
              </div>
              <h3 className="font-semibold text-sm mt-4">Well-Maintained Fleet</h3>
              <p className="text-xs text-gray-500 mt-2">Regular maintenance and safety inspections</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
