import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists Marsden Park Sydney — VirkTree",
  description: "Professional removalists in Marsden Park 2765. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days a week. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="Marsden Park"
      region="North-West Sydney"
      postcode="2765"
      nearbySuburbs={["Schofields", "Riverstone", "Box Hill", "Oakville", "Rouse Hill"]}
    />
  );
}
