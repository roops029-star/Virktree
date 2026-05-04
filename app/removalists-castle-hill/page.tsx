import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists Castle Hill Sydney — VirkTree",
  description: "Professional removalists in Castle Hill 2154. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="Castle Hill"
      region="Hills District"
      postcode="2154"
      nearbySuburbs={["Baulkham Hills", "Kellyville", "Cherrybrook", "West Pennant Hills", "Bella Vista"]}
    />
  );
}
