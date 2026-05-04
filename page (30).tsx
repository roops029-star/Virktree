import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists Burwood Sydney — VirkTree",
  description: "Professional removalists in Burwood 2134. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days a week. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="Burwood"
      region="Inner West Sydney"
      postcode="2134"
      nearbySuburbs={["Strathfield", "Croydon", "Ashfield", "Concord", "Five Dock"]}
    />
  );
}
