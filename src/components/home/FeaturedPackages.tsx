import Link from 'next/link';
import { packages } from '@/data/packages';
import { Star } from 'lucide-react';

export default function FeaturedPackages() {
  const featuredPackages = packages.filter((pkg) => pkg.isFeatured).slice(0, 4);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B4D3E] mb-4">
            Popular Tour Packages
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Curated travel experiences across Himachal Pradesh
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredPackages.map((pkg) => (
            <Link
              key={pkg.id}
              href={`/packages/${pkg.slug}`}
              className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={pkg.heroImage}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Duration Badge */}
                <div className="absolute top-3 right-3 bg-[#F59E0B] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {pkg.days}D/{pkg.nights}N
                </div>
              </div>

              <div className="p-4 bg-white">
                {/* Title */}
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                  {pkg.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={
                        i < Math.floor(pkg.rating)
                          ? 'fill-[#F59E0B] text-[#F59E0B]'
                          : 'text-gray-300'
                      }
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">
                    ({pkg.totalBookings})
                  </span>
                </div>

                {/* Cities */}
                <p className="text-sm text-gray-600 mb-3 line-clamp-1">
                  {pkg.citiesCovered.join(', ')}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-bold text-[#1B4D3E]">
                    Rs {pkg.startingPrice.toLocaleString()}
                  </span>
                  <span className="text-xs text-gray-500">
                    /{pkg.priceUnit === 'per_person' ? 'person' : 'package'}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4D3E] text-white rounded-lg hover:bg-[#0F3530] transition-colors duration-200 font-medium"
          >
            View All Packages
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
