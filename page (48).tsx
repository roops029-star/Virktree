import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists Granville Sydney — VirkTree",
  description: "Professional removalists in Granville 2142. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days a week. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="Granville"
      region="Western Sydney"
      postcode="2142"
      nearbySuburbs={["Parramatta", "Merrylands", "Auburn", "South Granville", "Woodville"]}
    />
  );
}
