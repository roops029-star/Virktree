import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists Campbelltown Sydney — VirkTree",
  description: "Professional removalists in Campbelltown 2560. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days a week. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="Campbelltown"
      region="South-West Sydney"
      postcode="2560"
      nearbySuburbs={["Macquarie Fields", "Ingleburn", "Minto", "Leumeah", "Eagle Vale"]}
    />
  );
}
