import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Travel Dash – Thailand Getaway | 4 Nights / 5 Days (Pattaya & Bangkok)',
  description: 'Experience an unforgettable Thailand getaway with Travel Dash. ₹61,000/person (₹1,22,000 for 2 travellers). Non-stop Air India flights from Delhi, 4-star hotels in Pattaya & Bangkok, Coral Island speedboat tour, temple sightseeing & transfers. Hold your seats for just ₹500!',
  keywords: [
    'Thailand tour package',
    'Thailand 4 nights 5 days',
    'Pattaya and Bangkok package',
    'Travel Dash Thailand',
    'Air India flights to Bangkok',
    'Coral Island tour',
    'Bangkok temple tour',
    'Couple travel Thailand',
    'Thailand package from Delhi'
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
    description: 'Explore Pattaya beaches & vibrant Bangkok with non-stop Air India flights, 4-star hotels, transfers & sightseeing. ₹61,000 per person. Hold your seats for ₹500!',
    url: 'https://traveldash.in/thailand',
    siteName: 'Travel Dash',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Thailand Getaway by Travel Dash - Pattaya & Bangkok',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel Dash – Thailand Getaway | 4 Nights / 5 Days',
    description: 'Explore Pattaya beaches & Bangkok culture with non-stop Air India flights & 4-star stays. ₹61,000/person. Hold seats for ₹500!',
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#0B1320',
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
      validFrom: '2024-11-01',
      url: 'https://traveldash.in',
      description: '₹61,000 per person, ₹1,22,000 for 2 travellers. Hold seats for ₹500 token amount.',
    },
    itinerary: {
      '@type': 'ItemList',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Welcome to Thailand | Bangkok to Pattaya & Hotel Check-in' },
        { '@type': 'ListItem', position: 2, name: 'Coral Island Adventure by Speedboat with Indian Lunch' },
        { '@type': 'ListItem', position: 3, name: 'Pattaya to Bangkok | Bangkok City & Temple Tour' },
        { '@type': 'ListItem', position: 4, name: 'Explore Bangkok at Your Own Pace & Shopping' },
        { '@type': 'ListItem', position: 5, name: 'Goodbye Thailand | Transfer to Airport & Return to Delhi' },
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
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌴</text></svg>" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-[#070D18] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-900">
        {children}
      </body>
    </html>
  );
}
