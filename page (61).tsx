import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists Epping Sydney — VirkTree",
  description: "Professional removalists in Epping 2121. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days a week. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="Epping"
      region="North Shore Sydney"
      postcode="2121"
      nearbySuburbs={["Eastwood", "Carlingford", "Beecroft", "North Epping", "Marsfield"]}
    />
  );
}
