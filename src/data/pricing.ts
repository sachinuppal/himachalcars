import { AirportTransferPrice } from './types';

export const airportTransferPricing: AirportTransferPrice[] = [
  // Chandigarh Airport to Shimla
  {
    from: 'Chandigarh Airport',
    to: 'Shimla',
    carTypeId: 'hatchback',
    fixedPrice: 2500,
  },
  {
    from: 'Chandigarh Airport',
    to: 'Shimla',
    carTypeId: 'sedan',
    fixedPrice: 3200,
  },
  {
    from: 'Chandigarh Airport',
    to: 'Shimla',
    carTypeId: 'suv',
    fixedPrice: 3800,
  },
  {
    from: 'Chandigarh Airport',
    to: 'Shimla',
    carTypeId: 'innova',
    fixedPrice: 4500,
  },
  {
    from: 'Chandigarh Airport',
    to: 'Shimla',
    carTypeId: 'innova-crysta',
    fixedPrice: 5500,
  },

  // Kullu Airport to Manali
  {
    from: 'Kullu Airport',
    to: 'Manali',
    carTypeId: 'hatchback',
    fixedPrice: 1200,
  },
  {
    from: 'Kullu Airport',
    to: 'Manali',
    carTypeId: 'sedan',
    fixedPrice: 1500,
  },
  {
    from: 'Kullu Airport',
    to: 'Manali',
    carTypeId: 'suv',
    fixedPrice: 1800,
  },
  {
    from: 'Kullu Airport',
    to: 'Manali',
    carTypeId: 'innova',
    fixedPrice: 2200,
  },
  {
    from: 'Kullu Airport',
    to: 'Manali',
    carTypeId: 'innova-crysta',
    fixedPrice: 2800,
  },

  // Chandigarh Airport to Manali
  {
    from: 'Chandigarh Airport',
    to: 'Manali',
    carTypeId: 'hatchback',
    fixedPrice: 4500,
  },
  {
    from: 'Chandigarh Airport',
    to: 'Manali',
    carTypeId: 'sedan',
    fixedPrice: 5500,
  },
  {
    from: 'Chandigarh Airport',
    to: 'Manali',
    carTypeId: 'suv',
    fixedPrice: 6800,
  },
  {
    from: 'Chandigarh Airport',
    to: 'Manali',
    carTypeId: 'innova',
    fixedPrice: 8000,
  },
  {
    from: 'Chandigarh Airport',
    to: 'Manali',
    carTypeId: 'innova-crysta',
    fixedPrice: 10000,
  },

  // Delhi Airport to Shimla
  {
    from: 'Delhi Airport',
    to: 'Shimla',
    carTypeId: 'hatchback',
    fixedPrice: 3800,
  },
  {
    from: 'Delhi Airport',
    to: 'Shimla',
    carTypeId: 'sedan',
    fixedPrice: 4800,
  },
  {
    from: 'Delhi Airport',
    to: 'Shimla',
    carTypeId: 'suv',
    fixedPrice: 5800,
  },
  {
    from: 'Delhi Airport',
    to: 'Shimla',
    carTypeId: 'innova',
    fixedPrice: 7000,
  },
  {
    from: 'Delhi Airport',
    to: 'Shimla',
    carTypeId: 'innova-crysta',
    fixedPrice: 8500,
  },

  // Delhi Airport to Manali
  {
    from: 'Delhi Airport',
    to: 'Manali',
    carTypeId: 'hatchback',
    fixedPrice: 6500,
  },
  {
    from: 'Delhi Airport',
    to: 'Manali',
    carTypeId: 'sedan',
    fixedPrice: 8000,
  },
  {
    from: 'Delhi Airport',
    to: 'Manali',
    carTypeId: 'suv',
    fixedPrice: 9500,
  },
  {
    from: 'Delhi Airport',
    to: 'Manali',
    carTypeId: 'innova',
    fixedPrice: 11500,
  },
  {
    from: 'Delhi Airport',
    to: 'Manali',
    carTypeId: 'innova-crysta',
    fixedPrice: 14000,
  },

  // Delhi Airport to Dharamshala
  {
    from: 'Delhi Airport',
    to: 'Dharamshala',
    carTypeId: 'hatchback',
    fixedPrice: 5500,
  },
  {
    from: 'Delhi Airport',
    to: 'Dharamshala',
    carTypeId: 'sedan',
    fixedPrice: 6800,
  },
  {
    from: 'Delhi Airport',
    to: 'Dharamshala',
    carTypeId: 'suv',
    fixedPrice: 8200,
  },
  {
    from: 'Delhi Airport',
    to: 'Dharamshala',
    carTypeId: 'innova',
    fixedPrice: 10000,
  },
  {
    from: 'Delhi Airport',
    to: 'Dharamshala',
    carTypeId: 'innova-crysta',
    fixedPrice: 12000,
  },
];

// Helper function to get price for airport transfer
export function getAirportTransferPrice(
  from: string,
  to: string,
  carTypeId: string
): number | null {
  const pricing = airportTransferPricing.find(
    (p) => p.from === from && p.to === to && p.carTypeId === carTypeId
  );
  return pricing?.fixedPrice ?? null;
}

// Get all routes from an airport
export function getAirportRoutes(airport: string): string[] {
  return Array.from(
    new Set(
      airportTransferPricing
        .filter((p) => p.from === airport)
        .map((p) => p.to)
    )
  );
}

// Get pricing for all car types for a specific route
export function getPricingForRoute(from: string, to: string) {
  return airportTransferPricing.filter((p) => p.from === from && p.to === to);
}
