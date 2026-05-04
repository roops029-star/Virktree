import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Local Moving Sydney",
  description: "Local moving services across Sydney. VirkTree's team knows every suburb — fast, efficient moves from $120/hr. Call 0414 866 630.",
};

export default function LocalMoving() {
  return (
    <ServicePageLayout title="Local Moving Sydney">
      <h1>Local Moving Services in Sydney</h1>
      <p>Whether you're moving across the street or to the other side of Sydney, VirkTree delivers fast, efficient local moving services at transparent hourly rates.</p>
      <h2>What Makes Our Local Moving Service Different?</h2>
      <ul>
        <li><strong>We know Sydney</strong> — our team knows every suburb, avoiding traffic and narrow streets</li>
        <li><strong>Same-day availability</strong> — flexible scheduling 7 days a week</li>
        <li><strong>Efficient crew</strong> — trained to move quickly without cutting corners on care</li>
        <li><strong>No hidden fees</strong> — you pay the hourly rate, nothing more</li>
      </ul>
      <h2>Areas We Service</h2>
      <p>Western Sydney, Blacktown, Parramatta, Penrith, Hills District, Inner West, Eastern Suburbs, North Shore, Northern Beaches, Sutherland Shire, and everywhere in between.</p>
      <h2>Local Moving Rates</h2>
      <ul>
        <li><strong>Up to 20 cubic metres:</strong> $120/hr — perfect for units and small homes</li>
        <li><strong>Over 20 cubic metres:</strong> $130/hr — ideal for larger family homes</li>
      </ul>
    </ServicePageLayout>
  );
}
