'use client';

import Link from 'next/link';
import { packages } from '@/data/packages';
import { ArrowRight } from 'lucide-react';

export default function FeaturedPackages() {
  const featured = packages.filter((p) => p.isFeatured && p.isActive);

  return (
    <section className="section-padding bg-[#FAFAF8]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1B4D3E]">
          Popular Tour Packages
        </h2>
        <p className="text-gray-500 text-center mt-2">
          Curated travel experiences across Himachal Pradesh
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {featured.map((pkg) => (
            <Link
              key={pkg.id}
              href={`/packages/${pkg.slug}`}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition group border border-gray-100 h-full flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={pkg.heroImage}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#F59E0B] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    {pkg.nights}N/{pkg.days}D
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-semibold text-[#111827] line-clamp-2 min-h-[2.75rem] text-[0.95rem]">
                    {pkg.title}
                  </h3>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-[#F59E0B] text-xs">★</span>
                    <span className="text-[#F59E0B] text-xs font-semibold">
                      {pkg.rating}
                    </span>
                    <span className="text-gray-400 text-xs">
                      ({pkg.totalBookings})
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1.5 truncate">
                    {pkg.citiesCovered.join(' · ')}
                  </p>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-bold text-[#F59E0B]">
                        Rs {pkg.startingPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-gray-400">/person</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 text-[#1B4D3E] font-semibold hover:gap-3 transition-all hover:underline"
          >
            View All Packages <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
