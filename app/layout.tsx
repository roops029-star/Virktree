import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "House Removalists & Moving Services Sydney | VirkTree",
    template: "%s | VirkTree Removalists Sydney",
  },
  description:
    "VirkTree provides professional house removalist and moving services in Sydney. Local and interstate moves, packing, loading, and transport. Get a free quote today.",
  metadataBase: new URL("https://www.virktree.com.au"),
  openGraph: {
    title: "VirkTree Removalists & Moving Services",
    description: "Professional house removalist and moving services. Local & interstate moves. Get a free quote today.",
    url: "https://www.virktree.com.au",
    siteName: "VirkTree",
    type: "website",
    images: [{ url: "/assets/virktree-logo.png" }],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "VirkTree Pty Ltd",
  url: "https://www.virktree.com.au",
  telephone: "+61414866630",
  email: "Virktree@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Sydney", addressRegion: "NSW", addressCountry: "AU" },
  openingHours: "Mo-Su 06:00-20:00",
  priceRange: "$$",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
