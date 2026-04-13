/**
 * Central export file for all static data
 * Import from this file for easier access to all data modules
 */

// Types
export type {
  CarType,
  TripType,
  ItineraryDay,
  FAQ,
  PackageCarPrice,
  Package,
  PackageCategory,
  Route,
  Testimonial,
  AirportTransferPrice,
  CabEnquiryForm,
  PackageEnquiryForm,
} from './types';

// Data exports
export { cars } from './cars';
export type { Car } from './cars';

export { packages } from './packages';

export { packageCategories } from './categories';

export { routes } from './routes';
export type { RouteSlug } from './routes';

export { testimonials } from './testimonials';
export type { TestimonialId } from './testimonials';

export {
  airportTransferPricing,
  getAirportTransferPrice,
  getAirportRoutes,
  getPricingForRoute,
} from './pricing';

export { cities, searchCities, getAllCities } from './cities';
export type { City } from './cities';
