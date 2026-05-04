import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";

export const metadata: Metadata = {
  title: "Removalists St Marys Sydney — VirkTree",
  description: "Professional removalists in St Marys 2760. VirkTree offers local and interstate moving services from $120/hr. Fully insured, 7 days a week. Call 0414 866 630.",
};

export default function Page() {
  return (
    <SuburbPage
      suburb="St Marys"
      region="South-West Sydney"
      postcode="2760"
      nearbySuburbs={["Penrith", "Kingswood", "Werrington", "Cambridge Park", "Colyton"]}
    />
  );
}
