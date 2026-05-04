import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists Narrabeen Sydney — VirkTree",
  description: "Professional removalists in Narrabeen 2101. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days a week. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="Narrabeen"
      region="Northern Beaches"
      postcode="2101"
      nearbySuburbs={["Collaroy", "Dee Why", "Mona Vale", "Warriewood", "Elanora Heights"]}
    />
  );
}
