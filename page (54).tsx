import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists Chatswood Sydney — VirkTree",
  description: "Professional removalists in Chatswood 2067. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days a week. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="Chatswood"
      region="North Shore Sydney"
      postcode="2067"
      nearbySuburbs={["Willoughby", "Artarmon", "Lane Cove", "North Ryde", "Gordon"]}
    />
  );
}
