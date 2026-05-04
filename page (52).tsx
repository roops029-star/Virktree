import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists Bella Vista Sydney — VirkTree",
  description: "Professional removalists in Bella Vista 2153. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days a week. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="Bella Vista"
      region="Hills District"
      postcode="2153"
      nearbySuburbs={["Norwest", "Baulkham Hills", "Castle Hill", "Kellyville", "Stanhope Gardens"]}
    />
  );
}
