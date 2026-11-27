export interface LeadEnquiry {
  id: string;
  fullName: string;
  whatsappNumber: string;
  preferredDepartureDate: string;
  travellingWith: string;
  numberOfTravellers: string;
  selectedAddons?: string[];
  totalEstimatedPrice?: number;
  submittedAt: string;
  source?: string;
  status?: 'NEW' | 'CONTACTED' | 'SEAT_HELD' | 'BOOKED';
}

export interface ItineraryDay {
  day: number;
  title: string;
  subtitle: string;
  description: string;
  activities: string[];
  overnight: string;
  image: string;
  badge?: string;
}

export interface HotelDetail {
  city: string;
  name: string;
  stayDuration: string;
  category: string;
  roomType: string;
  mealPlan: string;
  description: string;
  image: string;
  features: string[];
}

export interface AddonExperience {
  id: string;
  name: string;
  description: string;
  price: number;
  priceLabel: string;
  note?: string;
  badge?: string;
  image: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category?: string;
}
