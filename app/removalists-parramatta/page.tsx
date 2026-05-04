import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists Parramatta Sydney — VirkTree",
  description: "Professional removalists in Parramatta 2150. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="Parramatta"
      region="Western Sydney"
      postcode="2150"
      nearbySuburbs={["Westmead", "Harris Park", "Granville", "Merrylands", "North Parramatta"]}
    />
  );
}
