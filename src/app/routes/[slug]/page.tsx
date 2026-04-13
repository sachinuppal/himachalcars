import { Metadata } from 'next';
import Link from 'next/link';
import { routes } from '@/data/routes';
import { cars } from '@/data/cars';
import { MapPin, Clock, CheckCircle } from 'lucide-react';

interface RoutePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return routes.map((route) => ({
    slug: route.slug,
  }));
}

export function generateMetadata({ params }: RoutePageProps): Metadata {
  const route = routes.find((r) => r.slug === params.slug);

  if (!route) {
    return {
      title: 'Route Not Found | Himachal Cars',
      description: 'The route you are looking for does not exist.',
    };
  }

  return {
    title: `${route.fromCity} to ${route.toCity} | Himachal Cars`,
    description: route.metaDescription,
  };
}

export default function RoutePage({ params }: RoutePageProps) {
  const route = routes.find((r) => r.slug === params.slug);

  if (!route) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-gray-500">Route not found</p>
      </div>
    );
  }

  const relatedRoutes = routes
    .filter((r) => r.slug !== route.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Hero Banner */}
      <section className="bg-[#1B4D3E] text-white py-12 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            {route.fromCity} to {route.toCity}
          </h1>
          <p className="text-white/70 mt-2">{route.distanceKm} km • {route.durationHours} hours</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-[1200px] mx-auto px-4 py-10">
        {/* Badges */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-100">
            <MapPin size={20} className="text-[#1B4D3E]" />
            <span className="font-semibold text-gray-700">{route.distanceKm} km</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-100">
            <Clock size={20} className="text-[#1B4D3E]" />
            <span className="font-semibold text-gray-700">{route.durationHours} hours</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">{route.description}</p>

        {/* Highlights */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#1B4D3E] mb-4">Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {route.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-[#F59E0B] mt-1 flex-shrink-0" />
                <span className="text-gray-700">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Table */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#1B4D3E] mb-4">Pricing Estimates</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1B4D3E] text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold">
                    Car Type
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold">
                    Per Km Rate
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold">
                    Estimated Cost
                  </th>
                </tr>
              </thead>
              <tbody>
                {cars.map((car) => {
                  const estimatedCost = car.pricePerKm * route.distanceKm;
                  return (
                    <tr
                      key={car.id}
                      className="hover:bg-gray-50 border-b border-gray-300"
                    >
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-800">
                        {car.name}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Rs {car.pricePerKm}/km
                      </td>
                      <td className="border border-gray-300 px-4 py-3 font-bold text-[#1B4D3E]">
                        Rs {estimatedCost.toLocaleString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            *Prices are estimates based on distance. Final pricing may vary based on traffic conditions and additional factors.
          </p>
        </div>

        {/* CTA */}
        <Link
          href="/#booking"
          className="inline-block bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold py-3 px-8 rounded-xl transition-colors duration-200 mb-10"
        >
          Book This Route
        </Link>
      </section>

      {/* Related Routes */}
      {relatedRoutes.length > 0 && (
        <section className="py-10 px-4">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl font-bold text-[#1B4D3E] mb-8">Other Popular Routes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedRoutes.map((relatedRoute) => (
                <Link
                  key={relatedRoute.slug}
                  href={`/routes/${relatedRoute.slug}`}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={relatedRoute.image}
                      alt={relatedRoute.fromCity}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-800 mb-2">
                      {relatedRoute.fromCity} → {relatedRoute.toCity}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      {relatedRoute.distanceKm} km • {relatedRoute.durationHours}h
                    </p>
                    <button className="w-full bg-[#F59E0B] text-white font-semibold py-2 rounded-lg text-sm hover:bg-[#D97706] transition">
                      View Details
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
