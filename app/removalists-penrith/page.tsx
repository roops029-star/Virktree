import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists Penrith Sydney — VirkTree",
  description: "Professional removalists in Penrith 2750. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="Penrith"
      region="Western Sydney"
      postcode="2750"
      nearbySuburbs={["Kingswood", "St Marys", "Werrington", "Jamisontown", "Emu Plains"]}
    />
  );
}
