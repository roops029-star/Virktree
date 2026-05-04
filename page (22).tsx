import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Packing and Unpacking Services Sydney",
  description: "Professional packing and unpacking services in Sydney. VirkTree packs your entire home using quality materials — or just unpacks and sets up at the other end.",
};

export default function PackingAndUnpacking() {
  return (
    <ServicePageLayout title="Packing and Unpacking Services Sydney">
      <h1>Professional Packing & Unpacking Services in Sydney</h1>
      <p>Packing is the part most people dread. VirkTree's packing service takes it completely off your plate — we supply the materials, do the packing, and unpack and set up at your new home.</p>
      <h2>What's Included</h2>
      <ul>
        <li>Quality boxes in small, medium, and large sizes</li>
        <li>Bubble wrap and packing paper for fragile items</li>
        <li>Wardrobe boxes to keep clothes on hangers</li>
        <li>Labelling of every box by room</li>
        <li>Unpacking and placement at your new address</li>
      </ul>
      <h2>Full Pack or Partial Pack</h2>
      <p>We offer full packing (we pack everything), partial packing (you pack the easy stuff, we handle the fragile and bulky items), or just an unpacking service if you've already moved.</p>
      <h2>Why Professional Packing Matters</h2>
      <p>Improperly packed items are the number one cause of damage during moves. Our team is trained to pack efficiently and safely — protecting your belongings while minimising the volume of your move.</p>
    </ServicePageLayout>
  );
}
