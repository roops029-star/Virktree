import ServicePageLayout from "@/components/ServicePageLayout";
import Link from "next/link";

interface SuburbPageProps {
  suburb: string;
  region: string;
  nearbySuburbs: string[];
  postcode: string;
}

export default function SuburbPage({ suburb, region, nearbySuburbs, postcode }: SuburbPageProps) {
  return (
    <ServicePageLayout title={`Removalists ${suburb}`}>
      <h1>Removalists {suburb} — Local Moving Experts</h1>
      <p>
        VirkTree provides professional removalist services in {suburb} ({postcode}) and across {region}. 
        Whether you're moving locally within {suburb} or relocating to another Sydney suburb, 
        our experienced team delivers a stress-free move at transparent, hourly rates.
      </p>

      <h2>Why Choose VirkTree for Your {suburb} Move?</h2>
      <ul>
        <li><strong>Local knowledge</strong> — we know {suburb}'s streets, parking restrictions, and building access</li>
        <li><strong>Fully insured</strong> — public liability and goods in transit insurance included</li>
        <li><strong>Transparent pricing</strong> — $120/hr for moves up to 20m³, $130/hr for larger moves</li>
        <li><strong>Available 7 days</strong> — 6am to 8pm, including weekends</li>
        <li><strong>No hidden fees</strong> — the rate you're quoted is the rate you pay</li>
      </ul>

      <h2>Services Available in {suburb}</h2>
      <ul>
        <li>House and apartment removals</li>
        <li>Office and commercial relocations</li>
        <li>Packing and unpacking</li>
        <li>Furniture-only moves</li>
        <li>Interstate connections from {suburb}</li>
      </ul>

      <h2>Serving {suburb} and Surrounds</h2>
      <p>
        Based in Western Sydney, our team regularly services {suburb} and nearby areas including{" "}
        {nearbySuburbs.join(", ")}. No job too big or too small.
      </p>

      <h2>How Our Pricing Works in {suburb}</h2>
      <p>
        We charge by the hour based on the volume of your move. Use our online cubic metre calculator 
        to estimate your move size, then call us on <a href="tel:0414866630">0414 866 630</a> for a 
        confirmed quote. Minimum 2-hour booking applies.
      </p>

      <h2>Get a Free Quote for Your {suburb} Move</h2>
      <p>
        Call us on <a href="tel:0414866630">0414 866 630</a> or use the calculator below. 
        We'll give you an honest, no-surprise quote within minutes.
      </p>
    </ServicePageLayout>
  );
}
