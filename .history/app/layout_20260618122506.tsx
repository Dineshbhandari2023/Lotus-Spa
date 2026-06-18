import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Lotus Spa Nepal - Premium Luxury Wellness & Therapy Centers",
  description:
    "Discover ultimate relaxation at Lotus Spa Nepal. Offering expert Ayurvedic massages, Deep Tissue therapy, Traditional Thai Yoga, Facials, Steam, and Sauna services in Itahari, Dharan, Biratnagar, and Kathmandu.",
  keywords:
    "Lotus Spa Itahari, Spa Sunsari, Massage Dharan, Spa Biratnagar, Ayurvedic treatment Nepal, Deep Tissue massage Itahari, steam bath Sunsari, sauna Nepal, Lotus relaxing massage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
