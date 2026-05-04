import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists Ashfield Sydney — VirkTree",
  description: "Professional removalists in Ashfield 2131. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days a week. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="Ashfield"
      region="Inner West Sydney"
      postcode="2131"
      nearbySuburbs={["Burwood", "Summer Hill", "Leichhardt", "Croydon", "Dulwich Hill"]}
    />
  );
}
