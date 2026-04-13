'use client';

import Link from 'next/link';
import { routes } from '@/data/routes';
import { MapPin, Clock } from 'lucide-react';

export default function PopularRoutes() {
  const popularRoutes = routes.slice(0, 8);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1B4D3E]">
          Popular Routes
        </h2>
        <p className="text-gray-500 text-center mt-2">
          Explore our most traveled routes
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-8">
          {popularRoutes.map((route) => (
            <Link
              key={route.slug}
              href={`/routes/${route.slug}`}
              className="group"
            >
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition group cursor-pointer">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={route.image}
                    alt={`${route.fromCity} to ${route.toCity}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-3 md:p-4">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-[#111827]">
                      {route.fromCity}
                    </span>
                    <span className="text-[#F59E0B]">→</span>
                    <span className="font-semibold text-sm text-[#111827]">
                      {route.toCity}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin size={12} />
                      <span>{route.distanceKm} km</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>~{route.durationHours.toFixed(1)} hrs</span>
                    </div>
                  </div>

                  <div className="mt-2.5">
                    <span className="text-[#F59E0B] text-xs font-semibold hover:underline inline-flex items-center gap-1">
                      Book Now →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
