import Link from 'next/link';
import { cars } from '@/data/cars';
import { Users, Wind } from 'lucide-react';

export default function CarTypesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B4D3E] mb-4">
            Our Fleet
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our diverse range of vehicles
          </p>
        </div>

        {/* Cars Grid - Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 pb-4 md:pb-0 snap-x snap-mandatory">
          {cars.map((car) => (
            <Link
              key={car.id}
              href="/cars"
              className="flex-shrink-0 w-full sm:w-72 md:w-auto snap-center rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white hover:translate-y-[-4px]"
            >
              <div className="h-40 overflow-hidden bg-gray-200">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-4">
                {/* Car Name */}
                <h3 className="font-bold text-lg text-gray-900 mb-3">
                  {car.name}
                </h3>

                {/* Badges */}
                <div className="flex items-center gap-3 mb-3 text-sm">
                  <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded text-blue-700">
                    <Users size={14} />
                    <span>{car.seats} Seats</span>
                  </div>
                  <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded text-green-700">
                    <Wind size={14} />
                    <span>AC</span>
                  </div>
                </div>

                {/* Price */}
                <p className="text-[#1B4D3E] font-semibold">
                  Starting Rs {car.pricePerKm}/km
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
