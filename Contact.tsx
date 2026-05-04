import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists Cronulla Sydney — VirkTree",
  description: "Professional removalists in Cronulla 2230. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days a week. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="Cronulla"
      region="Southern Sydney"
      postcode="2230"
      nearbySuburbs={["Miranda", "Caringbah", "Sutherland", "Woolooware", "Taren Point"]}
    />
  );
}
