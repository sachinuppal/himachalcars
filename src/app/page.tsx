import HeroSection from '@/components/home/HeroSection';
import TrustSignals from '@/components/home/TrustSignals';
import FeaturedPackages from '@/components/home/FeaturedPackages';
import PopularRoutes from '@/components/home/PopularRoutes';
import CarTypesSection from '@/components/home/CarTypesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustSignals />
      <FeaturedPackages />
      <PopularRoutes />
      <CarTypesSection />
      <TestimonialsSection />
    </main>
  );
}
