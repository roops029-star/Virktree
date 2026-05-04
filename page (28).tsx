import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists Lidcombe Sydney — VirkTree",
  description: "Professional removalists in Lidcombe 2141. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days a week. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="Lidcombe"
      region="Western Sydney"
      postcode="2141"
      nearbySuburbs={["Auburn", "Silverwater", "Berala", "Rookwood", "Homebush"]}
    />
  );
}
