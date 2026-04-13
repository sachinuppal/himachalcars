export const cities = [
  'Shimla',
  'Manali',
  'Dharamshala',
  'McLeodganj',
  'Dalhousie',
  'Kasauli',
  'Chail',
  'Kullu',
  'Mandi',
  'Chandigarh',
  'Delhi',
  'Spiti',
  'Kaza',
  'Kalpa',
  'Sangla',
  'Kinnaur',
  'Narkanda',
  'Mashobra',
  'Kufri',
  'Kasol',
  'Parvati Valley',
  'Jogindernagar',
  'Baijnath',
  'Palampur',
  'Bagsunag',
  'Bhagsu',
  'Triund',
  'Mussoorie',
  'Nainital',
  'Roorkee',
  'Ambala',
  'Panchkula',
  'Mohali',
  'Ludhiana',
  'Amritsar',
  'Pathankot',
  'Una',
  'Bilaspur',
  'Solan',
  'Sirmour',
] as const;

export type City = (typeof cities)[number];

// Helper function to search cities
export function searchCities(query: string): City[] {
  if (!query) return [];
  const lowerQuery = query.toLowerCase();
  return cities.filter((city) =>
    city.toLowerCase().includes(lowerQuery)
  ) as City[];
}

// Get all cities as array
export function getAllCities(): readonly typeof cities[number][] {
  return cities;
}
