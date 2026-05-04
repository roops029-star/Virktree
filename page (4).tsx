import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists Norwest Sydney — VirkTree",
  description: "Professional removalists in Norwest 2153. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days a week. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="Norwest"
      region="Hills District"
      postcode="2153"
      nearbySuburbs={["Bella Vista", "Baulkham Hills", "Kellyville", "Castle Hill", "Rouse Hill"]}
    />
  );
}
