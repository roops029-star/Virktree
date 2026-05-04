import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists Casula Sydney — VirkTree",
  description: "Professional removalists in Casula 2170. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days a week. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="Casula"
      region="South-West Sydney"
      postcode="2170"
      nearbySuburbs={["Liverpool", "Moorebank", "Prestons", "Wattle Grove", "Lurnea"]}
    />
  );
}
