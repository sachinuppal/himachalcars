import { Package } from './types';

export const packages: Package[] = [
  {
    id: 'shimla-manali-honeymoon',
    slug: 'shimla-manali-honeymoon',
    title: 'Shimla Manali Honeymoon Special',
    subtitle: 'Romance Amidst Mountain Peaks',
    category: 'honeymoon',
    nights: 5,
    days: 6,
    startingPrice: 12000,
    priceUnit: 'per_person',
    overview:
      'Experience the magic of Himachal Pradesh with your special someone. This romantic journey takes you through lush green valleys, ancient temples, and stunning mountain vistas. Discover hidden gems and create unforgettable memories together in the land of gods.',
    highlights: [
      'Candlelit dinner with mountain views in Shimla',
      'Adventure activities in Manali - paragliding and river rafting',
      'Sunrise at Manu Temple with panoramic Parvati Valley views',
      'Couple spa treatments at premium resort',
      'Visit to famous Hadimba Temple for divine blessings',
      'Scenic toy train ride through pine forests',
      'Private bonfire evening with local cuisine',
    ],
    citiesCovered: ['Shimla', 'Kufri', 'Manali', 'Kasol'],
    inclusions: [
      'Luxury accommodation in 5-star properties',
      'Daily breakfast and dinner at hotels',
      'Airport/Railway station transfers',
      'All sightseeing as per itinerary',
      'Adventure activities (paragliding, rafting)',
      'Couple spa session (120 minutes)',
      'Welcome drink and complimentary fruit baskets',
    ],
    exclusions: [
      'Lunch during tour',
      'Travel insurance',
      'Personal expenses and tips',
      'Activities not mentioned in itinerary',
      'Any emergency medical treatment',
    ],
    transportType: 'innova_crysta',
    mealsIncluded: 'half',
    rating: 4.8,
    totalBookings: 342,
    isFeatured: true,
    isActive: true,
    heroImage:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80',
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Delhi to Shimla',
        description:
          'Start your honeymoon journey from Delhi. Drive through beautiful Himachal Pradesh landscapes reaching Shimla by evening. Settle into your luxury resort and enjoy a welcome drink.',
        meals: ['Dinner'],
        accommodation: 'Luxury 5-Star Resort',
        distanceKm: 350,
      },
      {
        dayNumber: 2,
        title: 'Shimla Exploration',
        description:
          'Morning visit to Mall Road for shopping and local cuisine. Afternoon sightseeing at Kali Bari Temple and Ridge. Evening candlelit dinner with mountain backdrop.',
        meals: ['Breakfast', 'Dinner'],
        accommodation: 'Luxury 5-Star Resort',
        distanceKm: 25,
      },
      {
        dayNumber: 3,
        title: 'Kufri Adventure',
        description:
          'Drive to Kufri for adventure activities including horse riding and skiing. Visit Mahasu Peak for panoramic views. Romantic couple spa treatment in evening.',
        meals: ['Breakfast', 'Dinner'],
        accommodation: 'Luxury 5-Star Resort',
        distanceKm: 35,
      },
      {
        dayNumber: 4,
        title: 'Drive to Manali',
        description:
          'Scenic 7-hour drive to Manali passing through Mandi and Kullu valley. Check-in at resort and explore local market. Witness the beautiful sunset from your room.',
        meals: ['Breakfast', 'Dinner'],
        accommodation: 'Luxury 5-Star Resort',
        distanceKm: 250,
      },
      {
        dayNumber: 5,
        title: 'Manali Adventure Activities',
        description:
          'Morning paragliding experience over Manali valley. Afternoon river rafting in Beas River. Evening bonfire with local Himachali cuisine and live music.',
        meals: ['Breakfast', 'Dinner'],
        accommodation: 'Luxury 5-Star Resort',
        distanceKm: 40,
      },
      {
        dayNumber: 6,
        title: 'Departure',
        description:
          'Final morning at leisure to explore Manali. Bid farewell to Himachal Pradesh and begin your journey back home with beautiful memories.',
        meals: ['Breakfast'],
        distanceKm: 540,
      },
    ],
    faqs: [
      {
        question: 'Is this package suitable for newlyweds?',
        answer:
          'Absolutely! This package is specially designed for honeymoon couples with romantic experiences, couple spa treatments, and candlelit dinners.',
      },
      {
        question: 'What is the best time to visit?',
        answer:
          'March to May and September to November are ideal. Avoid December to February for snow-related issues and July-August for heavy rains.',
      },
      {
        question: 'Are adventure activities mandatory?',
        answer:
          'No, all adventure activities are optional. You can enjoy them or skip them as per your preference and fitness level.',
      },
      {
        question: 'Do you provide medical support?',
        answer:
          'Yes, we have partnerships with leading hospitals in Shimla and Manali. Emergency medical services are available 24/7.',
      },
      {
        question: 'Can the itinerary be customized?',
        answer:
          'Yes, we can customize the itinerary based on your preferences. Please contact us with your specific requirements.',
      },
    ],
    carPricing: [
      { carTypeId: 'sedan', pricePerPerson: 10000, pricePerPackage: 20000 },
      { carTypeId: 'suv', pricePerPerson: 11000, pricePerPackage: 22000 },
      {
        carTypeId: 'innova',
        pricePerPerson: 12000,
        pricePerPackage: 24000,
      },
      {
        carTypeId: 'innova-crysta',
        pricePerPerson: 14000,
        pricePerPackage: 28000,
      },
    ],
  },
  {
    id: 'complete-himachal-family',
    slug: 'complete-himachal-family',
    title: 'Complete Himachal Pradesh Family Tour',
    subtitle: 'Ultimate Family Vacation Package',
    category: 'family',
    nights: 7,
    days: 8,
    startingPrice: 18000,
    priceUnit: 'per_person',
    overview:
      'Explore the diverse beauty of Himachal Pradesh with your entire family. From snow-capped mountains to green valleys, ancient temples to adventure sports, this comprehensive tour covers all major attractions. Perfect for creating lasting family memories and bonding time.',
    highlights: [
      'Explore historic Shimla Ridge and Christ Church',
      'Toy train ride through scenic Himalayan routes',
      'Adventure sports in Manali - rafting and paragliding',
      'Visit Hadimba Temple and Manu Temple',
      'Explore Kasol - Israeli Dorm of India',
      'Wildlife sanctuary visit in Dharmshala',
      'Family bonding activities at every destination',
      'Traditional Himachali cuisine tasting',
    ],
    citiesCovered: ['Shimla', 'Kufri', 'Manali', 'Kasol', 'Dharamshala'],
    inclusions: [
      'Comfortable 3-star accommodation throughout',
      'Daily breakfast and dinner',
      'Airport/Railway station pickup and drop',
      'All sightseeing as per itinerary',
      'Adventure activities (age-appropriate)',
      'Toy train ride and local transport',
      'Welcome and farewell meals',
      'Bottled water throughout journey',
    ],
    exclusions: [
      'Lunch and personal meals',
      'Travel insurance',
      'Gratuities and tips',
      'Personal shopping and souvenirs',
      'Any medical emergency treatment',
    ],
    transportType: 'innova',
    mealsIncluded: 'half',
    rating: 4.6,
    totalBookings: 567,
    isFeatured: true,
    isActive: true,
    heroImage:
      'https://images.unsplash.com/photo-1511316695145-4992006ffddb?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1511316695145-4992006ffddb?w=800&q=80',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Delhi to Shimla',
        description:
          'Depart from Delhi early morning. Scenic drive through Haryana and Himachal Pradesh. Arrive in Shimla by evening. Check-in and rest.',
        meals: ['Dinner'],
        accommodation: '3-Star Hotel',
        distanceKm: 350,
      },
      {
        dayNumber: 2,
        title: 'Shimla Sightseeing',
        description:
          'Visit Ridge, Christ Church, and Kali Bari Temple. Walk on the famous Mall Road for shopping. Enjoy local ice cream and street food.',
        meals: ['Breakfast', 'Dinner'],
        accommodation: '3-Star Hotel',
        distanceKm: 20,
      },
      {
        dayNumber: 3,
        title: 'Kufri and Toy Train',
        description:
          'Day trip to Kufri for horse riding and skiing. Scenic toy train ride from Kalka to Shimla. Return to Shimla for evening relaxation.',
        meals: ['Breakfast', 'Dinner'],
        accommodation: '3-Star Hotel',
        distanceKm: 50,
      },
      {
        dayNumber: 4,
        title: 'Shimla to Manali',
        description:
          'Long scenic drive to Manali via Mandi. Pass through beautiful valleys and forests. Check-in and explore local market.',
        meals: ['Breakfast', 'Dinner'],
        accommodation: '3-Star Hotel',
        distanceKm: 250,
      },
      {
        dayNumber: 5,
        title: 'Manali Adventure',
        description:
          'Morning river rafting in Beas River. Afternoon visit to Hadimba Temple. Evening bonfire with local stories and cuisine.',
        meals: ['Breakfast', 'Dinner'],
        accommodation: '3-Star Hotel',
        distanceKm: 35,
      },
      {
        dayNumber: 6,
        title: 'Manali to Kasol',
        description:
          'Drive to Kasol through scenic Parvati Valley. Explore Kasol bazaar and riverside cafes. Visit Manikaran Hot Springs.',
        meals: ['Breakfast', 'Dinner'],
        accommodation: '3-Star Hotel',
        distanceKm: 60,
      },
      {
        dayNumber: 7,
        title: 'Kasol to Dharamshala',
        description:
          'Journey to Dharamshala through forest roads. Visit McLeodganj and its local monasteries. Evening visit to local library and museum.',
        meals: ['Breakfast', 'Dinner'],
        accommodation: '3-Star Hotel',
        distanceKm: 120,
      },
      {
        dayNumber: 8,
        title: 'Dharamshala to Delhi',
        description:
          'Morning visit to Triund Trek base. Afternoon drive back to Delhi. Arrive by late evening. End your memorable family tour.',
        meals: ['Breakfast'],
        distanceKm: 480,
      },
    ],
    faqs: [
      {
        question: 'Is this suitable for children?',
        answer:
          'Yes, absolutely! This itinerary is family-friendly with age-appropriate activities. We customize based on children age groups.',
      },
      {
        question: 'What should we pack?',
        answer:
          'Pack layers, comfortable shoes, sunscreen, and rain gear. Temperature varies by altitude, so bring jackets for higher regions.',
      },
      {
        question: 'Are meals vegetarian options available?',
        answer:
          'Yes, we provide both vegetarian and non-vegetarian meal options. Please inform us in advance about dietary preferences.',
      },
      {
        question: 'What about altitude sickness?',
        answer:
          'Manali is at 6,300 feet and well-acclimatized. We do gradual altitude increase to avoid altitude-related issues.',
      },
      {
        question: 'Is travel insurance included?',
        answer:
          'No, travel insurance is not included. We recommend purchasing comprehensive travel insurance before the tour.',
      },
    ],
    carPricing: [
      { carTypeId: 'sedan', pricePerPerson: 14000, pricePerPackage: 28000 },
      { carTypeId: 'suv', pricePerPerson: 16000, pricePerPackage: 32000 },
      {
        carTypeId: 'innova',
        pricePerPerson: 18000,
        pricePerPackage: 36000,
      },
      {
        carTypeId: 'innova-crysta',
        pricePerPerson: 20000,
        pricePerPackage: 40000,
      },
    ],
  },
  {
    id: 'spiti-valley-adventure',
    slug: 'spiti-valley-adventure',
    title: 'Spiti Valley Adventure Quest',
    subtitle: 'High Altitude Himalayan Adventure',
    category: 'adventure',
    nights: 6,
    days: 7,
    startingPrice: 22000,
    priceUnit: 'per_person',
    overview:
      'Embark on an adrenaline-pumping adventure to the remote and mystical Spiti Valley. Experience raw beauty, ancient monasteries, and challenging mountain terrain. This high-altitude adventure is perfect for trekkers, photographers, and thrill-seekers.',
    highlights: [
      'Trek to Chandratal Lake at 14,100 feet',
      'Visit ancient Key Monastery perched on cliff',
      'Explore Tabo Monastery with 1000-year history',
      'Experience high-altitude homestay living',
      'Photography at stunning mountain passes',
      'Local village interactions and cultural exchange',
      'Camping under the starry Himalayan sky',
      'Rock climbing and rappelling opportunities',
    ],
    citiesCovered: ['Manali', 'Spiti Valley', 'Kaza', 'Tabo', 'Kailash'],
    inclusions: [
      'Comfortable mountain accommodation',
      'Breakfast, lunch, and dinner throughout',
      'Professional adventure guides and support',
      'Camping equipment and safety gear',
      'Trek permits and forest passes',
      'First aid and emergency medical support',
      'Local transport within Spiti Valley',
      'Welcome and farewell traditional meals',
    ],
    exclusions: [
      'Travel insurance (mandatory)',
      'Personal trekking equipment',
      'Tips and gratuities',
      'Any activity not listed in itinerary',
      'Extreme emergency evacuations by helicopter',
    ],
    transportType: 'suv',
    mealsIncluded: 'full',
    rating: 4.9,
    totalBookings: 189,
    isFeatured: true,
    isActive: true,
    heroImage:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1551632786-de41ec16a83b?w=800&q=80',
      'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Manali to Sarahan',
        description:
          'Depart from Manali. Scenic drive through Kinnaur region. Arrive in Sarahan. Acclimatization walk and local village exploration.',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Mountain Lodge',
        distanceKm: 120,
      },
      {
        dayNumber: 2,
        title: 'Trek to Chandratal Lake',
        description:
          'Early morning start for trek to Chandratal Lake at 14,100 feet. Experience pristine alpine beauty and meditative landscape.',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Mountain Camping',
        distanceKm: 25,
      },
      {
        dayNumber: 3,
        title: 'Chandratal to Kaza',
        description:
          'Trek descent and drive to Kaza. Visit Key Monastery perched dramatically on cliff. Evening acclimatization at Kaza town.',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Mountain Lodge',
        distanceKm: 50,
      },
      {
        dayNumber: 4,
        title: 'Spiti Exploration',
        description:
          'Visit 1000-year-old Tabo Monastery with intricate frescoes. Rock climbing session at designated climbing wall. Local homestay interaction.',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Local Homestay',
        distanceKm: 40,
      },
      {
        dayNumber: 5,
        title: 'Kailash and Photography',
        description:
          'Visit Kailash peak viewpoint for panoramic photography. Star gazing experience in one of world\'s clearest skies. Bonfire with local guide stories.',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Mountain Camping',
        distanceKm: 35,
      },
      {
        dayNumber: 6,
        title: 'Return to Manali',
        description:
          'Final morning exploration. Scenic drive back to Manali through Kinnaur valley. Reflect on adventure experiences.',
        meals: ['Breakfast', 'Lunch'],
        distanceKm: 200,
      },
      {
        dayNumber: 7,
        title: 'Manali Departure',
        description:
          'Last day at leisure. Explore Manali town. Evening flight/train to Delhi or onwards journey.',
        meals: ['Breakfast'],
        distanceKm: 0,
      },
    ],
    faqs: [
      {
        question: 'What fitness level is required?',
        answer:
          'Good fitness required. Regular exercise, basic hiking experience, and altitude tolerance is necessary. Our guides will assist you throughout.',
      },
      {
        question: 'Is altitude sickness a concern?',
        answer:
          'Yes, we go up to 14,100 feet. We provide gradual acclimatization and carry medical oxygen. Inform us of health concerns in advance.',
      },
      {
        question: 'What is the best time to visit?',
        answer:
          'June to September is ideal. Winter routes are closed due to heavy snow. Avoid monsoon season for safety.',
      },
      {
        question: 'Do you provide trekking equipment?',
        answer:
          'Yes, all trekking equipment, camping gear, and safety equipment are provided. Personal items should be brought by participants.',
      },
      {
        question: 'Is this suitable for beginners?',
        answer:
          'Yes, with proper fitness training. This is an intermediate-level adventure. Beginners are welcome with adequate preparation.',
      },
    ],
    carPricing: [
      { carTypeId: 'suv', pricePerPerson: 18000, pricePerPackage: 36000 },
      {
        carTypeId: 'innova',
        pricePerPerson: 20000,
        pricePerPackage: 40000,
      },
      {
        carTypeId: 'innova-crysta',
        pricePerPerson: 24000,
        pricePerPackage: 48000,
      },
    ],
  },
  {
    id: 'shimla-weekend-getaway',
    slug: 'shimla-weekend-getaway',
    title: 'Shimla Weekend Getaway',
    subtitle: 'Quick Mountain Escape',
    category: 'family',
    nights: 2,
    days: 3,
    startingPrice: 6500,
    priceUnit: 'per_person',
    overview:
      'Perfect for a quick escape from city life. Spend a rejuvenating weekend in the hill station of Shimla. Experience the colonial charm, local culture, and beautiful mountain scenery in just three days.',
    highlights: [
      'Explore historic Shimla Ridge and Christ Church',
      'Walk on famous Mall Road',
      'Visit Jakhoo Temple for panoramic views',
      'Scenic ropeway ride',
      'Local Himachali cuisine tasting',
      'Sunset view from Ridge viewpoint',
      'Shopping at local markets',
    ],
    citiesCovered: ['Shimla', 'Kufri'],
    inclusions: [
      '2-star comfortable accommodation',
      'Daily breakfast and one dinner',
      'Airport/Railway station transfers',
      'Sightseeing as per itinerary',
      'Local guide assistance',
      'Welcome drink',
    ],
    exclusions: [
      'Lunch',
      'Travel insurance',
      'Gratuities',
      'Personal shopping',
      'Adventures activities',
    ],
    transportType: 'sedan',
    mealsIncluded: 'breakfast',
    rating: 4.4,
    totalBookings: 890,
    isFeatured: false,
    isActive: true,
    heroImage:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Delhi to Shimla',
        description:
          'Early morning departure from Delhi. Scenic drive reaching Shimla by evening. Check-in and rest at hotel.',
        meals: ['Dinner'],
        accommodation: '2-Star Hotel',
        distanceKm: 350,
      },
      {
        dayNumber: 2,
        title: 'Shimla Exploration',
        description:
          'Morning visit to Ridge and Christ Church. Afternoon walk on Mall Road. Evening ropeway ride and dinner at local restaurant.',
        meals: ['Breakfast', 'Dinner'],
        accommodation: '2-Star Hotel',
        distanceKm: 15,
      },
      {
        dayNumber: 3,
        title: 'Return to Delhi',
        description:
          'Morning visit to Jakhoo Temple. Afternoon drive back to Delhi. Arrive by evening.',
        meals: ['Breakfast'],
        distanceKm: 350,
      },
    ],
    faqs: [
      {
        question: 'Is this ideal for a short weekend trip?',
        answer:
          'Yes, perfect for quick escapes. We maximize your time with early morning starts and efficient routing.',
      },
      {
        question: 'Can we customize the itinerary?',
        answer:
          'Yes, we can adjust based on your interests and time availability. Inform us in advance.',
      },
      {
        question: 'What is the weather like?',
        answer:
          'Shimla has pleasant weather year-round. Winters are cold with snow, summers are mild. Pack accordingly.',
      },
      {
        question: 'Is travel insurance required?',
        answer:
          'Not mandatory but recommended for additional peace of mind.',
      },
    ],
    carPricing: [
      { carTypeId: 'hatchback', pricePerPerson: 4500, pricePerPackage: 9000 },
      { carTypeId: 'sedan', pricePerPerson: 5500, pricePerPackage: 11000 },
      { carTypeId: 'suv', pricePerPerson: 6500, pricePerPackage: 13000 },
    ],
  },
  {
    id: 'dharamshala-mcleodganj-spiritual',
    slug: 'dharamshala-mcleodganj-spiritual',
    title: 'Dharamshala McLeodganj Spiritual Journey',
    subtitle: 'Inner Peace and Spiritual Awakening',
    category: 'spiritual',
    nights: 3,
    days: 4,
    startingPrice: 8000,
    priceUnit: 'per_person',
    overview:
      'Discover inner peace and spiritual awakening in the serene hill station of Dharamshala. Visit ancient temples, monasteries, and practice meditation in a tranquil mountain environment.',
    highlights: [
      'Visit Dalai Lama Monastery and Temple',
      'Explore ancient Tibetan Buddhist monasteries',
      'Morning meditation sessions',
      'Visit Bhagsu Nag Temple and waterfall',
      'Local monastery tours with monks',
      'Yoga and wellness sessions',
      'Panoramic Triund Trek experience',
    ],
    citiesCovered: ['Dharamshala', 'McLeodganj', 'Bhagsu'],
    inclusions: [
      'Comfortable 3-star accommodation',
      'Daily breakfast and dinner',
      'Guided monastery tours',
      'Yoga and meditation classes',
      'Temple visit assistance',
      'Airport/Railway transfers',
    ],
    exclusions: [
      'Lunch',
      'Travel insurance',
      'Personal spiritual consultations',
      'Gratuities',
    ],
    transportType: 'sedan',
    mealsIncluded: 'half',
    rating: 4.7,
    totalBookings: 456,
    isFeatured: false,
    isActive: true,
    heroImage:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1551632786-de41ec16a83b?w=800&q=80',
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Arrival in Dharamshala',
        description:
          'Arrive in Dharamshala. Check-in at hotel. Evening visit to local temple for prayer ceremony.',
        meals: ['Dinner'],
        accommodation: '3-Star Hotel',
        distanceKm: 0,
      },
      {
        dayNumber: 2,
        title: 'Spiritual Exploration',
        description:
          'Morning meditation session. Visit Dalai Lama Monastery and Temple. Afternoon guided tour of Tibetan monasteries. Evening yoga class.',
        meals: ['Breakfast', 'Dinner'],
        accommodation: '3-Star Hotel',
        distanceKm: 20,
      },
      {
        dayNumber: 3,
        title: 'Nature and Spirituality',
        description:
          'Triund Trek morning walk. Visit Bhagsu Nag Temple and waterfall. Afternoon meditation. Evening cultural show.',
        meals: ['Breakfast', 'Dinner'],
        accommodation: '3-Star Hotel',
        distanceKm: 15,
      },
      {
        dayNumber: 4,
        title: 'Departure',
        description:
          'Final morning prayers and meditation. Depart for next destination or return home with spiritual refreshment.',
        meals: ['Breakfast'],
        distanceKm: 0,
      },
    ],
    faqs: [
      {
        question: 'Do I need to be religious to enjoy this tour?',
        answer:
          'No, this tour welcomes everyone regardless of religious background. It focuses on spiritual wellness and inner peace.',
      },
      {
        question: 'Are meditation classes suitable for beginners?',
        answer:
          'Yes, all classes are designed for all levels. Our instructors provide personalized guidance.',
      },
      {
        question: 'What should I wear at temples?',
        answer:
          'Modest clothing is required. Cover shoulders and knees. Remove shoes before entering sacred areas.',
      },
      {
        question: 'Is dietary assistance available?',
        answer:
          'Yes, we cater to vegetarian, vegan, and other dietary preferences. Inform us in advance.',
      },
    ],
    carPricing: [
      { carTypeId: 'hatchback', pricePerPerson: 6000, pricePerPackage: 12000 },
      { carTypeId: 'sedan', pricePerPerson: 7000, pricePerPackage: 14000 },
      { carTypeId: 'suv', pricePerPerson: 8500, pricePerPackage: 17000 },
    ],
  },
  {
    id: 'manali-volvo-group',
    slug: 'manali-volvo-group',
    title: 'Manali Volvo Group Package',
    subtitle: 'Comfortable Group Travel Experience',
    category: 'group',
    nights: 4,
    days: 5,
    startingPrice: 9500,
    priceUnit: 'per_person',
    overview:
      'Perfect for group travel from Delhi to Manali. Enjoy premium Volvo comfort with organized group activities and shared experiences. Ideal for corporate groups, friends, and family gatherings.',
    highlights: [
      'Comfortable Volvo coach journey from Delhi',
      'Adventure activities in Manali',
      'Group bonfire and team-building games',
      'Visit Hadimba Temple and Manu Temple',
      'River rafting experience',
      'Local market exploration',
      'Sunrise experience at viewpoint',
    ],
    citiesCovered: ['Delhi', 'Mandi', 'Manali'],
    inclusions: [
      'Premium Volvo journey',
      'Comfortable 3-star accommodation',
      'Daily breakfast and dinner',
      'All activities as per itinerary',
      'Group guide and support staff',
      'Welcome and farewell meals',
    ],
    exclusions: [
      'Lunch',
      'Travel insurance',
      'Personal activities',
      'Gratuities',
    ],
    transportType: 'innova',
    mealsIncluded: 'half',
    rating: 4.5,
    totalBookings: 612,
    isFeatured: false,
    isActive: true,
    heroImage:
      'https://images.unsplash.com/photo-1511316695145-4992006ffddb?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1511316695145-4992006ffddb?w=800&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Delhi to Manali (Night Volvo)',
        description:
          'Evening pickup from Delhi. Comfortable overnight Volvo journey. Arrive in Manali by morning.',
        meals: ['Breakfast'],
        accommodation: '3-Star Hotel',
        distanceKm: 540,
      },
      {
        dayNumber: 2,
        title: 'Manali Arrival and Exploration',
        description:
          'Check-in and rest after journey. Afternoon visit to local market and Hadimba Temple. Evening group dinner and team games.',
        meals: ['Breakfast', 'Dinner'],
        accommodation: '3-Star Hotel',
        distanceKm: 20,
      },
      {
        dayNumber: 3,
        title: 'Adventure Day',
        description:
          'Morning river rafting in Beas River. Afternoon rock climbing or horseback riding. Evening bonfire with songs and stories.',
        meals: ['Breakfast', 'Dinner'],
        accommodation: '3-Star Hotel',
        distanceKm: 40,
      },
      {
        dayNumber: 4,
        title: 'Leisure and Shopping',
        description:
          'Morning trek or visit to Manu Temple. Afternoon free for shopping and individual exploration. Evening cultural performance.',
        meals: ['Breakfast', 'Dinner'],
        accommodation: '3-Star Hotel',
        distanceKm: 25,
      },
      {
        dayNumber: 5,
        title: 'Return to Delhi',
        description:
          'Sunrise view at Manali viewpoint. Breakfast and check-out. Evening Volvo departure back to Delhi.',
        meals: ['Breakfast'],
        distanceKm: 540,
      },
    ],
    faqs: [
      {
        question: 'What is minimum group size?',
        answer:
          'Minimum 10 people. Larger discounts available for groups of 20+ people.',
      },
      {
        question: 'Can we customize the itinerary for our group?',
        answer:
          'Yes, we can customize based on group preferences and requirements.',
      },
      {
        question: 'Are team-building activities included?',
        answer:
          'Yes, we include group games, bonfire activities, and team bonding sessions.',
      },
      {
        question: 'Is the Volvo comfortable for overnight journey?',
        answer:
          'Yes, Volvo coaches are premium with reclining seats, toilets, and entertainment systems.',
      },
    ],
    carPricing: [
      {
        carTypeId: 'innova',
        pricePerPerson: 7500,
        pricePerPackage: 15000,
      },
      {
        carTypeId: 'innova-crysta',
        pricePerPerson: 9500,
        pricePerPackage: 19000,
      },
    ],
  },
  {
    id: 'kinnaur-spiti-circuit',
    slug: 'kinnaur-spiti-circuit',
    title: 'Kinnaur Spiti Circuit Adventure',
    subtitle: 'Off-the-Beaten-Path Mountain Exploration',
    category: 'adventure',
    nights: 9,
    days: 10,
    startingPrice: 28000,
    priceUnit: 'per_person',
    overview:
      'Explore two of Himachal\'s most remote and beautiful regions. The Kinnaur Spiti Circuit combines mountain culture, ancient monasteries, and stunning landscapes. Perfect for adventurous travelers seeking authentic experiences away from crowds.',
    highlights: [
      'Drive through Kinnaur valley with apple orchards',
      'Visit Kalpa and Sangla villages',
      'Trek to glacial Chandratal Lake',
      'Explore ancient monasteries and temples',
      'Photograph stunning mountain passes',
      'Local village interactions and homestays',
      'Stargazing at high altitudes',
      'Rock climbing and trekking opportunities',
    ],
    citiesCovered: ['Shimla', 'Kinnaur', 'Sangla', 'Kalpa', 'Spiti', 'Kaza'],
    inclusions: [
      'Mountain lodge and homestay accommodation',
      'All meals throughout the tour',
      'Professional trekking guides',
      'Camping and safety equipment',
      'First aid and medical support',
      'Permits and forest passes',
      'Photography support',
    ],
    exclusions: [
      'Travel insurance (mandatory)',
      'Personal trekking gear',
      'Tips and gratuities',
      'Extreme emergency evacuations',
    ],
    transportType: 'suv',
    mealsIncluded: 'full',
    rating: 4.9,
    totalBookings: 145,
    isFeatured: true,
    isActive: true,
    heroImage:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1551632786-de41ec16a83b?w=800&q=80',
      'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Shimla to Sarahan',
        description:
          'Depart from Shimla. Drive through scenic Kinnaur region. Arrive in Sarahan. Explore local temples and villages.',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Mountain Lodge',
        distanceKm: 120,
      },
      {
        dayNumber: 2,
        title: 'Sarahan to Sangla',
        description:
          'Scenic drive through apple orchards. Arrive in Sangla valley. Trek around village and river exploration.',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Mountain Lodge',
        distanceKm: 50,
      },
      {
        dayNumber: 3,
        title: 'Sangla Exploration',
        description:
          'Full day trekking around Sangla valley. Visit local temples. Photography sessions. Evening bonfire.',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Mountain Lodge',
        distanceKm: 25,
      },
      {
        dayNumber: 4,
        title: 'Sangla to Kalpa',
        description:
          'Drive to Kalpa. Visit Kinnaur Kailash temple. Sunset view from Kalpa viewpoint. Local homestay interaction.',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Local Homestay',
        distanceKm: 30,
      },
      {
        dayNumber: 5,
        title: 'Kalpa to Kaza',
        description:
          'Long drive towards Spiti. Stop at scenic viewpoints. Arrive in Kaza. Evening acclimatization.',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Mountain Lodge',
        distanceKm: 120,
      },
      {
        dayNumber: 6,
        title: 'Kaza and Key Monastery',
        description:
          'Visit ancient Key Monastery on cliff. Explore Kaza town. Local market visit. Rock climbing session.',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Mountain Lodge',
        distanceKm: 40,
      },
      {
        dayNumber: 7,
        title: 'Trek to Chandratal Lake',
        description:
          'Trek to Chandratal Lake at 14,100 feet. High altitude experience. Mountain camping under stars.',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Mountain Camping',
        distanceKm: 30,
      },
      {
        dayNumber: 8,
        title: 'Chandratal Exploration',
        description:
          'Full day at Chandratal. Photography. Meditation. Trek around lake. Evening campfire.',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Mountain Camping',
        distanceKm: 20,
      },
      {
        dayNumber: 9,
        title: 'Return to Manali',
        description:
          'Trek descent and drive towards Manali. Scenic journey through mountain passes.',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Mountain Lodge',
        distanceKm: 150,
      },
      {
        dayNumber: 10,
        title: 'Manali Departure',
        description:
          'Remaining morning in Manali. Departure for next destination or Delhi.',
        meals: ['Breakfast'],
        distanceKm: 0,
      },
    ],
    faqs: [
      {
        question: 'What altitude will we reach?',
        answer:
          'Maximum altitude is 14,100 feet at Chandratal Lake. Gradual acclimatization is provided.',
      },
      {
        question: 'What fitness level is required?',
        answer:
          'Good fitness with trekking experience. This is intermediate-advanced level adventure.',
      },
      {
        question: 'Best time to visit?',
        answer:
          'July to September. Winter routes are closed. Monsoon months are unsafe.',
      },
      {
        question: 'Is equipment provided?',
        answer:
          'Yes, all trekking and camping equipment are provided. Personal items should be packed.',
      },
      {
        question: 'What about medical facilities?',
        answer:
          'We carry first aid kits, oxygen, and have liaison with nearest hospitals. Emergency evacuation is possible.',
      },
    ],
    carPricing: [
      {
        carTypeId: 'suv',
        pricePerPerson: 22000,
        pricePerPackage: 44000,
      },
      {
        carTypeId: 'innova',
        pricePerPerson: 26000,
        pricePerPackage: 52000,
      },
      {
        carTypeId: 'innova-crysta',
        pricePerPerson: 30000,
        pricePerPackage: 60000,
      },
    ],
  },
  {
    id: 'shimla-kufri-family-fun',
    slug: 'shimla-kufri-family-fun',
    title: 'Shimla Kufri Family Fun Package',
    subtitle: 'Hill Station Fun for All Ages',
    category: 'family',
    nights: 3,
    days: 4,
    startingPrice: 7500,
    priceUnit: 'per_person',
    overview:
      'Create wonderful family memories in the beautiful hill station of Shimla and snow-covered Kufri. This package combines relaxation, adventure, and cultural experiences perfect for families with children.',
    highlights: [
      'Toy train ride through Himalayan routes',
      'Snow activities and skiing in Kufri',
      'Horse riding and ropeway experiences',
      'Historic Christ Church visit',
      'Local mall road shopping',
      'Jakhoo Temple for panoramic views',
      'Traditional Himachali cuisine tasting',
      'Evening cultural shows',
    ],
    citiesCovered: ['Shimla', 'Kufri'],
    inclusions: [
      '3-star family-friendly accommodation',
      'Daily breakfast and one dinner',
      'Sightseeing as per itinerary',
      'Toy train ride',
      'Horse riding or ropeway experience',
      'Welcome drink and snacks',
    ],
    exclusions: [
      'Lunch',
      'Travel insurance',
      'Gratuities',
      'Shopping expenses',
    ],
    transportType: 'sedan',
    mealsIncluded: 'half',
    rating: 4.6,
    totalBookings: 723,
    isFeatured: false,
    isActive: true,
    heroImage:
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Delhi to Shimla',
        description:
          'Early morning drive from Delhi. Scenic journey through mountains. Arrive in Shimla by evening. Welcome dinner and rest.',
        meals: ['Dinner'],
        accommodation: '3-Star Hotel',
        distanceKm: 350,
      },
      {
        dayNumber: 2,
        title: 'Shimla Adventure Day',
        description:
          'Toy train ride experience. Visit Christ Church and Ridge. Afternoon ropeway ride or horse riding. Evening on Mall Road.',
        meals: ['Breakfast', 'Dinner'],
        accommodation: '3-Star Hotel',
        distanceKm: 25,
      },
      {
        dayNumber: 3,
        title: 'Kufri Fun Day',
        description:
          'Drive to Kufri. Snow activities and skiing. Horse riding in meadows. Visit Mahasu Peak. Afternoon return to Shimla.',
        meals: ['Breakfast', 'Dinner'],
        accommodation: '3-Star Hotel',
        distanceKm: 50,
      },
      {
        dayNumber: 4,
        title: 'Return to Delhi',
        description:
          'Morning visit to Jakhoo Temple. Lunch and shopping on Mall Road. Afternoon drive back to Delhi.',
        meals: ['Breakfast'],
        distanceKm: 350,
      },
    ],
    faqs: [
      {
        question: 'Is this suitable for small children?',
        answer:
          'Yes, all activities are family-friendly and age-appropriate. We can customize based on children age.',
      },
      {
        question: 'What about snow in Kufri?',
        answer:
          'Snow is available December to February. Other months might have limited snow. Skiing availability depends on season.',
      },
      {
        question: 'Are there vegetarian food options?',
        answer:
          'Yes, we provide both vegetarian and non-vegetarian meals. Special requests can be accommodated.',
      },
      {
        question: 'What should we pack?',
        answer:
          'Pack warm clothes, comfortable shoes, sunscreen, and rain gear depending on season.',
      },
    ],
    carPricing: [
      { carTypeId: 'sedan', pricePerPerson: 6000, pricePerPackage: 12000 },
      { carTypeId: 'suv', pricePerPerson: 7000, pricePerPackage: 14000 },
      { carTypeId: 'innova', pricePerPerson: 8000, pricePerPackage: 16000 },
    ],
  },
  {
    id: 'leh-ladakh-manali',
    slug: 'leh-ladakh-manali',
    title: 'Leh Ladakh via Manali Grand Tour',
    subtitle: 'World\'s Highest Highway Adventure',
    category: 'adventure',
    nights: 8,
    days: 9,
    startingPrice: 35000,
    priceUnit: 'per_person',
    overview:
      'Experience the ultimate high-altitude adventure on the world\'s highest motorable pass. This epic journey combines Himachal\'s beauty with Ladakh\'s stark landscape. For seasoned travelers and adventure enthusiasts.',
    highlights: [
      'Drive through Leh-Manali Highway',
      'Cross Rohtang Pass at 13,050 feet',
      'Baralacha La Pass at 16,040 feet',
      'Explore Ladakh\'s monasteries and palaces',
      'Visit Pangong Tso and Tso Moriri lakes',
      'Mountain biking opportunities',
      'Ancient trade route exploration',
      'Photography at world-famous passes',
    ],
    citiesCovered: ['Manali', 'Keylong', 'Leh', 'Nubra Valley', 'Pangong'],
    inclusions: [
      'Mountain lodge accommodation',
      'All meals throughout journey',
      'Professional guide and driver',
      'Permits and passes',
      'First aid and oxygen',
      'Photography assistance',
      'Local cultural interactions',
    ],
    exclusions: [
      'Travel insurance (mandatory)',
      'Personal trekking equipment',
      'Tips and gratuities',
      'Extreme emergency evacuations',
    ],
    transportType: 'suv',
    mealsIncluded: 'full',
    rating: 4.8,
    totalBookings: 267,
    isFeatured: true,
    isActive: true,
    heroImage:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1551632786-de41ec16a83b?w=800&q=80',
      'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Manali Acclimatization',
        description:
          'Arrive in Manali. Check-in and rest. Explore local market. Evening acclimatization walk.',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Mountain Lodge',
        distanceKm: 0,
      },
      {
        dayNumber: 2,
        title: 'Manali to Keylong',
        description:
          'Epic drive via Rohtang Pass. Cross highest passes. Arrive in Keylong. Acclimatization and local exploration.',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Mountain Lodge',
        distanceKm: 140,
      },
      {
        dayNumber: 3,
        title: 'Keylong to Leh',
        description:
          'Continue via Baralacha La Pass. Cross Leh-Manali Highway. Arrive in Leh. Evening exploration of Leh town.',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Mountain Lodge',
        distanceKm: 240,
      },
      {
        dayNumber: 4,
        title: 'Leh Exploration',
        description:
          'Visit Leh Palace, Shanti Stupa, and local monasteries. Explore local markets. Evening at leisure.',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Mountain Lodge',
        distanceKm: 30,
      },
      {
        dayNumber: 5,
        title: 'Pangong Tso Lake',
        description:
          'Full day trip to Pangong Tso. Stunning blue lake surrounded by mountains. Photography and exploration.',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Mountain Lodge',
        distanceKm: 120,
      },
      {
        dayNumber: 6,
        title: 'Nubra Valley',
        description:
          'Explore Nubra Valley. Visit Diskit Monastery. Camel ride at Hunder Sand Dunes. Evening return to Leh.',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Mountain Lodge',
        distanceKm: 110,
      },
      {
        dayNumber: 7,
        title: 'Tso Moriri Lake',
        description:
          'Remote high-altitude lake exploration. Photography and wildlife watching. Nomadic village interaction.',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Mountain Lodge',
        distanceKm: 100,
      },
      {
        dayNumber: 8,
        title: 'Return to Manali',
        description:
          'Final day exploring Leh. Evening flight or overnight Volvo departure to Manali.',
        meals: ['Breakfast', 'Lunch'],
        distanceKm: 480,
      },
      {
        dayNumber: 9,
        title: 'Manali Departure',
        description:
          'Arrive in Manali. Afternoon departure for Delhi or next destination.',
        meals: ['Breakfast'],
        distanceKm: 0,
      },
    ],
    faqs: [
      {
        question: 'Is altitude sickness a concern?',
        answer:
          'Yes, Leh is at 11,500 feet. We provide gradual acclimatization, oxygen, and medical support.',
      },
      {
        question: 'What is the best time to visit?',
        answer:
          'June to September. Winter months close Rohtang and Baralacha La passes.',
      },
      {
        question: 'Is this suitable for first-time high altitude travelers?',
        answer:
          'With proper acclimatization and medical support, yes. Listen to your body and inform guides of discomfort.',
      },
      {
        question: 'What vehicle is used?',
        answer:
          'Rugged SUVs capable of high-altitude roads. Maintained professionally with experienced drivers.',
      },
      {
        question: 'Can we customize the itinerary?',
        answer:
          'Yes, based on time and interests. Inform us in advance for customization.',
      },
    ],
    carPricing: [
      {
        carTypeId: 'suv',
        pricePerPerson: 28000,
        pricePerPackage: 56000,
      },
      {
        carTypeId: 'innova',
        pricePerPerson: 32000,
        pricePerPackage: 64000,
      },
      {
        carTypeId: 'innova-crysta',
        pricePerPerson: 38000,
        pricePerPackage: 76000,
      },
    ],
  },
  {
    id: 'dalhousie-khajjiar-switzerland',
    slug: 'dalhousie-khajjiar-switzerland',
    title: 'Dalhousie Khajjiar Mini Switzerland',
    subtitle: 'Alpine Meadows and Colonial Charm',
    category: 'family',
    nights: 3,
    days: 4,
    startingPrice: 8500,
    priceUnit: 'per_person',
    overview:
      'Discover the alpine beauty of Dalhousie and Khajjiar, often called India\'s mini Switzerland. Lush meadows, colonial architecture, and serene surroundings make this a perfect family getaway from the plains.',
    highlights: [
      'Explore Khajjiar meadows - India\'s mini Switzerland',
      'Paragliding experience in Khajjiar',
      'Colonial buildings and Victorian architecture in Dalhousie',
      'Trek to Kalatop Wildlife Sanctuary',
      'Local handicraft shopping',
      'Sunrise view from mountain points',
      'Local Himachali cuisine',
    ],
    citiesCovered: ['Dalhousie', 'Khajjiar', 'Dainkund'],
    inclusions: [
      '3-star comfortable accommodation',
      'Daily breakfast and dinner',
      'Sightseeing as per itinerary',
      'Paragliding experience',
      'Airport/Railway transfers',
      'Welcome drink',
    ],
    exclusions: [
      'Lunch',
      'Travel insurance',
      'Gratuities',
      'Personal expenses',
    ],
    transportType: 'sedan',
    mealsIncluded: 'half',
    rating: 4.5,
    totalBookings: 534,
    isFeatured: false,
    isActive: true,
    heroImage:
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
      'https://images.unsplash.com/photo-1511316695145-4992006ffddb?w=800&q=80',
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Arrival in Dalhousie',
        description:
          'Arrive in Dalhousie hill station. Check-in at hotel. Explore colonial architecture. Evening walk on Mall Road.',
        meals: ['Dinner'],
        accommodation: '3-Star Hotel',
        distanceKm: 0,
      },
      {
        dayNumber: 2,
        title: 'Dalhousie Exploration',
        description:
          'Morning visit to Panchpulla waterfall. Afternoon trek to Kalatop Wildlife Sanctuary. Evening leisure time.',
        meals: ['Breakfast', 'Dinner'],
        accommodation: '3-Star Hotel',
        distanceKm: 30,
      },
      {
        dayNumber: 3,
        title: 'Khajjiar - Mini Switzerland',
        description:
          'Full day trip to Khajjiar. Paragliding experience or horse riding. Photography in alpine meadows. Local shopping.',
        meals: ['Breakfast', 'Dinner'],
        accommodation: '3-Star Hotel',
        distanceKm: 40,
      },
      {
        dayNumber: 4,
        title: 'Departure',
        description:
          'Morning visit to Dainkund Peak. Breakfast and check-out. Depart for next destination.',
        meals: ['Breakfast'],
        distanceKm: 0,
      },
    ],
    faqs: [
      {
        question: 'Is Khajjiar really like Switzerland?',
        answer:
          'It\'s a beautiful alpine meadow with similar aesthetics. Stunning views but uniquely Indian experience.',
      },
      {
        question: 'Is paragliding mandatory?',
        answer:
          'No, it\'s optional. You can enjoy horse riding or simply walk in meadows instead.',
      },
      {
        question: 'What is the weather like?',
        answer:
          'Pleasant year-round. Summer is warm (15-25°C), winter is cold with possible snow (5-10°C).',
      },
      {
        question: 'Is this suitable for families with kids?',
        answer:
          'Yes, perfect family destination. All activities are age-appropriate and family-friendly.',
      },
    ],
    carPricing: [
      { carTypeId: 'sedan', pricePerPerson: 6500, pricePerPackage: 13000 },
      { carTypeId: 'suv', pricePerPerson: 7500, pricePerPackage: 15000 },
      { carTypeId: 'innova', pricePerPerson: 8500, pricePerPackage: 17000 },
    ],
  },
];
