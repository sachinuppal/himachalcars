'use client';

import Link from 'next/link';
import { cars } from '@/data/cars';

export default function CarTypesSection() {
  return (
    <section className="section-padding bg-[#FAFAF8]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1B4D3E]">
          Our Fleet
        </h2>
        <p className="text-gray-500 text-center mt-2">
          Choose from our diverse range of vehicles
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
          {cars.map((car) => (
            <Link
              key={car.id}
              href="/cars"
              className="group"
            >
              <div className="bg-white rounded-xl border border-gray-100 p-3 text-center hover:shadow-md hover:border-[#1B4D3E]/20 transition group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-sm text-[#111827] mt-3">
                  {car.name}
                </h3>
                <div className="flex items-center justify-center gap-2 mt-1.5">
                  <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                    {car.seats} Seats
                  </span>
                  <span className="text-[10px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                    AC
                  </span>
                </div>
                <p className="text-sm font-bold text-[#F59E0B] mt-2">
                  Rs {car.pricePerKm}/km
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
