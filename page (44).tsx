import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists Auburn Sydney — VirkTree",
  description: "Professional removalists in Auburn 2144. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days a week. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="Auburn"
      region="Western Sydney"
      postcode="2144"
      nearbySuburbs={["Granville", "Lidcombe", "Berala", "Regents Park", "Silverwater"]}
    />
  );
}
