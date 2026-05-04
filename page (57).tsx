import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists Mona Vale Sydney — VirkTree",
  description: "Professional removalists in Mona Vale 2103. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days a week. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="Mona Vale"
      region="Northern Beaches"
      postcode="2103"
      nearbySuburbs={["Narrabeen", "Newport", "Warriewood", "St Ives Chase", "Ingleside"]}
    />
  );
}
