import { Clock, Car, Star, MapPin } from 'lucide-react';

const signals = [
  {
    icon: Clock,
    value: '10+',
    label: 'Years Experience',
  },
  {
    icon: Car,
    value: '5000+',
    label: 'Happy Trips',
  },
  {
    icon: Star,
    value: '4.8',
    label: 'Google Rating',
  },
  {
    icon: MapPin,
    value: '50+',
    label: 'Destinations',
  },
];

export default function TrustSignals() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#1B4D3E]/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {signals.map((signal, index) => {
            const Icon = signal.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-[#F59E0B] rounded-full">
                    <Icon size={24} className="text-white" />
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-[#1B4D3E] mb-1">
                  {signal.value}
                </div>
                <p className="text-sm sm:text-base text-gray-700">
                  {signal.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
