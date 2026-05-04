import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists Seven Hills Sydney — VirkTree",
  description: "Professional removalists in Seven Hills 2147. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="Seven Hills"
      region="Western Sydney"
      postcode="2147"
      nearbySuburbs={["Blacktown", "Kings Langley", "Lalor Park", "Toongabbie", "Prospect"]}
    />
  );
}
