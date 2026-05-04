import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists Dee Why Sydney — VirkTree",
  description: "Professional removalists in Dee Why 2099. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days a week. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="Dee Why"
      region="Northern Beaches"
      postcode="2099"
      nearbySuburbs={["Curl Curl", "Narrabeen", "Collaroy", "Brookvale", "Freshwater"]}
    />
  );
}
