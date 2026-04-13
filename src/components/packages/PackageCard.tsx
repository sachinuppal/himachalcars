'use client';

import Link from 'next/link';
import { Package } from '@/data/types';

interface PackageCardProps {
  package: Package;
}

export function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <Link href={`/packages/${pkg.slug}`}>
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
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#1B4D3E] text-xs font-medium px-2.5 py-1 rounded-full capitalize">
            {pkg.category.replace('-', ' ')}
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
          <button className="block w-full text-center bg-[#1B4D3E]/5 hover:bg-[#1B4D3E]/10 text-[#1B4D3E] text-sm font-medium py-2.5 rounded-lg mt-4 transition">
            Explore Package
          </button>
        </div>
      </div>
    </Link>
  );
}
