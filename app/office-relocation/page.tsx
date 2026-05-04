import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Office Relocation Sydney",
  description: "Professional office relocation services in Sydney. VirkTree moves businesses with minimal downtime — evenings, weekends, and after-hours available.",
};

export default function OfficeRelocation() {
  return (
    <ServicePageLayout title="Office Relocation Sydney">
      <h1>Office Relocation Services in Sydney</h1>
      <p>Office moves need to happen fast and with minimal disruption. VirkTree works around your schedule — including evenings and weekends — to keep your business running without costly downtime.</p>
      <h2>What We Move</h2>
      <ul>
        <li>Desks, chairs, and workstations</li>
        <li>Filing cabinets and storage units</li>
        <li>IT equipment and servers (properly packed)</li>
        <li>Reception furniture and display units</li>
        <li>Kitchen appliances and common area items</li>
      </ul>
      <h2>Our Office Move Process</h2>
      <p>We start with a pre-move consultation to understand your floor plan, access points, and IT setup. Then we plan the sequence to get everything moved in the shortest possible time.</p>
      <h2>After-Hours Availability</h2>
      <p>Most office moves happen on weekends or overnight. VirkTree is available 7 days a week, 6am to 8pm, and can arrange after-hours moves by arrangement.</p>
      <h2>Get a Quote</h2>
      <p>Call us on 0414 866 630 for a free on-site assessment, or use our calculator to estimate your office volume.</p>
    </ServicePageLayout>
  );
}
