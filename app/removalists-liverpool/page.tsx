import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists Liverpool Sydney — VirkTree",
  description: "Professional removalists in Liverpool 2170. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="Liverpool"
      region="South Western Sydney"
      postcode="2170"
      nearbySuburbs={["Casula", "Moorebank", "Prestons", "Wattle Grove", "Cecil Hills"]}
    />
  );
}
