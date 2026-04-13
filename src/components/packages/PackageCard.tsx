'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Package } from '@/data';
import { Star, MapPin } from 'lucide-react';

interface PackageCardProps {
  package: Package;
}

export function PackageCard({ package: pkg }: PackageCardProps) {
  const rating = Math.round(pkg.rating * 10) / 10;
  const durationText = pkg.days === 1 ? '1 Day' : `${pkg.days} Days ${pkg.nights} Nights`;

  return (
    <Link href={`/packages/${pkg.slug}`}>
      <div className="group cursor-pointer h-full flex flex-col rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        {/* Image Container */}
        <div className="relative h-40 sm:h-48 overflow-hidden bg-gray-100">
          <Image
            src={pkg.heroImage}
            alt={pkg.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />

          {/* Duration Badge - Top Left */}
          <div className="absolute top-3 left-3 bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            {durationText}
          </div>

          {/* Category Badge - Top Right */}
          <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full capitalize">
            {pkg.category.replace('-', ' ')}
          </div>
        </div>

        {/* Content Container */}
        <div className="flex-1 p-4 flex flex-col">
          {/* Title */}
          <h3 className="font-semibold text-sm sm:text-base text-gray-900 line-clamp-2 mb-2">
            {pkg.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={
                    i < Math.round(pkg.rating)
                      ? 'fill-amber-400 text-amber-400'
                      : 'text-gray-300'
                  }
                />
              ))}
            </div>
            <span className="text-xs sm:text-sm text-gray-600">
              {rating} ({pkg.totalBookings})
            </span>
          </div>

          {/* Cities Covered */}
          <div className="flex items-start gap-1 mb-3">
            <MapPin size={14} className="text-gray-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-gray-500 line-clamp-1">
              {pkg.citiesCovered.join(', ')}
            </p>
          </div>

          {/* Price */}
          <p className="text-lg sm:text-xl font-bold text-amber-500 mb-3">
            From ₹{pkg.startingPrice.toLocaleString()}
            <span className="text-xs font-normal text-gray-500">
              /{pkg.priceUnit === 'per_person' ? 'person' : 'package'}
            </span>
          </p>

          {/* Button */}
          <button className="mt-auto bg-teal-700 hover:bg-teal-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm">
            Explore Package
          </button>
        </div>
      </div>
    </Link>
  );
}
