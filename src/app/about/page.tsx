import { Metadata } from 'next';
import Link from 'next/link';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Himachal Cars | Trusted Cab Service in Shimla',
  description:
    'Learn about Himachal Cars - a family-run cab service in Shimla with 10+ years of experience, 50+ vehicles, and expert local drivers.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1B4D3E] to-[#0f2c23] py-12 px-4 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Himachal Cars</h1>
          <p className="text-lg text-gray-200">
            Your trusted partner for travel across Himachal Pradesh
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Our Story</h2>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              Founded in 2012, Himachal Cars began as a vision to provide reliable, comfortable,
              and professional transportation services in the scenic hills of Himachal Pradesh. What
              started as a small family operation with just a handful of vehicles has grown into a
              trusted name in the region, serving thousands of travelers and tourists every year.
            </p>

            <p>
              Based in Shimla, the heart of Himachal Pradesh, we have spent over a decade perfecting
              our service and building deep relationships with the local community. Our team of
              experienced drivers knows these mountain roads like the back of their hands, ensuring
              safe, smooth, and memorable journeys for every passenger.
            </p>

            <p>
              Today, Himachal Cars operates a fleet of more than 50 well-maintained vehicles,
              ranging from comfortable sedans to spacious SUVs and premium Innova Crysta models.
              Whether you're planning a quick airport transfer, a romantic honeymoon getaway, an
              adventurous family trip, or a spiritual pilgrimage, we have the right vehicle and
              expertise to make your journey unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B4D3E] mb-8 text-center">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Local Expertise */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#F59E0B] rounded-lg flex-shrink-0">
                  <Award size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B4D3E] mb-2">
                    Local Expertise
                  </h3>
                  <p className="text-gray-600">
                    With 10+ years of experience, we know every road, scenic spot, and hidden gem
                    in Himachal Pradesh. Our drivers are locals who understand the terrain and
                    culture deeply.
                  </p>
                </div>
              </div>
            </div>

            {/* 24/7 Support */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#F59E0B] rounded-lg flex-shrink-0">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B4D3E] mb-2">
                    24/7 Support
                  </h3>
                  <p className="text-gray-600">
                    Our customer support team is available around the clock via phone, WhatsApp, and
                    email to assist with bookings, queries, and emergency support.
                  </p>
                </div>
              </div>
            </div>

            {/* Transparent Pricing */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#F59E0B] rounded-lg flex-shrink-0">
                  <CheckCircle size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B4D3E] mb-2">
                    Transparent Pricing
                  </h3>
                  <p className="text-gray-600">
                    No hidden charges, no surprises. Our pricing is clear, competitive, and
                    straightforward. You know exactly what you're paying for.
                  </p>
                </div>
              </div>
            </div>

            {/* Well-Maintained Fleet */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#F59E0B] rounded-lg flex-shrink-0">
                  <Users size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B4D3E] mb-2">
                    Well-Maintained Fleet
                  </h3>
                  <p className="text-gray-600">
                    Every vehicle in our fleet undergoes regular maintenance and safety inspections.
                    We invest in quality to ensure your comfort and safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Our Leadership</h2>
          <p className="text-gray-700 mb-6 text-lg">
            Himachal Cars is proudly family-run, with deep roots in the local community. Our founders
            and team members share a common passion for delivering exceptional service and creating
            memorable travel experiences. We believe in personalized attention, ethical business
            practices, and treating every customer like family.
          </p>
          <p className="text-gray-700 text-lg">
            From our drivers who navigate these mountain roads with expertise and care, to our
            booking team that works tirelessly to accommodate your travel needs, every team member
            is committed to making your journey with us special.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-[#1B4D3E] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Himachal Pradesh?</h2>
          <p className="text-lg mb-8 text-gray-200">
            Let us be your trusted travel companion on your next adventure
          </p>
          <Link
            href="/#booking"
            className="inline-block bg-[#F59E0B] hover:bg-[#d97706] text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
          >
            Book a Cab Now
          </Link>
        </div>
      </section>
    </div>
  );
}
