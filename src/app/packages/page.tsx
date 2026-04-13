'use client';

import { useState, useMemo } from 'react';
import { Metadata } from 'next';
import { packages } from '@/data';
import { PackageCard } from '@/components/packages/PackageCard';

const metadata: Metadata = {
  title: 'Tour Packages in Himachal Pradesh | Himachal Cars',
  description:
    'Explore our curated tour packages including honeymoon, family, adventure, spiritual, and group tours in Himachal Pradesh.',
};

const categories = [
  { id: 'all', label: 'All' },
  { id: 'honeymoon', label: 'Honeymoon' },
  { id: 'family', label: 'Family' },
  { id: 'adventure', label: 'Adventure' },
  { id: 'spiritual', label: 'Spiritual' },
  { id: 'group', label: 'Group' },
];

export default function PackagesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredPackages = useMemo(() => {
    if (activeCategory === 'all') {
      return packages.filter((pkg) => pkg.isActive);
    }
    return packages.filter(
      (pkg) => pkg.isActive && pkg.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-teal-700 to-teal-800 text-white py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
              Tour Packages in Himachal Pradesh
            </h1>
            <p className="text-lg text-teal-100 max-w-2xl">
              Discover unforgettable journeys through the mountains. From romantic honeymoons
              to thrilling adventures, we have the perfect package for you.
            </p>
          </div>
        </section>

        {/* Filter Tabs */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto scrollbar-hide gap-2 py-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`whitespace-nowrap px-4 sm:px-6 py-2 rounded-full font-semibold transition-all ${
                    activeCategory === category.id
                      ? 'bg-teal-700 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Packages Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPackages.map((pkg) => (
                <PackageCard key={pkg.id} package={pkg} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600 mb-3">
                No packages found for this category.
              </p>
              <button
                onClick={() => setActiveCategory('all')}
                className="text-teal-700 font-semibold hover:text-teal-800 transition-colors"
              >
                View all packages
              </button>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
