import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists Rouse Hill Sydney — VirkTree",
  description: "Professional removalists in Rouse Hill 2155. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="Rouse Hill"
      region="Hills District"
      postcode="2155"
      nearbySuburbs={["Kellyville Ridge", "The Ponds", "Beaumont Hills", "Stanhope Gardens", "Box Hill"]}
    />
  );
}
