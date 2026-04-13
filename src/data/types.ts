/**
 * Shared TypeScript types and interfaces for Himachal Cars
 */

export interface CarType {
  id: string;
  slug: string;
  name: string;
  category: 'budget' | 'mid' | 'premium' | 'flagship' | 'ultra-premium';
  seats: number;
  luggage: number;
  description: string;
  image: string;
  pricePerKm: number;
  pricePerHour: number;
  basePrice: number;
}

export type TripType = 'outstation_oneway' | 'outstation_roundtrip' | 'airport' | 'hourly';

export interface ItineraryDay {
  dayNumber: number;
  title: string;
  description: string;
  meals?: string[];
  accommodation?: string;
  distanceKm?: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface PackageCarPrice {
  carTypeId: string;
  pricePerPerson: number;
  pricePerPackage: number;
}

export interface Package {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'honeymoon' | 'family' | 'adventure' | 'spiritual' | 'group';
  nights: number;
  days: number;
  startingPrice: number;
  priceUnit: 'per_person' | 'per_package';
  overview: string;
  highlights: string[];
  citiesCovered: string[];
  inclusions: string[];
  exclusions: string[];
  transportType: 'sedan' | 'suv' | 'innova' | 'innova_crysta' | 'mixed';
  mealsIncluded: 'none' | 'breakfast' | 'half' | 'full';
  rating: number;
  totalBookings: number;
  isFeatured: boolean;
  isActive: boolean;
  heroImage: string;
  images: string[];
  itinerary: ItineraryDay[];
  faqs: FAQ[];
  carPricing: PackageCarPrice[];
}

export interface PackageCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
}

export interface Route {
  slug: string;
  fromCity: string;
  toCity: string;
  distanceKm: number;
  durationHours: number;
  description: string;
  highlights: string[];
  metaTitle: string;
  metaDescription: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  tripRoute: string;
  avatar?: string;
}

export interface AirportTransferPrice {
  from: string;
  to: string;
  carTypeId: string;
  fixedPrice: number;
}

export interface CabEnquiryForm {
  pickupCity: string;
  dropoffCity: string;
  pickupDate: string;
  tripType: TripType;
  passengers: number;
  name: string;
  email: string;
  phone: string;
  specialRequests?: string;
}

export interface PackageEnquiryForm {
  packageId: string;
  travelDate: string;
  numberOfTravelers: number;
  name: string;
  email: string;
  phone: string;
  specialRequests?: string;
}
