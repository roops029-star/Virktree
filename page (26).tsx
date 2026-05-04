import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists Rooty Hill Sydney — VirkTree",
  description: "Professional removalists in Rooty Hill 2766. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days a week. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="Rooty Hill"
      region="Western Sydney"
      postcode="2766"
      nearbySuburbs={["Mount Druitt", "Doonside", "Blacktown", "Bidwill", "Willmot"]}
    />
  );
}
