import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Interstate Removalists Sydney",
  description: "Interstate removalists from Sydney to Melbourne, Brisbane, Adelaide, and Canberra. VirkTree offers secure direct transport with transparent pricing.",
};

export default function InterstateRemovalists() {
  return (
    <ServicePageLayout title="Interstate Removalists Sydney">
      <h1>Interstate Removalists from Sydney</h1>
      <p>Moving interstate doesn't have to be stressful. VirkTree provides direct, secure interstate removal services from Sydney to all major cities and regional areas.</p>
      <h2>Interstate Routes We Cover</h2>
      <ul>
        <li><strong>Sydney to Melbourne</strong> — regular runs, fully insured transport</li>
        <li><strong>Sydney to Brisbane</strong> — direct freight, no depot transfers</li>
        <li><strong>Sydney to Canberra</strong> — fast turnaround, same-day delivery available</li>
        <li><strong>Sydney to Adelaide</strong> — careful handling for the long haul</li>
      </ul>
      <h2>Why Interstate Moves Need Specialists</h2>
      <p>Long-distance moves require proper securing, route planning, and insurance coverage that exceeds what a local move needs. VirkTree has the equipment and experience to get your belongings there safely.</p>
      <h2>Get an Interstate Quote</h2>
      <p>Interstate pricing depends on volume and distance. Use our cubic metre calculator to estimate your volume, then call us on 0414 866 630 for a confirmed interstate quote.</p>
    </ServicePageLayout>
  );
}
