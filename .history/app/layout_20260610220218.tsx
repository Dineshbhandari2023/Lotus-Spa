import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Lotus Spa Nepal - Premium Luxury Wellness & Therapy Centers',
  description: 'Discover ultimate relaxation at Lotus Spa Nepal. Offering expert Ayurvedic massages, Deep Tissue therapy, Traditional Thai Yoga, Facials, Steam, and Sauna services in Itahari, Dharan, Biratnagar, and Kathmandu.',
  keywords: 'Lotus Spa Itahari, Spa Sunsari, Massage Dharan, Spa Biratnagar, Ayurvedic treatment Nepal, Deep Tissue massage Itahari, steam bath Sunsari, sauna Nepal, Lotus relaxing massage',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

