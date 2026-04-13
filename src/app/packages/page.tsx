'use client';

import { useState, useMemo } from 'react';
import { packages } from '@/data';
import { PackageCard } from '@/components/packages/PackageCard';
import { packageCategories } from '@/data/categories';

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
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Hero Banner */}
      <section className="bg-[#1B4D3E] text-white py-12 md:py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Tour Packages</h1>
          <p className="text-white/70 mt-2">Explore curated holiday packages across Himachal Pradesh</p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="sticky top-16 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-4 py-3">
          <div className="flex gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-[#1B4D3E] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {packageCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-[#1B4D3E] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <section className="max-w-[1200px] mx-auto px-4 py-8">
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map((pkg) => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">No packages found in this category</p>
          </div>
        )}
      </section>
    </div>
  );
}
