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
    <section className="bg-white border-y border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {signals.map((signal, index) => {
            const Icon = signal.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#F59E0B]/10 flex items-center justify-center mb-3">
                  <Icon size={22} className="text-[#F59E0B]" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-[#1B4D3E] mt-3">
                  {signal.value}
                </div>
                <p className="text-sm text-gray-500 mt-1">
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
