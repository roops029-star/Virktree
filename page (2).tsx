import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists Hurstville Sydney — VirkTree",
  description: "Professional removalists in Hurstville 2220. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days a week. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="Hurstville"
      region="Southern Sydney"
      postcode="2220"
      nearbySuburbs={["Kogarah", "Penshurst", "Peakhurst", "Oatley", "Mortdale"]}
    />
  );
}
