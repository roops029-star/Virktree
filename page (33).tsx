import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists Quakers Hill Sydney — VirkTree",
  description: "Professional removalists in Quakers Hill 2763. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days a week. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="Quakers Hill"
      region="North-West Sydney"
      postcode="2763"
      nearbySuburbs={["Schofields", "The Ponds", "Blacktown", "Lalor Park", "Kings Langley"]}
    />
  );
}
