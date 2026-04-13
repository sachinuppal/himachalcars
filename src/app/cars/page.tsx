import { Metadata } from 'next';
import { cars } from '@/data/cars';
import { Users, Luggage, Snowflake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Fleet | Himachal Cars',
  description: 'Browse our fleet of well-maintained vehicles. From budget hatchbacks to premium Innova Crysta. Book your ride today.',
};

export default function CarsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Hero Banner */}
      <section className="bg-[#1B4D3E] text-white py-12 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Our Fleet</h1>
          <p className="text-white/70 mt-2">Choose from our diverse range of well-maintained vehicles</p>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="max-w-[1200px] mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Name */}
                <h3 className="text-xl font-bold text-[#111827]">{car.name}</h3>

                {/* Category Badge */}
                <span className="inline text-xs font-medium bg-[#1B4D3E]/10 text-[#1B4D3E] px-3 py-1 rounded-full mt-2">
                  {car.category}
                </span>

                {/* Description */}
                <p className="text-sm text-gray-500 mt-3">{car.description}</p>

                {/* Specs Row */}
                <div className="flex gap-4 mt-4">
                  <div className="flex items-center gap-1.5 text-sm text-gray-600">
                    <Users size={16} />
                    <span>{car.seats} Seats</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-600">
                    <Luggage size={16} />
                    <span>{car.luggage} Bags</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-600">
                    <Snowflake size={16} />
                    <span>AC</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-gray-400">Outstation</p>
                      <p className="text-lg font-bold text-[#F59E0B]">Rs {car.pricePerKm}/km</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Local</p>
                      <p className="text-lg font-bold text-[#1B4D3E]">Rs {car.pricePerHour}/hr</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="/#booking"
                  className="mt-4 block w-full text-center bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold py-2.5 rounded-xl transition"
                >
                  Book This Car
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
