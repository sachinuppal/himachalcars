import Link from 'next/link';
import { routes } from '@/data/routes';
import { MapPin, Clock } from 'lucide-react';

export default function PopularRoutes() {
  const popularRoutes = routes.slice(0, 8);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B4D3E] mb-4">
            Popular Routes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most traveled routes
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularRoutes.map((route) => (
            <Link
              key={route.slug}
              href={`/routes/${route.slug}`}
              className="group rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-[#1B4D3E]/5 to-[#F59E0B]/5 hover:from-[#1B4D3E]/10 hover:to-[#F59E0B]/10"
            >
              <div className="h-32 overflow-hidden bg-gray-300">
                <img
                  src={route.image}
                  alt={`${route.fromCity} to ${route.toCity}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-4">
                {/* Route Name */}
                <h3 className="font-bold text-gray-900 mb-3 text-center">
                  {route.fromCity}
                  <span className="block text-[#F59E0B] text-lg">↓</span>
                  {route.toCity}
                </h3>

                {/* Details */}
                <div className="space-y-2 mb-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-[#1B4D3E]" />
                    <span>{route.distanceKm} km</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-[#1B4D3E]" />
                    <span>~{route.durationHours.toFixed(1)} hrs</span>
                  </div>
                </div>

                {/* CTA */}
                <p className="text-[#F59E0B] font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  Book Now →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
