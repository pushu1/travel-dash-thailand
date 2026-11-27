import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Travel Dash – Thailand Getaway | 4 Nights / 5 Days (Pattaya & Bangkok)',
  description: 'Your Next Great Escape Starts in Thailand! 4 Nights / 5 Days covering Pattaya beaches & Bangkok skyline. ₹61,000/person (₹1,22,000 for 2 travellers). Non-stop Air India flights from Delhi, 4-star hotels, Coral Island speedboat tour, temple sightseeing & transfers. Hold seats for just ₹500!',
  keywords: [
    'Thailand luxury getaway',
    'Thailand tour package 4 nights 5 days',
    'Pattaya and Bangkok package',
    'Travel Dash Thailand',
    'Air India flights to Bangkok',
    'Coral Island tour speedboat',
    'Bangkok temple tour',
    'Couple travel Thailand',
    'Thailand holiday package from Delhi'
  ],
  authors: [{ name: 'Travel Dash', url: 'https://traveldash.in' }],
  creator: 'Travel Dash',
  publisher: 'Travel Dash',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Travel Dash – Thailand Getaway | 4 Nights / 5 Days',
    description: 'Your Next Great Escape Starts in Thailand! Explore Pattaya beaches & Bangkok culture with non-stop Air India flights, 4-star hotels & sightseeing. ₹61,000/person. Hold your seats for ₹500!',
    url: 'https://travel-dash-thailand.vercel.app',
    siteName: 'Travel Dash',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Travel Dash Thailand Getaway - Pattaya & Bangkok',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel Dash – Thailand Getaway | 4 Nights / 5 Days',
    description: 'Your Next Great Escape Starts in Thailand! 4N/5D Pattaya & Bangkok with non-stop Air India flights & 4-star hotel stays. ₹61,000/person. Hold seats for ₹500!',
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#071B2C',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: 'Travel Dash – Thailand Getaway | 4 Nights / 5 Days',
    description: 'Complete 4 Nights / 5 Days holiday covering Pattaya and Bangkok, with return non-stop Air India flights from Delhi, 4-star hotels, Coral Island tour, Bangkok temple tour, breakfast, and transfers.',
    touristType: ['Couple', 'Friends', 'Holiday Seekers'],
    offers: {
      '@type': 'Offer',
      price: '61000',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: 'https://travel-dash-thailand.vercel.app',
      description: '₹61,000 per person, ₹1,22,000 for 2 travellers. Hold seats for ₹500 token amount.',
    },
    itinerary: {
      '@type': 'ItemList',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Welcome to Thailand | Bangkok to Pattaya & Beston Check-in' },
        { '@type': 'ListItem', position: 2, name: 'Coral Island Adventure by Speedboat with Indian Lunch' },
        { '@type': 'ListItem', position: 3, name: 'Pattaya to Bangkok | City & Temple Tour & Best Western Check-in' },
        { '@type': 'ListItem', position: 4, name: 'Explore Bangkok at Your Own Pace & Shopping' },
        { '@type': 'ListItem', position: 5, name: 'Goodbye Thailand | Transfer to Airport & Return Flight to Delhi' },
      ],
    },
    provider: {
      '@type': 'TravelAgency',
      name: 'Travel Dash',
      telephone: '+91 90577 06333',
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✈️</text></svg>" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-[#071B2C] text-[#F5EBDD] font-sans selection:bg-[#D6B36A] selection:text-[#071B2C]">
        {children}
      </body>
    </html>
  );
}
