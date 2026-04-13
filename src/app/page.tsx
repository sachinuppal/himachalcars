import HeroSection from '@/components/home/HeroSection';
import TrustSignals from '@/components/home/TrustSignals';
import FeaturedPackages from '@/components/home/FeaturedPackages';
import PopularRoutes from '@/components/home/PopularRoutes';
import CarTypesSection from '@/components/home/CarTypesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

export default function Home() {
  return (
    <main>
      {/* Hero Section with Booking Widget */}
      <HeroSection />

      {/* Trust Signals */}
      <TrustSignals />

      {/* Featured Packages */}
      <section className="py-16">
        <FeaturedPackages />
      </section>

      {/* Popular Routes */}
      <section className="py-16">
        <PopularRoutes />
      </section>

      {/* Car Types Section */}
      <section className="py-16">
        <CarTypesSection />
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <TestimonialsSection />
      </section>
    </main>
  );
}
