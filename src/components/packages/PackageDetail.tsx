'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Package, CarType, cars } from '@/data';
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  MapPin,
  UtensilsCrossed,
  Zap,
  Clock,
  ChevronDown,
} from 'lucide-react';
import { EnquiryForm } from './EnquiryForm';

interface PackageDetailProps {
  package: Package;
}

const getTransportIcon = () => <Zap size={18} />;
const getMealsIcon = () => <UtensilsCrossed size={18} />;

export function PackageDetail({ package: pkg }: PackageDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedDayIndex, setExpandedDayIndex] = useState(0);
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  const allImages = [pkg.heroImage, ...pkg.images];
  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  const prevImage = () =>
    setCurrentImageIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1
    );

  const getCarName = (carTypeId: string): string => {
    const car = cars.find((c) => c.id === carTypeId);
    return car?.name || carTypeId;
  };

  const handleEnquireClick = () => {
    const element = document.getElementById('enquiry');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* Hero Image Gallery */}
      <div className="relative w-full aspect-video bg-gray-200 overflow-hidden">
        <Image
          src={allImages[currentImageIndex]}
          alt={`${pkg.title} - Image ${currentImageIndex + 1}`}
          fill
          className="object-cover"
          priority={currentImageIndex === 0}
        />

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-2 rounded-full transition-colors z-10"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-2 rounded-full transition-colors z-10"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {allImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentImageIndex
                  ? 'bg-white w-6'
                  : 'bg-white/50 w-2'
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title & Rating Section */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            {pkg.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={
                    i < Math.round(pkg.rating)
                      ? 'fill-amber-400 text-amber-400'
                      : 'text-gray-300'
                  }
                />
              ))}
              <span className="text-sm font-semibold text-gray-700">
                {pkg.rating}/5 ({pkg.totalBookings} bookings)
              </span>
            </div>

            <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold">
              {pkg.days} Days {pkg.nights} Nights
            </div>
          </div>

          <p className="text-gray-600 text-lg">{pkg.subtitle}</p>
        </div>

        {/* Quick Info Strip */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-4 pb-2 min-w-max">
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-lg whitespace-nowrap">
              {getTransportIcon()}
              <span className="text-sm font-semibold text-gray-700">
                {pkg.transportType.replace('_', ' ').toUpperCase()}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-lg whitespace-nowrap">
              {getMealsIcon()}
              <span className="text-sm font-semibold text-gray-700">
                {pkg.mealsIncluded === 'none'
                  ? 'No Meals'
                  : pkg.mealsIncluded === 'breakfast'
                  ? 'Breakfast'
                  : pkg.mealsIncluded === 'half'
                  ? 'Breakfast & Dinner'
                  : 'All Meals'}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-lg whitespace-nowrap">
              <MapPin size={18} />
              <span className="text-sm font-semibold text-gray-700">
                {pkg.citiesCovered.length} Cities
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-lg whitespace-nowrap">
              <Clock size={18} />
              <span className="text-sm font-semibold text-gray-700">
                {pkg.days} Days
              </span>
            </div>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-gray-600 text-sm mb-1">Starting from</p>
            <p className="text-4xl font-bold text-amber-500">
              ₹{pkg.startingPrice.toLocaleString()}
              <span className="text-lg font-normal text-gray-500 ml-2">
                /{pkg.priceUnit === 'per_person' ? 'person' : 'package'}
              </span>
            </p>
          </div>
          <button
            onClick={handleEnquireClick}
            className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Enquire Now
          </button>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {pkg.overview}
          </p>
        </section>

        {/* Highlights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {pkg.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-amber-50 p-4 rounded-lg"
              >
                <Zap className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 font-medium">{highlight}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Itinerary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Day-by-Day Itinerary
          </h2>
          <div className="space-y-3">
            {pkg.itinerary.map((day, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedDayIndex(
                      expandedDayIndex === idx ? -1 : idx
                    )
                  }
                  className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1 text-left">
                    <div className="bg-teal-700 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      {day.dayNumber}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">
                        {day.title}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-gray-400 transition-transform ${
                      expandedDayIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedDayIndex === idx && (
                  <div className="border-t border-gray-200 p-4 bg-gray-50">
                    <p className="text-gray-700 mb-4">{day.description}</p>

                    <div className="space-y-2 text-sm">
                      {day.meals && day.meals.length > 0 && (
                        <p className="text-gray-600">
                          <span className="font-semibold">Meals:</span>{' '}
                          {day.meals.join(', ')}
                        </p>
                      )}
                      {day.accommodation && (
                        <p className="text-gray-600">
                          <span className="font-semibold">Accommodation:</span>{' '}
                          {day.accommodation}
                        </p>
                      )}
                      {day.distanceKm && (
                        <p className="text-gray-600">
                          <span className="font-semibold">Distance:</span>{' '}
                          {day.distanceKm} km
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Inclusions & Exclusions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What's Included & Excluded
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Inclusions */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Check className="text-green-600" size={24} />
                Inclusions
              </h3>
              <ul className="space-y-3">
                {pkg.inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check
                      className="text-green-600 flex-shrink-0 mt-0.5"
                      size={20}
                    />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <X className="text-red-600" size={24} />
                Exclusions
              </h3>
              <ul className="space-y-3">
                {pkg.exclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <X
                      className="text-red-600 flex-shrink-0 mt-0.5"
                      size={20}
                    />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Car Pricing Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Available Vehicles & Pricing
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-teal-700 text-white">
                  <th className="border border-gray-200 px-4 py-3 text-left font-bold">
                    Vehicle Type
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-bold">
                    Seats
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-right font-bold">
                    Per Person
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-right font-bold">
                    Per Package
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-bold">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {pkg.carPricing.map((pricing, idx) => {
                  const car = cars.find((c) => c.id === pricing.carTypeId);
                  return (
                    <tr
                      key={idx}
                      className={
                        idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      }
                    >
                      <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                        {car?.name || pricing.carTypeId}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">
                        {car?.seats || 'N/A'}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-right font-bold text-amber-600">
                        ₹{pricing.pricePerPerson.toLocaleString()}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-right font-bold text-amber-600">
                        ₹{pricing.pricePerPackage.toLocaleString()}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center">
                        <button
                          onClick={handleEnquireClick}
                          className="bg-teal-700 hover:bg-teal-800 text-white font-semibold py-1 px-3 rounded transition-colors text-sm"
                        >
                          Select
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Photo Gallery */}
        {pkg.images.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Photo Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {pkg.images.slice(0, 6).map((image, idx) => (
                <div
                  key={idx}
                  className="relative h-40 sm:h-48 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <Image
                    src={image}
                    alt={`Gallery ${idx + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQs */}
        {pkg.faqs.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {pkg.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setExpandedFaqIndex(
                        expandedFaqIndex === idx ? null : idx
                      )
                    }
                    className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                  >
                    <p className="font-bold text-gray-900 text-left">
                      {faq.question}
                    </p>
                    <ChevronDown
                      size={20}
                      className={`text-gray-400 flex-shrink-0 transition-transform ${
                        expandedFaqIndex === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {expandedFaqIndex === idx && (
                    <div className="border-t border-gray-200 p-4 bg-gray-50">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Enquiry Form */}
        <section id="enquiry" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Enquire About This Package
          </h2>
          <EnquiryForm packageId={pkg.id} packageTitle={pkg.title} />
        </section>
      </div>

      {/* Sticky Mobile CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 sm:hidden z-40">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-gray-600">Starting from</p>
            <p className="text-xl font-bold text-amber-500">
              ₹{pkg.startingPrice.toLocaleString()}
              <span className="text-xs font-normal text-gray-500">
                /person
              </span>
            </p>
          </div>
          <button
            onClick={handleEnquireClick}
            className="flex-1 bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Enquire Now
          </button>
        </div>
      </div>

      {/* Bottom padding for mobile sticky bar */}
      <div className="h-24 sm:h-0" />
    </div>
  );
}
