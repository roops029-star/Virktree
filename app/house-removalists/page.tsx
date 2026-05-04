import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "House Removalists Sydney",
  description: "Professional house removalists in Sydney. VirkTree handles residential moves of all sizes — apartments to large family homes. Fully insured, transparent pricing from $120/hr.",
};

export default function HouseRemovalists() {
  return (
    <ServicePageLayout title="House Removalists Sydney">
      <h1>Professional House Removalists in Sydney</h1>
      <p>Moving house is one of life's biggest events, and VirkTree is here to make it stress-free. As Sydney's trusted house removalists, we handle every aspect of your residential move with care, professionalism, and transparent pricing.</p>
      <h2>Why Choose VirkTree for Your House Move?</h2>
      <p>With years of experience moving families across Sydney and beyond, VirkTree has built a reputation for reliability. Our team of trained removalists treats your belongings as if they were our own.</p>
      <ul>
        <li><strong>Fully insured</strong> — complete protection for your possessions during transit</li>
        <li><strong>Transparent pricing</strong> — pay by the hour based on your move volume, no hidden fees</li>
        <li><strong>Experienced team</strong> — trained professionals who handle furniture, appliances, and fragile items with care</li>
        <li><strong>Flexible scheduling</strong> — available 7 days a week, 6am to 8pm</li>
      </ul>
      <h2>Our House Removalist Services</h2>
      <ul>
        <li>Furniture disassembly and reassembly</li>
        <li>Careful wrapping and protection of all items</li>
        <li>Loading and unloading with professional equipment</li>
        <li>Transport in clean, well-maintained trucks</li>
        <li>Placement of furniture in your new home exactly where you want it</li>
      </ul>
      <h2>Serving All Sydney Suburbs</h2>
      <p>VirkTree provides house removalist services across all of Sydney, including the Inner West, Eastern Suburbs, North Shore, Northern Beaches, Western Sydney, Sutherland Shire, and the Hills District. We also service the Central Coast, Blue Mountains, Wollongong, and Newcastle.</p>
      <h2>Pricing</h2>
      <ul>
        <li><strong>Up to 20 cubic metres:</strong> $120 per hour</li>
        <li><strong>Over 20 cubic metres:</strong> $130 per hour</li>
      </ul>
      <p>No call-out fees, no surprise charges — minimum 2-hour booking.</p>
    </ServicePageLayout>
  );
}
