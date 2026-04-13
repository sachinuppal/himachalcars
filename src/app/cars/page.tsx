import { Metadata } from 'next';
import Link from 'next/link';
import { cars } from '@/data/cars';
import { Users, Luggage, Wind } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Fleet | Himachal Cars',
  description: 'Browse our fleet of well-maintained vehicles. From budget hatchbacks to premium Innova Crysta. Book your ride today.',
};

export default function CarsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1B4D3E] to-[#0f2c23] py-12 px-4 text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Fleet</h1>
          <p className="text-lg text-gray-200">
            Choose from our diverse range of well-maintained vehicles for every journey
          </p>
        </div>
      </section>

      {/* Fleet Cards Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {cars.map((car, index) => (
            <div
              key={car.id}
              className={`mb-12 overflow-hidden rounded-lg border border-gray-200 shadow-lg ${
                index % 2 === 0
                  ? 'flex flex-col md:flex-row'
                  : 'flex flex-col md:flex-row-reverse'
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 h-64 md:h-auto">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between bg-gray-50">
                <div>
                  {/* Name and Category */}
                  <div className="mb-4">
                    <h2 className="text-3xl font-bold text-[#1B4D3E] mb-2">
                      {car.name}
                    </h2>
                    <span className="inline-block px-3 py-1 bg-[#F59E0B] text-white text-sm font-semibold rounded-full capitalize">
                      {car.category}
                    </span>
                  </div>

                  {/* Specs Row */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Users size={18} className="text-[#1B4D3E]" />
                      <span className="font-medium">{car.seats} seats</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Luggage size={18} className="text-[#1B4D3E]" />
                      <span className="font-medium">{car.luggage} bags</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Wind size={18} className="text-[#1B4D3E]" />
                      <span className="font-medium">AC</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6">{car.description}</p>

                  {/* Pricing Row */}
                  <div className="flex flex-wrap gap-6 mb-6 text-sm md:text-base">
                    <div>
                      <p className="text-gray-500 text-xs md:text-sm">Outstation</p>
                      <p className="font-bold text-[#1B4D3E] text-lg">
                        Rs {car.pricePerKm}/km
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs md:text-sm">Hourly Rate</p>
                      <p className="font-bold text-[#1B4D3E] text-lg">
                        Rs {car.pricePerHour}/hr
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="/#booking"
                  className="inline-block w-full md:w-auto text-center bg-[#F59E0B] hover:bg-[#d97706] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Book This Car
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
