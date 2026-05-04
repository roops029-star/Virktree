import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists Blacktown Sydney — VirkTree",
  description: "Professional removalists in Blacktown 2148. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="Blacktown"
      region="Western Sydney"
      postcode="2148"
      nearbySuburbs={["Seven Hills", "Toongabbie", "Kings Langley", "Prospect", "Quakers Hill"]}
    />
  );
}
