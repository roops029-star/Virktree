import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists Merrylands Sydney — VirkTree",
  description: "Professional removalists in Merrylands 2160. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="Merrylands"
      region="Western Sydney"
      postcode="2160"
      nearbySuburbs={["Granville", "Guildford", "Woodville", "Wentworthville", "Pemulwuy"]}
    />
  );
}
