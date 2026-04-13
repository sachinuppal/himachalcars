import { PackageCategory } from './types';

export const packageCategories: readonly PackageCategory[] = [
  {
    id: 'honeymoon',
    slug: 'honeymoon',
    name: 'Honeymoon',
    description:
      'Romantic packages designed for newlyweds with candlelit dinners, couple spa treatments, and intimate experiences in stunning mountain settings.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  },
  {
    id: 'family',
    slug: 'family',
    name: 'Family',
    description:
      'Family-friendly packages with activities suitable for all ages, comfortable accommodation, and experiences that create lasting memories for everyone.',
    image: 'https://images.unsplash.com/photo-1511316695145-4992006ffddb?w=800&q=80',
  },
  {
    id: 'adventure',
    slug: 'adventure',
    name: 'Adventure',
    description:
      'Thrilling adventure packages featuring trekking, rock climbing, paragliding, and exploration of remote mountain regions for adrenaline enthusiasts.',
    image: 'https://images.unsplash.com/photo-1551632786-de41ec16a83b?w=800&q=80',
  },
  {
    id: 'spiritual',
    slug: 'spiritual',
    name: 'Spiritual & Temple',
    description:
      'Spiritual journey packages with visits to ancient temples, monasteries, meditation sessions, and yoga to rejuvenate mind, body, and soul.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  },
  {
    id: 'group',
    slug: 'group',
    name: 'Group Tours',
    description:
      'Specially curated group packages with team-building activities, cost-effective options for corporate groups, friends, and family gatherings.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
  },
] as const satisfies readonly PackageCategory[];
