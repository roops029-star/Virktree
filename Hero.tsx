import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists Newtown Sydney — VirkTree",
  description: "Professional removalists in Newtown 2042. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days a week. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="Newtown"
      region="Inner West Sydney"
      postcode="2042"
      nearbySuburbs={["Enmore", "Erskineville", "Camperdown", "Stanmore", "Marrickville"]}
    />
  );
}
