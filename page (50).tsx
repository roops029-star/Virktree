import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists Strathfield Sydney — VirkTree",
  description: "Professional removalists in Strathfield 2135. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days a week. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="Strathfield"
      region="Inner West Sydney"
      postcode="2135"
      nearbySuburbs={["Burwood", "Homebush", "Flemington", "Croydon", "Concord"]}
    />
  );
}
