import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists Box Hill Sydney — VirkTree",
  description: "Professional removalists in Box Hill 2765. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days a week. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="Box Hill"
      region="North-West Sydney"
      postcode="2765"
      nearbySuburbs={["Rouse Hill", "Marsden Park", "Schofields", "Riverstone", "Windsor"]}
    />
  );
}
