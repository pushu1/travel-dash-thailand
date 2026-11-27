import { ItineraryDay, HotelDetail, AddonExperience, FAQItem } from '@/types';

export const PACKAGE_INFO = {
  brandName: 'TRAVEL DASH',
  tagline: 'Your Next Journey Starts Here.',
  title: 'THAILAND GETAWAY | 4 NIGHTS / 5 DAYS',
  destination: 'Thailand (Pattaya & Bangkok)',
  duration: '4 Nights / 5 Days',
  cities: 'Pattaya + Bangkok',
  travellerCountText: 'Just 2 Travellers. 2 Amazing Cities. 5 Days of Unforgettable Memories.',
  numberOfTravellersDefault: '2 Travellers',
  pricePerPerson: 61000,
  pricePerPersonFormatted: '₹61,000',
  totalPackagePrice: 122000,
  totalPackagePriceFormatted: '₹1,22,000',
  bookingToken: 500,
  bookingTokenFormatted: '₹500',
  flightCarrier: 'Air India',
  flightRoute: 'Return non-stop flights from Delhi',
  contactPhone: '+91 90577 06333',
  contactPhoneRaw: '919057706333',
  whatsappUrl: 'https://wa.me/919057706333?text=Hi%20Travel%20Dash%2C%20I%20am%20interested%20in%20the%20Thailand%204N%2F5D%20package%20at%20%E2%82%B961%2C000%20per%20person.%20Please%20guide%20me.',
  phoneCallUrl: 'tel:+919057706333',
  importantPricingNote: 'The ₹1,22,000 total price is based on the quoted itinerary for 2 travellers travelling from 30 December to 3 January. Prices for other departure dates may vary depending on flight and hotel availability. Final pricing will be confirmed before booking.',
  availabilityNote: 'Flight and hotel availability is subject to confirmation at the time of booking. Please confirm the applicable year and final pricing for your selected departure.',
};

export const DEPARTURE_DATES = [
  { id: '30-dec', date: '30 December', status: 'Filling Fast', peakSeason: true, description: 'New Year Peak Season' },
  { id: '13-jan', date: '13 January', status: 'Available', peakSeason: false, description: 'Winter Getaway' },
  { id: '27-jan', date: '27 January', status: 'Available', peakSeason: false, description: 'January Special' },
  { id: '24-feb', date: '24 February', status: 'Available', peakSeason: false, description: 'Spring Season' },
  { id: '10-mar', date: '10 March', status: 'Available', peakSeason: false, description: 'Pleasant Tropical' },
];

export const TRAVELLING_WITH_OPTIONS = [
  'Partner',
  'Husband / Wife',
  'Friend',
  'Another Travel Companion',
];

export const HIGHLIGHTS = [
  {
    title: '4 Nights / 5 Days',
    desc: 'Explore two exciting Thai destinations in one trip.',
    icon: 'Calendar',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
    tag: 'Complete Holiday'
  },
  {
    title: '2 Nights in Pattaya',
    desc: 'Enjoy beautiful beaches, island experiences and the lively atmosphere of Pattaya.',
    icon: 'Palmtree',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    tag: 'Coastal Bliss'
  },
  {
    title: '2 Nights in Bangkok',
    desc: 'Discover temples, shopping destinations and the city\'s vibrant lifestyle.',
    icon: 'Building2',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80',
    tag: 'City Vibrance'
  },
  {
    title: 'Direct Air India Flights',
    desc: 'Enjoy non-stop return flights between Delhi and Bangkok.',
    icon: 'Plane',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    tag: 'Non-stop Air India'
  },
  {
    title: 'Coral Island Experience',
    desc: 'Enjoy a speedboat trip to Coral Island with Indian lunch included.',
    icon: 'Ship',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
    tag: 'Speedboat & Lunch'
  },
  {
    title: 'Bangkok Temple Tour',
    desc: 'Explore Mini Reclining Buddha, Golden Buddha and Gems Gallery.',
    icon: 'Landmark',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80',
    tag: 'Cultural Heritage'
  },
  {
    title: 'Comfortable Hotel Stays',
    desc: 'Stay at selected 4-star hotels with daily breakfast.',
    icon: 'Hotel',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    tag: '4-Star Comfort'
  },
  {
    title: 'Airport Transfers',
    desc: 'Airport and inter-hotel transfers included in your package.',
    icon: 'Car',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80',
    tag: 'Seamless Transit'
  },
];

export const DESTINATIONS = [
  {
    id: 'pattaya',
    city: 'PATTAYA',
    theme: 'Beaches, Islands & Excitement',
    description: 'Discover the coastal side of Thailand with beautiful beaches, exciting island experiences and plenty of opportunities to explore. Your Pattaya stay includes a Coral Island tour by speedboat with Indian lunch.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Coral Island sightseeing.',
      'Speedboat experience.',
      'Beautiful beaches.',
      'Free time to explore Pattaya.',
    ],
    stayNights: '2 Nights Stay',
    atmosphere: 'Tropical Turquoise Waters & Lively Beach Walks'
  },
  {
    id: 'bangkok',
    city: 'BANGKOK',
    theme: 'Culture, Shopping & City Life',
    description: 'Experience the energy of Bangkok, from beautiful temples and cultural attractions to shopping streets and lively city experiences. Your package includes a Bangkok City Temple Tour, while Day 4 gives you free time to explore the city at your own pace.',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1400&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Bangkok City Temple Tour.',
      'Golden Buddha.',
      'Mini Reclining Buddha.',
      'Gems Gallery.',
      'Free time for shopping and exploring.',
    ],
    stayNights: '2 Nights Stay',
    atmosphere: 'Majestic Golden Shrines & High-Energy Nightlife'
  }
];

export const ITINERARY_DAYS: ItineraryDay[] = [
  {
    day: 1,
    title: 'Welcome to Thailand',
    subtitle: 'Bangkok to Pattaya',
    description: 'Your Thailand adventure begins! Arrive at Bangkok Airport, meet the local team, and transfer comfortably to Pattaya for check-in at Beston Pattaya with evening leisure.',
    activities: [
      'Arrive at Bangkok Airport.',
      'Meet the local team.',
      'Transfer to your Pattaya hotel.',
      'Check in at Beston Pattaya.',
      'Enjoy your free time exploring Pattaya.',
    ],
    overnight: 'Pattaya',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=85',
    badge: 'Arrival & Scenic Transfer'
  },
  {
    day: 2,
    title: 'Coral Island Adventure',
    subtitle: 'Speedboat & Turquoise Waters',
    description: 'Get ready for a beautiful island experience! Speedboat across the Gulf of Thailand to Coral Island with soft sandy shores and an authentic Indian lunch included.',
    activities: [
      'Enjoy breakfast at the hotel.',
      'Get picked up for your Coral Island tour.',
      'Travel to Coral Island by speedboat.',
      'Enjoy the beaches and beautiful surroundings.',
      'Indian lunch included.',
      'Return to your hotel and enjoy your evening.',
    ],
    overnight: 'Pattaya',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85',
    badge: 'Speedboat & Indian Lunch'
  },
  {
    day: 3,
    title: 'Pattaya to Bangkok',
    subtitle: 'City & Temple Tour',
    description: 'Time to explore Bangkok! Check out after breakfast, journey to the capital city for an inspiring temple tour, and check in at Best Western Sukhumvit 20.',
    activities: [
      'Enjoy breakfast and check out from your Pattaya hotel.',
      'Transfer to Bangkok.',
      'Enjoy the Bangkok City Temple Tour.',
      'Visit Mini Reclining Buddha, Golden Buddha and Gems Gallery.',
      'Check in at Best Western Sukhumvit 20.',
    ],
    overnight: 'Bangkok',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=85',
    badge: 'Golden Temple Heritage'
  },
  {
    day: 4,
    title: 'Explore Bangkok at Your Own Pace',
    subtitle: 'Shopping, Cafes & Vibrant Nightlife',
    description: 'A day to enjoy Bangkok your way! Dive into world-famous shopping malls, bustling street markets, or add optional cruises for an unforgettable night.',
    activities: [
      'Enjoy breakfast at the hotel.',
      'Explore the city and its shopping destinations.',
      'Visit local markets and discover Bangkok\'s lifestyle.',
      'Choose optional experiences to make your day more exciting.',
    ],
    overnight: 'Bangkok',
    image: 'https://images.unsplash.com/photo-1510379872555-a6306616664c?auto=format&fit=crop&w=1200&q=85',
    badge: 'Free Exploration & Leisure'
  },
  {
    day: 5,
    title: 'Goodbye Thailand',
    subtitle: 'Bangkok to Delhi',
    description: 'Time to wrap up your Thailand getaway! Savour hotel breakfast, checkout, transfer to Bangkok Airport, and board your return non-stop Air India flight to Delhi.',
    activities: [
      'Enjoy breakfast at the hotel.',
      'Check out from your hotel.',
      'Transfer to Bangkok Airport.',
      'Board your return Air India flight to Delhi.',
      'Take home wonderful memories of Thailand!',
    ],
    overnight: 'Delhi (Home)',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85',
    badge: 'Return Flight to Delhi'
  },
];

export const HOTELS: HotelDetail[] = [
  {
    city: 'Pattaya',
    name: 'Beston Pattaya',
    stayDuration: 'Stay: 2 Nights',
    category: 'Hotel Category: 4 Star',
    roomType: 'Room Type: Deluxe Room',
    mealPlan: 'Meal Plan: Breakfast Included',
    description: 'A contemporary 4-star haven situated near Central Pattaya with spacious modern Deluxe Rooms, expansive outdoor swimming pool, and relaxing tropical terrace.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85',
    features: ['Large Outdoor Swimming Pool', 'Deluxe Room Included', 'Free High-speed Wi-Fi', 'Daily Breakfast Buffet', 'Close to Beach Boulevard']
  },
  {
    city: 'Bangkok',
    name: 'Best Western Sukhumvit 20',
    stayDuration: 'Stay: 2 Nights',
    category: 'Hotel Category: 4 Star',
    roomType: 'Room Type: Superior Room',
    mealPlan: 'Meal Plan: Breakfast Included',
    description: 'Nestled in the prime cosmopolitan heartbeat of Sukhumvit 20, moments away from Asok BTS station, luxury shopping malls, and Bangkok\'s finest dining avenues.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85',
    features: ['Prime Sukhumvit 20 Address', 'Superior Room Included', 'Walking Distance to BTS Skytrain', 'Rooftop Bar & Lounge', 'Daily International Breakfast']
  }
];

export const ADDONS: AddonExperience[] = [
  {
    id: 'safari-world',
    name: 'Marine Park & Safari World',
    description: 'Experience exciting wildlife and marine attractions at Safari World.',
    price: 3600,
    priceLabel: '₹3,600',
    badge: 'Top Recommendation',
    image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chao-phraya-cruise',
    name: 'Chao Phraya Cruise Dinner',
    description: 'Enjoy a memorable dinner cruise along Bangkok\'s famous Chao Phraya River.',
    price: 3000,
    priceLabel: '₹3,000',
    badge: 'Evening Highlight',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tiger-park',
    name: 'Tiger Park – Medium Tiger',
    description: 'Add a Tiger Park experience to your Thailand holiday.',
    price: 1400,
    priceLabel: '₹1,400',
    note: 'Tickets Only.',
    badge: 'Adventure Extra',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'unlimited-esim',
    name: 'Unlimited eSIM',
    description: 'Stay connected throughout your Thailand holiday with an unlimited data eSIM.',
    price: 800,
    priceLabel: '₹800',
    badge: 'Seamless Connectivity',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80'
  }
];

export const INCLUSIONS = [
  'Return non-stop Air India flights from Delhi.',
  '2 Nights accommodation in Pattaya.',
  '2 Nights accommodation in Bangkok.',
  'Daily breakfast at hotels.',
  'Coral Island tour by speedboat.',
  'Indian lunch during Coral Island tour.',
  'Bangkok City Temple Tour.',
  'Airport transfers.',
  'Inter-hotel transfers.',
  'Complimentary eSIM.',
  'Travel insurance.',
];

export const EXCLUSIONS = [
  'Personal expenses such as shopping, laundry and tips.',
  'Meals not mentioned in the inclusions.',
  'Optional activities and experiences.',
  'Any service not specifically mentioned under inclusions.',
];

export const WHY_BOOK = [
  {
    title: 'Carefully Planned Itineraries',
    description: 'Explore two destinations through a planned 5-day travel experience.',
    icon: 'Compass'
  },
  {
    title: 'Flights and Hotels Together',
    description: 'Your return flights and accommodation are arranged as part of one package.',
    icon: 'Layers'
  },
  {
    title: 'Sightseeing Experiences Included',
    description: 'Enjoy Coral Island and Bangkok City Temple sightseeing.',
    icon: 'Sparkles'
  },
  {
    title: 'Travel Assistance',
    description: 'Get important trip updates and 24×7 support through the OnTrip app.',
    icon: 'Headphones'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: 'Can two people book this Thailand package?',
    answer: 'Yes! This package is designed for two travellers. You can travel with your partner, husband or wife, friend, or another travel companion.',
  },
  {
    id: 2,
    question: 'Is this package suitable for unmarried couples?',
    answer: 'The package is designed for two travellers. Hotel check-in policies and applicable identification requirements will need to be followed.',
  },
  {
    id: 3,
    question: 'What is the total price of this Thailand package?',
    answer: 'The quoted package price is ₹1,22,000 for two travellers, which comes to ₹61,000 per person for the 30 December – 3 January itinerary.',
  },
  {
    id: 4,
    question: 'What is the duration of this Thailand package?',
    answer: 'The package is for 4 Nights and 5 Days, including 2 nights in Pattaya and 2 nights in Bangkok.',
  },
  {
    id: 5,
    question: 'From where do the flights depart?',
    answer: 'The package includes non-stop return Air India flights from Delhi.',
  },
  {
    id: 6,
    question: 'Are flights included in the package price?',
    answer: 'Yes. Return non-stop Air India flights from Delhi are included.',
  },
  {
    id: 7,
    question: 'Which hotels are included?',
    answer: 'The itinerary includes Beston Pattaya for 2 nights and Best Western Sukhumvit 20 in Bangkok for 2 nights.',
  },
  {
    id: 8,
    question: 'Is breakfast included?',
    answer: 'Yes. Daily breakfast is included during your hotel stay.',
  },
  {
    id: 9,
    question: 'Is Coral Island included?',
    answer: 'Yes. Coral Island sightseeing by speedboat with Indian lunch is included.',
  },
  {
    id: 10,
    question: 'Is the Bangkok Temple Tour included?',
    answer: 'Yes. The Bangkok City Temple Tour covering Mini Reclining Buddha, Golden Buddha and Gems Gallery is included.',
  },
  {
    id: 11,
    question: 'Are Marine Park and Safari World included?',
    answer: 'These are optional add-ons and can be selected separately for ₹3,600.',
  },
  {
    id: 12,
    question: 'Can we add the Chao Phraya Cruise Dinner?',
    answer: 'Yes. You can add the Chao Phraya Cruise Dinner for ₹3,000.',
  },
  {
    id: 13,
    question: 'Is the Tiger Park experience included?',
    answer: 'No. It is an optional add-on costing ₹1,400. The price covers tickets only.',
  },
  {
    id: 14,
    question: 'Is an eSIM included?',
    answer: 'A complimentary eSIM is included in the base itinerary. An unlimited eSIM option is also available for ₹800.',
  },
  {
    id: 15,
    question: 'How much do we need to pay to hold our seats?',
    answer: 'You can hold your seats with a booking token of just ₹500. Contact our team for the applicable booking and payment terms.',
  },
  {
    id: 16,
    question: 'What are the available departure dates?',
    answer: 'The currently listed departures are 30 December, 13 January, 27 January, 24 February and 10 March. Please confirm the applicable year and availability with our team.',
  },
  {
    id: 17,
    question: 'Is the package price the same for every departure?',
    answer: 'Flight and hotel rates can vary depending on the departure date. Contact our team to get the latest quotation for your preferred date.',
  },
  {
    id: 18,
    question: 'Are airport transfers included?',
    answer: 'Yes. Airport and inter-hotel transfers are included on a shared-in-coach (SIC) basis.',
  },
  {
    id: 19,
    question: 'Will we get assistance during our trip?',
    answer: 'Yes. The itinerary includes access to the OnTrip app for important trip updates and 24×7 support.',
  },
  {
    id: 20,
    question: 'Can we add optional activities after booking?',
    answer: 'Optional activities can be discussed with our travel team. Their availability and applicable pricing will need to be confirmed.',
  },
];
