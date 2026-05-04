import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists Kellyville Sydney — VirkTree",
  description: "Professional removalists in Kellyville 2155. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="Kellyville"
      region="Hills District"
      postcode="2155"
      nearbySuburbs={["Rouse Hill", "Kellyville Ridge", "Baulkham Hills", "Castle Hill", "Beaumont Hills"]}
    />
  );
}
